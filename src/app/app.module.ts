import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from './shared/login.service';
import { HttpModule } from '@angular/http';
import { AppConfigModule } from 'src/app-config.module';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatGridListModule, MatCardModule, MatDialogModule, MatPaginatorModule, MatProgressSpinnerModule, MatFormFieldModule, MatSelectModule, MatSortModule, MatInputModule, MatTableModule , MatMenuModule, MatDividerModule } from  '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { SmallmodalComponent } from './smallmodal/smallmodal.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import {LocationService} from './shared/location.service';
import { DispatchlistComponent } from './dispatchlist/dispatchlist.component';
import { MattableComponent } from './mattable/mattable.component';
import { UploaddialogComponent } from './uploaddialog/uploaddialog.component';
import { AssignComponent } from './assign/assign.component';
import { MaterialComponent } from './material/material.component';
import { ReprintComponent } from './reprint/reprint.component';
import { ReprinttableComponent } from './reprinttable/reprinttable.component';
import { TrailerComponent } from './trailer/trailer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserdetailsComponent,
    DialogComponent,
    SmallmodalComponent,
    DispatchlistComponent,
    MattableComponent,
    UploaddialogComponent,
    AssignComponent,
    MaterialComponent,
    ReprintComponent,
    ReprinttableComponent,
    TrailerComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppConfigModule,
    HttpModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule, MatButtonModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatMenuModule,
    MatDividerModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  entryComponents: [UserdetailsComponent],
  providers: [LoginService , LocationService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
