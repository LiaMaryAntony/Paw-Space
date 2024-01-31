import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { OnlyAlphabetDirective } from './directives/only-alphabet.directive';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [OnlyAlphabetDirective],
  imports: [
    CommonModule,
    ToolbarModule,
    CardModule,
    ButtonModule,
    DropdownModule,
    CalendarModule,
    ReactiveFormsModule,
    FormsModule,
    DialogModule,
    DynamicDialogModule,
    TableModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    CommonModule,
    ToolbarModule,
    CardModule,
    ButtonModule,
    DropdownModule,
    CalendarModule,
    ReactiveFormsModule,
    FormsModule,
    DialogModule,
    DynamicDialogModule,
    OnlyAlphabetDirective,
    TableModule,
  ],

  providers: [DialogService, DynamicDialogRef],
})
export class SharedModule {}
