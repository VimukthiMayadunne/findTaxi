import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AgmCoreModule} from '@agm/core'; 
import { AppComponent } from './app.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { ServiceService} from './Services/service.service';
import { DroplocationComponent } from './droplocation/droplocation.component';
import { OptionsComponent } from './options/options.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { MatSortModule,MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule } from '@angular/material';

const appRoutes :Routes =[
{path:'' ,component:AppComponent},
{path:'drop',component:DroplocationComponent},
{path:'options',component:OptionsComponent},
{path:'confirm',component:ConfirmationComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DroplocationComponent,
    OptionsComponent,
    ConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    MatSortModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyA4PM83juTN4e0c04Pg0axBaeBngZpwRk4'
    })
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
