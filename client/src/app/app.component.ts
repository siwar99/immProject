import { Component } from '@angular/core';
import {KeycloakService} from "./services/keycloak/keycloak.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ImmoLuxe';
  constructor(private keycloakService: KeycloakService) {}
  isUserRole() {
    return this.keycloakService.keycloak?.realmAccess?.roles.includes('ROLE_USER');
  }
  onLogout() {
    this.keycloakService.logout();
  }
}
