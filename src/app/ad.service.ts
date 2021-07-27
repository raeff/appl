import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserComponent } from './user.component';
import { RecruitmentComponent } from './recruitment.component';
import { HiringComponent } from './hiring.component';


import { AdItem } from './ad-item';
import { DataService } from './data.service';

@Injectable()
export class AdService {
data:any
  constructor(private http:HttpClient,private ds:DataService) { 

  }







  getAds() {
    this.ds.getData().subscribe(res=>{this.data=res
    console.log(this.data)})
    return [      
      new AdItem(UserComponent,  {name1: 'Efficience'}),
      new AdItem(RecruitmentComponent, {name2: 'Production'}),


      new AdItem(HiringComponent,   {name3: 'RFT '})


    ];
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/