import { Component, OnInit } from '@angular/core';
import { MakemytripData } from '../makemytrip-data';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {
  
  MakemytripmodelForm = new MakemytripData('','','','','');

  constructor() { }
  
  customerEntry(){}
 
  ngOnInit(){
  
  }

}


