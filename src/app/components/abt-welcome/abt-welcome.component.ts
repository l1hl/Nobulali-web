import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
//import { SwiperOptions } from 'swiper';
import Swiper, { Navigation, Pagination } from 'swiper';

@Component({
  selector: 'app-abt-welcome',
  templateUrl: './abt-welcome.component.html',
  styleUrls: ['./abt-welcome.component.scss']
})
export class AbtWelcomeComponent implements OnInit {

  constructor(private wowService: NgwWowService) {
    this.wowService.init()
  }



  ngOnInit(): void {

  }
}
