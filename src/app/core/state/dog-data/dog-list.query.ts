import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { BreedImageDataState, BreedImageDataStore } from './dog-list.store';
import { BreedImageData } from './dog-list.model';
@Injectable({ providedIn: 'root' })
export class BreedImageDataQuery extends QueryEntity<
  BreedImageDataState,
  BreedImageData
> {
  constructor(protected override store: BreedImageDataStore) {
    super(store);
  }
  getBreedImageData(): Observable<BreedImageData[]> {
    return this.select((state) => state.breedImageData);
  }
}
