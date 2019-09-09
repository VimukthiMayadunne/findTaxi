import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Taxi } from '../models/taxi.model';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  uri="10.10.19.77:4100";
  constructor(private http: HttpClient) { }

  sendDetails(lat1,lng1,lat2,lng2){
    const reqd ={
      units: 'imperial',
      origins: lat1,lng1,
      destinations: lat2,lng2,
      key: 'Your Google Api key' }
  return this.http.post(`https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${lat1},${lng1}&destinations=${lat2}%2C${lng2}&key=%20AIzaSyA4PM83juTN4e0c04Pg0axBaeBngZpwRk4`,reqd);
  }
  getTypes():Observable<Taxi[]> {
    return this.http.get<Taxi[]>(`http://${this.uri}/taxi/getf`);
  }

  getTypesPost(x):Observable<Taxi[]> {
    const reqst={
      distance : x
    }
    console.log("Fucntion Service Called",reqst)
    return this.http.post<Taxi[]>(`http://${this.uri}/taxi/get`,reqst)
  }

  





  getDriverInfo(typeId) {
    console.log("function called")
    console.log(typeId)
    const car={
      rideType:typeId
    }
    return this.http.post(`http://${this.uri}/driver/getbyid`,car);
  }

  getCById(id) {
    return this.http.get(`http://${this.uri}/get/${id}`);
  }

}
