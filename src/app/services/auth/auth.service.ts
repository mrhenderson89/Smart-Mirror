import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = _firebaseAuth.authState;

    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log(this.userDetails);
        }
        else {
          this.userDetails = null;
        }
      }
    );
   }

isLoggedIn() {
  if (this.userDetails == null) {
    return false;
  } else {
    return true;
  }
}

logout() {
  this._firebaseAuth.auth.signOut()
  .then((res) => this.router.navigate(['/']));
}

// Returns true if user is logged in
get authenticated(): boolean {
  return this.user !== null;
}

// Returns current user
public currentUser() {
  return this.authenticated ? this.user : null;
}

// Returns current user UID
get currentUserId(): any {
  return this.authenticated ? this.userDetails.uid : '';
}

signInRegular(email, password) {
  const credential = firebase.auth.EmailAuthProvider.credential(email, password);

  return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password)
}

registerRegular(email, password) {
  const credential = firebase.auth.EmailAuthProvider.credential(email, password);

  return this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
}
}
