import { Component, inject, OnInit } from '@angular/core';
import { NavComponent } from "./nav/nav.component";
import { AccountService } from './_services/account.service';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet
  //   // ,NgFor
  // ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [NavComponent, HomeComponent]
})
export class AppComponent implements OnInit {

  // Some of the angular functionality we're using did used to be 
  // provided by the class, a TS class, or a JavaScript Class.
  // But Angular seems to be using in toward using 
  // functional components for certain features. 
  // Possibly in future that's how they're going to deal with 
  // an angular component as well

  // constructor(private httpClient: HttpClient) {}

  // alternate way to inject  into components & do not rely 
  // on a constructor,
  // because Constructor is something that we only get with a 
  // JS or TS, we don't get it with normal JS function.

  private accountServie = inject(AccountService);
  title = 'DatingApp';

  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user = JSON.parse(userString);
    this.accountServie.currentUser.set(user);
  }
}
