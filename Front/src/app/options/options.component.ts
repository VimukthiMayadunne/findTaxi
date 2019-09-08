import { Component, OnInit ,ViewChild } from '@angular/core';
import { Router} from '@angular/router';
import { ServiceService} from '../Services/service.service';
import { Taxi} from "../models/taxi.model";
import { MatSnackBar } from '@angular/material';
import { Distance} from '../models/distance.model';
import { MatSort,MatSortable,MatTableDataSource,matSnackBarAnimations } from '@angular/material';
import { Observable} from 'rxjs/Observable';
import { CompService} from '../comp.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  @ViewChild(MatSort) sort:MatSort;
  distance:Number=null;
  data:Distance=null;
  taxis;
  lid:string;
  nldi:Number;
  ride=true;
  displayedColumns = ['vehicalType','company', 'rideType', 'amount', 'waitingTime','actions'];

  constructor(private msg:CompService,private serv:ServiceService, private route:Router ,  private snackBar: MatSnackBar ) { }

  ngOnInit() {
    //this.getDistance();
    //console.log("saddasdasdasdasdasdasd")
    //console.log(JSON.parse(localStorage.getItem('key')));
    this.fetchDataPost();
  }

  getDistance(){
    this.msg.getMassage()
    .subscribe(
      (rts:Distance) =>{
        console.log("NG onint Called");
        console.log("Result is",rts);
        this.data = rts;
        this.distance=(this.data.rows["0"].elements["0"].distance.value)/1000;
        console.log('Distance is',this.distance);
    });
  console.log(this.data);
  }
  


fetchDataGet(){
  this.serv.getTypes().subscribe(results =>{
    if(!results){
      return;
    }
    this.taxis = new MatTableDataSource(results)
    this.taxis.sort=this.sort
  });
  
}

fetchDataPost(){
    this.lid=localStorage.getItem('di')
    console.log("LDI is",this.lid)
    this.nldi=Number(this.lid)/1000
    console.log("Nldi is",this.nldi)
    console.log(this.data)
    this.serv.getTypesPost(this.nldi).subscribe(results =>{
    if(!results){
      return
    }
    this.taxis = new MatTableDataSource(results)
    this.taxis.sort=this.sort
    console.log("Taxis:",this.taxis)
  })
  this.ride=false;
  }

selectTaxi(id,avb,amount){
  if(avb==="Not Available"){
    this.snackBar.open('Please Select an Avilable vehicale', 'OK', {
      duration: 5000
    });    
  }
  else{
    console.log(id)
    localStorage.setItem('price',amount)
    localStorage.setItem('rty',id)
    this.route.navigate([`/confirm`]);
  }
}


delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
