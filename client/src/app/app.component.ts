// import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    // NgFor
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
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

  http = inject(HttpClient);
  title = 'DatingApp';
  users: any;

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('Request has completed'),
    });
  }
}
