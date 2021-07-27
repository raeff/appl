import { Component, Input } from '@angular/core';

import { AdComponent } from './ad.component';

@Component({
  styleUrls: ['../assets/sample.css'],

  template: `
    <div class="hero-profile">
      <h4>{{data.name2}}     </h4>

    

    </div>
  `
})
export class RecruitmentComponent implements AdComponent {
  @Input() data: any;
}
