import { Component, Input } from '@angular/core';

import { AdComponent } from './ad.component';

@Component({
    styleUrls: ['../assets/sample.css'],

  template: `
    <div class="job-ad">

      {{data.name3}} 
      <br>
     
    </div>  
  `
})
export class HiringComponent implements AdComponent {
  @Input() data: any;

}

