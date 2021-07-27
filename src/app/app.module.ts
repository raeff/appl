import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";


import {  HttpClientModule } from '@angular/common/http';


import { UserComponent } from './user.component';
import { HiringComponent } from './hiring.component';
import { RecruitmentComponent } from './recruitment.component';
import { AdDirective } from './ad.directive';
import { AdService } from './ad.service';

import { AdBannerComponent } from './ad-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    AdBannerComponent,

    HiringComponent, 
    UserComponent,
    RecruitmentComponent,
    AdDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    }),
    AppRoutingModule
  ],
  providers: [AdService],
  entryComponents: [ HiringComponent, UserComponent,RecruitmentComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
