import { Component, OnInit } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nobulali';
  scroll = false;

  //Loading page observable
  loading$: Observable<boolean> = of(false)

  constructor(private router: Router) {

    //Show/hide scroll icon on contact and home pages
    this.router.events.subscribe((event: Event) => {
      if (this.router.url == "/contact") {
        this.scroll = true;
      } else if (this.router.url == "/") {
        this.scroll = true;
      }
      else {
        this.scroll = false
      }
    })
    //Show/hide scroll icon end
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    //Show loading screen
    this.router.events.pipe(
      filter(
        (e) =>
          e instanceof NavigationStart ||
          e instanceof NavigationEnd ||
          e instanceof NavigationCancel ||
          e instanceof NavigationError
      ),
      map((e) => e instanceof NavigationStart)
    ).subscribe(console.log)
  }

}
