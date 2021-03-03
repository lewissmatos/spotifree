import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(images: any[], ...args: unknown[]): unknown {
    
    if (!images) {

      return 'assets/img/noimagen.png'
      
    } else if (images.length > 0) {

      return images[0].url
    }

    else {
      return 'assets/img/noimagen.png'
    }  
  }

}
