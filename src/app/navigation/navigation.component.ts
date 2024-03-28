import { Component, Inject, HostListener, inject } from '@angular/core';
import {
  NgbDropdownModule,
  NgbProgressbarModule,
  NgbCollapseModule,
} from '@ng-bootstrap/ng-bootstrap';
import { ContentComponent } from '../content/content.component';
import { ViewportScroller } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    NgbDropdownModule,
    ContentComponent,
    NgbProgressbarModule,
    NgbCollapseModule,
    NgClass,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  state: number;
  show = false;
  burger = false;
  sidenav = false;
  bugz = () => {
    this.burger = this.burger ? false : true;
    this.sidenav = this.sidenav ? false : true;
  };

  dark: boolean = false;

  clickme() {
    this.dark = this.dark ? false : true;
    console.log('it does nothing', this.dark);
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    public scroller: ViewportScroller
  ) {
    console.log(ContentComponent);
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    console.log(scrolled);
    this.state = Math.round(scrolled);
  }

  @HostListener('window:scroll', []) onWindowScroll() {
    const winScroll =
      this.document.body.scrollTop || this.document.documentElement.scrollTop;
    const height =
      this.document.documentElement.scrollHeight -
      this.document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    this.state = Math.round(scrolled);
    if (scrolled > 0) {
      this.show = true;
    } else {
      this.show = false;
    }
  }
}
