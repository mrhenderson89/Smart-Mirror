import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {UiService} from './services/ui/ui.service';
import { AuthService } from '../app/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showMenu = false;
  darkModeActive: boolean;

  user = {
    email: '',
    password: ''
  };

  constructor(public ui: UiService, public authService: AuthService, private router: Router) {

  }

  ngOnInit() {
    this.ui.darkModeState.subscribe((value) => {
      this.darkModeActive = value;
    });
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  modeToggleSwitch() {
    this.ui.darkModeState.next(!this.darkModeActive);
  }

  signInWithEmail() {
    this.authService.signInRegular(this.user.email, this.user.password)
    .then((res) => {
      console.log(res);

      this.router.navigate(['/']);
    })
    .catch((err) => console.log('error: ' + err));
  }

  registerWithEmail() {
    this.authService.registerRegular(this.user.email, this.user.password)
    .then((res) => {
      console.log(res);

      this.router.navigate(['/']);
    })
    .catch((err) => console.log('error: ' + err));
  }

  openShoppingList() {
    this.router.navigate(['/shoppinglist']);
  }

}
