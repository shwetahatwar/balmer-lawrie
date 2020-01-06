import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { MatToolbarModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { MatMenuModule} from '@angular/material';
import { SmallmodalComponent } from './smallmodal/smallmodal.component';
import { DispatchlistComponent } from './dispatchlist/dispatchlist.component';
import { MattableComponent } from './mattable/mattable.component';
import { UploaddialogComponent } from './uploaddialog/uploaddialog.component';
import { AssignComponent } from './assign/assign.component';
import { MaterialComponent } from './material/material.component';
import { ReprintComponent } from './reprint/reprint.component';
import { ReprinttableComponent } from './reprinttable/reprinttable.component';
import { TrailerComponent } from './trailer/trailer.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'userdetails', component: UserdetailsComponent},
  {path: 'smallmodal', component: SmallmodalComponent},
  {path: 'dispatchlist', component: DispatchlistComponent},
  {path: 'mattable', component: MattableComponent},
  {path: 'uploaddialog', component: UploaddialogComponent},
  {path: 'assign', component: AssignComponent},
  {path: 'material', component:MaterialComponent},
  {path: 'reprint', component:ReprintComponent},
  {path: 'reprinttable', component:ReprinttableComponent},
  {path: 'trailer', component:TrailerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, MatToolbarModule, MatMenuModule],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ]
})
export class AppRoutingModule { }
