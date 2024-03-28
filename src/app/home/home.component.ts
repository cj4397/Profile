import { Component, Input, HostListener } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  @Input() mode = '';

  @HostListener('window:scroll', []) onWindowScroll() {
    console.log('home ' + this.mode);
  }
}
