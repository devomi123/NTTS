import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textpipe'
})
export class TextpipePipe implements PipeTransform {

  transform(text:any, suffix: string = '...', length: number = 20,): unknown {
    if (text.length > length) {
      let truncated: string = text.substring(0, length).trim() + suffix;
      return truncated;
    }
    return text;
  }

}
