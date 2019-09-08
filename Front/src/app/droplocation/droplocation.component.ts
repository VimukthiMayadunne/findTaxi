import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Services/service.service';
import { Distance } from '../models/distance.model';
import { Router } from '@angular/router';
import { CompService} from '../comp.service';

@Component({
  selector: 'app-droplocation',
  templateUrl: './droplocation.component.html',
  styleUrls: ['./droplocation.component.css']
})
export class DroplocationComponent implements OnInit {

  ngOnInit() {
  }
  title = 'findTaxi';
  lat: number =  6.7950;
  lng: number = 79.9008;
  lat1: number = 6.7950;
  lng1: number= 79.9008;
  lat2: number =null;
  lng2: number=null;
  locationChosen = false;
  pickUp = true ;
  dropOff =false;
  nextPage=false;
  dist:Distance = null;
  public dst:Number;
  dite:string=null;

  
  constructor(private msg:CompService,private lsc:ServiceService, private route:Router ){  }
  pikupPoint(event){
    console.log(event);
    this.locationChosen=true;
    this.lat=event.coords.lat;
    this.lng=event.coords.lng;
  }
  toNext(){
    this.lat1=this.lat;
    this.lng1=this.lng;
    this.locationChosen=false;
    this.pickUp=false;
    this.dropOff=true;
  }
  dropConfirm(){
    this.lat2=this.lat;
    this.lng2=this.lng;
    this.locationChosen=false;
    console.log("Pikup ponit is:",this.lat1,"|",this.lng1);
    console.log("DropOff ponit is:",this.lat2,"|",this.lng2);
    console.log("function called");
    this.lsc.sendDetails(this.lat1,this.lng1,this.lat2,this.lng2)
      .subscribe((data: Distance) => {
        this.dist = data;
        console.log('Data requested ...');
        console.log(this.dist);
        console.log("Your Destination Is:",this.dist.destination_addresses["0"]);
        console.log("You are at:",this.dist.origin_addresses["0"]);
        console.log("Distance you have to travel is:",this.dist.rows["0"].elements["0"].distance.text);
        console.log("Time duretion of the trip is :",this.dist.rows["0"].elements["0"].duration.text);
        this.dst=this.dist.rows["0"].elements["0"].distance.value;
        this.dite=this.dst.toString();
        localStorage.setItem('di', this.dite);
        localStorage.setItem('pl',this.dist.origin_addresses["0"]);
        localStorage.setItem('dl',this.dist.destination_addresses["0"]);
        localStorage.setItem('time',this.dist.rows["0"].elements["0"].duration.text);
        localStorage.setItem('dut',this.dist.rows["0"].elements["0"].distance.text)
    });
    this.dropOff=false;
    this.nextPage=true;
    
    //localStorage.setItem('key', JSON.stringify(this.dist));
  }
  getList(id){
    console.log("Object in drplc",this.dist)
    this.msg.sendMessage(this.dist)
    
    //console.log("iD in GetList",id)
    this.route.navigate(['/options'])
  }

}
