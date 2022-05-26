import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-abt-collaborate',
  templateUrl: './abt-collaborate.component.html',
  styleUrls: ['./abt-collaborate.component.scss']
})
export class AbtCollaborateComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
  }

  toFilm() {
    this.router.navigate(['productions/film'])
  }

}
