export class Product {
  constructor(
    public code: string,
    public name: string,
    public price: number,
    public available: boolean,
    public rating: number,
    public imageUrl: string
  ) {}
}
