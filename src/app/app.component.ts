import { Component } from '@angular/core';

import { INav } from "./models";

@Component({
  selector: 'app-root',
  template: `
    <div>
      <a *ngFor="let target of navItems"
        [routerLink]="target.link">{{ target.name }}</a>
    </div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  navItems: INav[] = [
    { link: '/', name: 'Home'},
    { link: '/missions', name: 'Missions'}
  ];
}
