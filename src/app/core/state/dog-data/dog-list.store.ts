import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { BreedImageData } from './dog-list.model';
export interface BreedImageDataState extends EntityState<BreedImageData> {
  breedImageData: BreedImageData[];
}

export function createInitialstate(): BreedImageDataState {
  return {
    breedImageData: [],
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'breedImageDataStore', resettable: true })
export class BreedImageDataStore extends EntityStore<
  BreedImageDataState,
  BreedImageData
> {
  constructor() {
    super();
  }
}
