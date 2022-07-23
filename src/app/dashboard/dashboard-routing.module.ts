import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { DashboardComponent } from './dashboard.component';
import { DatabindComponent } from './databind.component';
import { DatatableComponent } from './datatable/datatable.component';
import { ForeachloopComponent } from './foreachloop/foreachloop.component';
import { ParentComponent } from './parent/parent.component';
import { PipedirectiveComponent } from './pipedirective.component';

const routes: Routes = [
  {path:"",canActivate:[AuthGuard],component:DashboardComponent},
  {path:"databind",canActivate:[AuthGuard],component:DatabindComponent},
  {path:"pipe",canActivate:[AuthGuard],component:PipedirectiveComponent},
  {path:"foreach",canActivate:[AuthGuard],component:ForeachloopComponent},
  {path:"datatable",canActivate:[AuthGuard],component:DatatableComponent},
  {path:"parent",canActivate:[AuthGuard],component:ParentComponent},







];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
