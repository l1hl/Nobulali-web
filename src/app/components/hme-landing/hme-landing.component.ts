import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow'

@Component({
  selector: 'app-hme-landing',
  templateUrl: './hme-landing.component.html',
  styleUrls: ['./hme-landing.component.scss']
})
export class HmeLandingComponent implements OnInit {

  constructor(
    private wowService: NgwWowService
  ) {
    this.wowService.init()
  }

  ngOnInit(): void {
  }

}
