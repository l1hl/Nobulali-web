import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  mobile = false;
  windowWidth = 0


  intViewportWidth = window.innerWidth;

  constructor() {

  }

  ngOnInit(): void {
    this.windowWidth = window.innerWidth

    if (this.windowWidth < 991.98) {
      this.mobile = true
    } else {
      this.mobile = false
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = event.target.innerWidth

    if (this.windowWidth < 991.98) {
      this.mobile = true
    } else {
      this.mobile = false
    }
  }


}


