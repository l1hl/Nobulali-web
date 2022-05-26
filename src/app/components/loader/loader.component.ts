import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading.service'

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  loading; boolean

  constructor(private loaderService: LoadingService) {
    this.loaderService.isLoading.subscribe((v) => {
      console.log(v)
      this.loading = v
    })
  }

  ngOnInit(): void {
  }

}
