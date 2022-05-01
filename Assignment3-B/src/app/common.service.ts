import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  baseUrl: any = environment.baseURL ;

  constructor(private http:HttpClient) {

   }

   getUser(){
     return this.http.get(this.baseUrl) ;
   }

   addUser(data:any){
    return this.http.post(this.baseUrl, data) ;
   }
}
