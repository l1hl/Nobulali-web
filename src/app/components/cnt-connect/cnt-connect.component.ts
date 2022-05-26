import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow'

@Component({
  selector: 'app-cnt-connect',
  templateUrl: './cnt-connect.component.html',
  styleUrls: ['./cnt-connect.component.scss']
})
export class CntConnectComponent implements OnInit {

  constructor(
    private wowService: NgwWowService
  ) {
    this.wowService.init()
  }

  ngOnInit(): void {
  }

}
