import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routeUrls } from '../../../environments/router-manager';
import { AuthService } from '../../store/service/auth/AuthService';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  constructor(private router: Router, public authService: AuthService) {}

  routeToCheckout() {
    this.router.navigateByUrl(routeUrls.checkout);
  }

  routeToHomepage() {
    this.router.navigateByUrl(routeUrls.homepage);
  }

  routeToPopular() {
    this.router.navigateByUrl(routeUrls.popular);
  }

  routeToAccessories() {
    this.router.navigateByUrl(routeUrls.accessories);
  }

  routeToAuctions() {
    this.router.navigateByUrl(routeUrls.auctions);
  }

  routeToCart() {
    this.router.navigateByUrl(routeUrls.checkout);
  }

  routeToProfile() {
    if (this.authService.isAuthorised()) {
      this.router.navigateByUrl(routeUrls.homepage); // todo change to profile page
    } else {
      this.router.navigateByUrl(routeUrls.login);
    }
  }
}
