import { Injectable } from '@angular/core';

import { SwiperConfigInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';

@Injectable()
export class CreditCardService {

  constructor() {
  }

  public getSwiperConfig(bulletColors: string[]): SwiperConfigInterface {
    const pagination: SwiperPaginationInterface = {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: (index, className) => {
        console.log(bulletColors);
        return `<button class="${className} swiper-pagination-bullet-${bulletColors[index]} mx-1 p-0"></button>`;
      }
    };

    return {
      a11y: true,
      direction: 'horizontal',
      slidesPerView: 1,
      keyboard: true,
      mousewheel: true,
      scrollbar: false,
      navigation: true,
      pagination
    };
  }
}
