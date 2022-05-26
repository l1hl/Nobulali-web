import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navWhite = false;
  navClear = true;
  navCollapse: any

  constructor(
    private router: Router,
    private location: Location
  ) {

    location.onUrlChange(() => {
      if (location.path() == "/about") {
        this.navWhite = true;
      } else {
        this.navWhite = false;
      }
    })

  }

  ngOnInit() {
    //SET NAVBAR ELEMENT
    this.navCollapse = document.querySelector('.navbar-collapse')
  }

  @HostListener("document:scroll") scrollFuction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      this.navClear = false;
    } else {
      this.navClear = true;
    }
  }

  //CHECK IF NAVBAR IS VISIBLE
  toggleNavList() {
    //IF SCROLL IS LESS THAN 100 THAN 
    if (this.navClear == true) {
      this.navClear = false
    }
  }

  //TOGGLE NAVBAR
  toggleNav() {
    if (this.navCollapse.classList.contains('show')) {
      this.navCollapse.classList.remove('show')
    }
  }

  toAbout() {
    window.location.replace("/about");
  }


}
