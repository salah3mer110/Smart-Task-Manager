import { Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class CarouselComponent implements OnInit, OnDestroy {
  images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
  curIndex = signal(0);
  timer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.next();
    }, 2000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  get imgPath() {
    return 'assets/' + this.images[this.curIndex()];
  }

  next() {
    this.curIndex.update((current) => (current === this.images.length - 1 ? 0 : current + 1));
  }

  prev() {
    this.curIndex.update((current) => (current === 0 ? this.images.length - 1 : current - 1));
  }
}
