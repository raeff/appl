import { Component, Input } from '@angular/core';

import { AdComponent } from './ad.component';

@Component({
    styleUrls: ['../assets/sample.css'],

  template: `
    <div class="hero-name">
      <h4>{{data.name1}}     </h4>
    

    </div>
  `
})
export class UserComponent implements AdComponent {
  @Input() data: any;
}
