import {BehaviorSubject} from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageDisplayService {
  images: string[];
  imageToShow = new BehaviorSubject<number>(0);

  setImages(newImages: string[]) {
    this.images = newImages;
    this.updateSelectedImage(0);
  }

  getImage(index: number) {
    return this.images[index];
  }

  updateSelectedImage(index: number) {
    this.imageToShow.next(index);
  }
}
