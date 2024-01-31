import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'primeng/api';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent],
  imports: [SharedModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [HeaderComponent],
  providers: [],
})
export class CoreModule {}
