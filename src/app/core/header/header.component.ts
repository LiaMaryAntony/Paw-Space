import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  
  // function to get active route, for setting css properties
  getActiveRoutes(menu: string): boolean {
    if (location.href) {
      if (
        menu == 'dashboard' &&
        location.href.split('/')[location.href.split('/').length - 1] ==
          'dashboard'
      ) {
        return true;
      }
    }
    return false;
  }
}
