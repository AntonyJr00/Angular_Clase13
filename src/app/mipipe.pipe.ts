import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mipipe',
})
export class MipipePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    let date = new Date();
    return date;
  }
}
