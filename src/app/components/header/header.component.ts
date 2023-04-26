import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
login = false;

  constructor(private router:Router) {  }

  logOut() {
    localStorage.removeItem('token');

      location.href = '/login';
      // this.router.navigate(['/login']);
  }

  checkUser() {
    if(localStorage.getItem('token')) {
      this.login = true;
    } else {
      this.login = false;
    }
  }


  ngOnInit(): void {
    this.checkUser();
  }

}
