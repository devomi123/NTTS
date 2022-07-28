import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DatabindComponent } from './databind.component';
import { PipedirectiveComponent } from './pipedirective.component';
import { ColorchangeDirective } from './colorchange.directive';
import { TextpipePipe } from './textpipe.pipe';
import { ForeachloopComponent } from './foreachloop/foreachloop.component';
import { DatatableComponent } from './datatable/datatable.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CheakNumDirective } from './cheak-num.directive';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from '../shared/header.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DatabindComponent,
    PipedirectiveComponent,
    ColorchangeDirective,
    TextpipePipe,
    ForeachloopComponent,
    DatatableComponent,
    ParentComponent,
    ChildComponent,
    CheakNumDirective,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule

    ]
})
export class DashboardModule { }
