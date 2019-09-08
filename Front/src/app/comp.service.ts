import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
@Injectable({
  providedIn: 'root'
})
export class CompService {

  private data =new Subject<any>();
  dataR$ =this.data.asObservable();

  constructor() { }

  sendMessage(msg:any){
    console.log("coomp Srivece called",msg);
    this.data.next(msg);
    //console.log("Data:",this.data);
    console.log("Observable",this.dataR$);
  }
  getMassage(){
    return this.data
  }
}
