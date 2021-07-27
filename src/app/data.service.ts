import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class DataService {

    constructor(private http:HttpClient) { 
    
      }
      host :String="http://localhost:3000"

      public getData(){
        return this.http.get(this.host + "/data")
      }
      
    
      
    
    }