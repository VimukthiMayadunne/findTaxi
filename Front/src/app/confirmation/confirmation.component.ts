import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../Services/service.service';

import { driver} from '../models/driver.model';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  rideType:string;
  carDetails:any;
  pickUp:string;
  dropOff:string;
  dyt:string;
  time:string;
  price:string;


  constructor( private route: ActivatedRoute ,private ssc: ServiceService, private router: Router ,) { }

  ngOnInit() {
      this.rideType=localStorage.getItem('rty');
      this.dropOff=localStorage.getItem('dl');
      this.pickUp=localStorage.getItem('pl');
      this.price=localStorage.getItem('price');
      this.time=localStorage.getItem('time');
      this.dyt=localStorage.getItem('dut');
      this.ssc.getDriverInfo(this.rideType).subscribe(res => {
        this.carDetails = res;
    });
    
  }


}
