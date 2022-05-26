import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-abt-educator',
  templateUrl: './abt-educator.component.html',
  styleUrls: ['./abt-educator.component.scss']
})
export class AbtEducatorComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private wowService: NgwWowService) {
    this.wowService.init()
  }

  ngOnInit(): void {
  }

  toProductions() {
    this.router.navigate(['productions'])
  }

  toShake() {
    this.router.navigate(['shakeXperience'])
  }
}
