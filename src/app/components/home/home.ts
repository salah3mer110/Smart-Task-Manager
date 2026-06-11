import { Component } from '@angular/core';
import { CarouselComponent } from './carousel/carousel';

@Component({
  selector: 'app-home',
  imports: [CarouselComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
