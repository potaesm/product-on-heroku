import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productName',
})
export class ProductNamePipe implements PipeTransform {
  transform(input: string, target: string): string {
    return input.replace(/\s/g, target);
  }
}
