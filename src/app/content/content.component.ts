import { DOCUMENT, ViewportScroller } from '@angular/common';
import { Component, Inject, HostListener, Input } from '@angular/core';
import { NgClass } from '@angular/common';

import { NgbScrollSpyModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectComponent } from '../project/project.component';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    NgbScrollSpyModule,
    ProjectComponent,
    AboutComponent,
    HomeComponent,
    NgClass,
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  @Input() mode: any;
  spy: string;
  scroll = false;

  constructor(@Inject(DOCUMENT) public document: Document) {
    const about = document.getElementById('About');
    const home = document.getElementById('Home');
    const projects = document.getElementById('Projects');

    switch (true) {
      case home !== null &&
        home.getBoundingClientRect().top <= 0 &&
        home.getBoundingClientRect().bottom >= 0:
        this.spy = 'home';
        break;
      case about !== null &&
        about.getBoundingClientRect().top <= 0 &&
        about.getBoundingClientRect().bottom >= 0:
        this.spy = 'about';
        break;
      case projects !== null &&
        projects.getBoundingClientRect().top <= 0 &&
        projects.getBoundingClientRect().bottom >= 0:
        this.spy = 'projects';
        break;
      default:
        this.spy = 'none';
        break;
    }
  }

  @HostListener('window:scroll', []) onWindowScroll() {
    const about = document.getElementById('About');
    const home = document.getElementById('Home');
    const projects = document.getElementById('Projects');

    switch (true) {
      case home !== null &&
        home.getBoundingClientRect().top <= 0 &&
        home.getBoundingClientRect().bottom >= 0:
        this.spy = 'home';
        break;
      case about !== null &&
        about.getBoundingClientRect().top <= 0 &&
        about.getBoundingClientRect().bottom >= 0:
        this.spy = 'about';
        break;
      case projects !== null &&
        projects.getBoundingClientRect().top <= 0 &&
        projects.getBoundingClientRect().bottom >= 0:
        this.spy = 'projects';
        break;
      default:
        this.spy = 'none';
        break;
    }
    console.log(this.spy);
    console.log(this.mode);
  }
}
