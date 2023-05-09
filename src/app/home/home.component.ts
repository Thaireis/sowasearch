import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  inputs: any;

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(input: { userInput: string }) {
    this.router.navigate(['/search', input]);
  }
}
