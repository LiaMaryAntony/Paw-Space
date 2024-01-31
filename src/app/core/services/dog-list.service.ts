import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class DogListService {
  private baseBreedUrl = 'https://dog.ceo/api/breed/';
  private dogBreedsUrl = 'https://dog.ceo/api/breeds/list/all';
  private dogBreedsImgUrl = 'https://dog.ceo/api/breeds/image/random/50';

  constructor(private http: HttpClient) {}

  getAllBreeds(): Observable<any> {
    return this.http
      .get<any>(this.dogBreedsUrl)
      .pipe(catchError(this.handleError('getAllBreeds', [])));
  }

  getRandomBreedImages(): Observable<any> {
    return this.http
      .get<any>(this.dogBreedsImgUrl)
      .pipe(catchError(this.handleError('getRandomBreedImages', [])));
  }

  getSubBreeds(breedName: string): Observable<any> {
    return this.http
      .get<any>(this.baseBreedUrl + breedName + '/list')
      .pipe(catchError(this.handleError('getSubBreeds', [])));
  }

  searchByBreed(breedName: string): Observable<any> {
    return this.http
      .get<any>(this.baseBreedUrl + breedName + '/images')
      .pipe(catchError(this.handleError('searchByBreed', [])));
  }
  searchBySubBreed(breedName: string, subBreedName: string): Observable<any> {
    return this.http
      .get<any>(this.baseBreedUrl + breedName + '/' + subBreedName + '/images')
      .pipe(catchError(this.handleError('searchBySubBreed', [])));
  }
  searchByBreedRandom(breedName: string): Observable<any> {
    return this.http
      .get<any>(this.baseBreedUrl + breedName + '/images/random')
      .pipe(catchError(this.handleError('searchByBreedName', [])));
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
