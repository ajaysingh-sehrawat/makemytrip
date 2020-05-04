import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { HomeComponent } from './home/home.component';
import { FlightComponent } from './flight/flight.component';
import { HotelComponent } from './hotel/hotel.component';
import { HolidayComponent } from './holiday/holiday.component';
import { TrainComponent } from './train/train.component';
import { BusComponent } from './bus/bus.component';
import { CabComponent } from './cab/cab.component';


const routes: Routes = [
  {path : '', redirectTo :'/home' , pathMatch: 'full'},
  {path:'login', component:LoginComponent},
  {path:'createaccount', component:CreateaccountComponent},
  {path:'home', component:HomeComponent},
  {path:'flight', component:FlightComponent},
  {path:'hotel', component:HotelComponent},
  {path:'holiday', component:HolidayComponent},
  {path:'train', component:TrainComponent},
  {path:'bus', component:BusComponent},
  {path:'cab', component:CabComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
