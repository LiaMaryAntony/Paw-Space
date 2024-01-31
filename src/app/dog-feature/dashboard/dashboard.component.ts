import { Component, OnDestroy, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/core/services/utility.service';
import { BreedImageDataQuery } from 'src/app/core/state/dog-data/dog-list.query';
import { DogListService } from 'src/app/core/services/dog-list.service';
import { BreedImageDataStore } from 'src/app/core/state/dog-data/dog-list.store';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  onDestroy$: Subject<boolean> = new Subject();
  breedNameList: string[] = [];
  subBreedNameList: string[] = [];
  breed: string = '';
  subBreed: string = '';
  breedName: string = '';
  allBreedsData: string[] = [];
  allBreedImages: string[] = [];
  noDataFound: boolean = false;

  constructor(
    public utility: UtilityService,
    private breedImageDataQuery: BreedImageDataQuery,
    private breedImageDataStore: BreedImageDataStore,
    private dogListService: DogListService
  ) {}
  ngOnInit() {
    // this.getAllBreedList();
    this.getRandomBreedImages();
  }
  // function to fetch all breed names
  getBreedNames(): void {
    if (this.breedNameList.length == 0) {
      this.dogListService.getAllBreeds().subscribe((response) => {
        if (!this.utility.isNullorUndefined(response)) {
          this.breedNameList = Object.keys(response.message);
        }
      });
    }
  }
  // function to fetch all sub breed names
  getSubBreedNames(): void {
    if (!this.utility.isNullorUndefined(this.breed)) {
      this.breedName = '';
      this.dogListService.getSubBreeds(this.breed).subscribe((response) => {
        this.subBreedNameList = response.message;
        localStorage.setItem(this.subBreed, response.message);
      });
    }
  }
  // function to fetch all breed names
  getAllBreedList(): void {
    this.dogListService.getAllBreeds().subscribe((response) => {
      if (!this.utility.isNullorUndefined(response)) {
        this.allBreedsData = Object.keys(response.message);
      }
    });
  }
  // function to display random breed images and store it using akita
  getRandomBreedImages(): void {
    this.dogListService.getRandomBreedImages().subscribe((response) => {
      this.allBreedImages = response.message;
      this.breedImageDataStore.update((state) => ({
        breedImageData: this.allBreedImages,
      }));
      this.breedImageDataStore.setHasCache(true);
    });
  }
  // function to filter result based on user input
  filterBreedData(): void {
    this.noDataFound = false;
    this.allBreedImages = [];
    if (!this.utility.isNullorUndefined(this.breedName)) {
      this.dogListService
        .searchByBreedRandom(this.breedName)
        .subscribe((response) => {
          if (!this.utility.isNullorUndefined(response)) {
            this.allBreedImages = !this.utility.isNullorUndefined(
              response.message
            )
              ? [response.message]
              : [];
            this.noDataFound = this.allBreedImages.length === 0 ? true : false;
          }
        });
    } else {
      if (!this.utility.isNullorUndefined(this.subBreed)) {
        this.dogListService
          .searchBySubBreed(this.breed, this.subBreed)
          .subscribe((response) => {
            if (!this.utility.isNullorUndefined(response)) {
              this.setBreedData(response.message);
            }
          });
      } else {
        if (!this.utility.isNullorUndefined(localStorage.getItem(this.breed))) {
          this.allBreedImages = JSON.parse(
            localStorage.getItem(this.breed) || '{}'
          ).message;
        } else {
          this.searchByBreed();
        }
      }
    }
  }

  // function to set values to allBreedImages variable, from service response
  setBreedData(breedImgList: string[]): void {
    this.allBreedImages = !this.utility.isNullorUndefined(breedImgList)
      ? breedImgList
      : [];
    this.noDataFound = this.allBreedImages.length === 0 ? true : false;
  }

  // function to filter result based on selected Breed
  searchByBreed(): void {
    this.dogListService.searchByBreed(this.breed).subscribe((response) => {
      if (!this.utility.isNullorUndefined(response)) {
        this.setBreedData(response.message);
        localStorage.setItem(this.breed, JSON.stringify(response));
      }
    });
  }

  // function to reset search filter and fetch random breed images saved in the store
  resetFilter(): void {
    this.clearBreedSelectFilter();
    this.breedName = '';
    this.breedImageDataQuery.getBreedImageData().subscribe((response: any) => {
      if (!this.utility.isNullorUndefined(response)) {
        this.allBreedImages = response;
      }
    });
    this.noDataFound = this.allBreedImages.length <= 0 ? true : false;
  }
  // function to reset breed and sub-breed values
  clearBreedSelectFilter(): void {
    this.breed = '';
    this.subBreed = '';
  }
  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.unsubscribe();
  }
}
