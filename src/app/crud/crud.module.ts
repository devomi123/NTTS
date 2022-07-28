import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { CrudComponent } from './crud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CrudComponent,
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
     FormsModule,
     ReactiveFormsModule,
     SharedModule

  ]
})
export class CrudModule { }
