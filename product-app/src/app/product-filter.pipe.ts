import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './models/product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: Product[], name: string): unknown {
    name = name.toLowerCase();
    // console.log('filter:', name);
    // name = name.replace(/\s/g, '-');
    // console.log(name);
    return products.filter((p) => p.name.indexOf(name) !== -1);
  }

}
