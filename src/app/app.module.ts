import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api and services
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';
import { BookingService } from './services/booking.service';

//import components
import { AppComponent } from './app.component';
import { HeaderTitleComponent } from './components/h-title';
import { HeaderContentComponent } from './components/h-content';
import { RetrieveBookingFormComponent } from './components/booking-retrieve-form'; // <-- #1 import component

@NgModule({
  declarations: [
    AppComponent,
    HeaderTitleComponent,
    HeaderContentComponent,
    RetrieveBookingFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [BookingService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
