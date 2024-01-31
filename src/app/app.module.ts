import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { persistState, akitaConfig } from '@datorama/akita';
import { SharedModule } from 'primeng/api';
import { CoreModule } from './core/core.module';
import { DogFeatureModule } from './dog-feature/dog-feature.module';
import { HttpClientModule } from '@angular/common/http';



// akitaDevtools(); // only in dev environment
akitaConfig({resettable:true});
export const presistStorage = persistState({
  include: [
    'breedImageDataStore'
  ],
  key: 'powSpaceStore'
});
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    DogFeatureModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
