import { Injectable } from '@angular/core';

import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router,
              private location: Location) { }

  navigate(url?: any): void {
    if (url) {
      this.router.navigate(url);
    } else {
      this.location.back();
    }
  }
}
