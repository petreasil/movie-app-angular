import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'appCapitol5';
  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    setTheme('bs4');
  }
  async logout(): Promise<void> {
    await this.firebaseAuth.signOut();
    await this.router.navigate(['/']);
  }
}
