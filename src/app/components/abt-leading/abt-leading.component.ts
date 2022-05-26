import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-abt-leading',
  templateUrl: './abt-leading.component.html',
  styleUrls: ['./abt-leading.component.scss']
})
export class AbtLeadingComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  toProductions() {
    this.router.navigate(['productions'])
  }

  toShake() {
    this.router.navigate(['shakeXperience'])
  }
}
