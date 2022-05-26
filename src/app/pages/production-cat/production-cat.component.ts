import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgwWowService } from 'ngx-wow'

@Component({
  selector: 'app-production-cat',
  templateUrl: './production-cat.component.html',
  styleUrls: ['./production-cat.component.scss']
})
export class ProductionCatComponent implements OnInit {

  constructor(private router: Router,
    private wowService: NgwWowService
  ) {
    this.wowService.init()

    if (router.url == "/productions/podcasts") {
      this.prodName = "Podcasts"
      this.backgroundImage = "../../../assets/images/productions/cover_podcasts.png"
    } else if (router.url == "/shakeXperience") {
      this.prodName = "SHAKEXPERIENCE"
      this.backgroundImage = "../../../assets/images/productions/cover_television.png"
    } else {
      this.prodName = "StrARTegy"
      this.backgroundImage = "../../../assets/images/productions/cover_blog.png"
    }
  }

  prodName: any
  searchBox: boolean = false
  backgroundImage: any

  post = [
    {
      title: `The Artist's Journey`,
      Image: '../../../assets/images/default.png',
      text: ``

    }
  ]

  ngOnInit(): void {
  }

}
