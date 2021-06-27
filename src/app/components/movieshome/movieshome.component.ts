import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movieshome',
  templateUrl: './movieshome.component.html',
  styleUrls: ['./movieshome.component.css'],
})
export class MovieshomeComponent implements OnInit {
  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {}

  ngOnInit(): void {}

  async logout(): Promise<void> {
    await this.firebaseAuth.signOut();
    await this.router.navigate(['/']);
  }
}
