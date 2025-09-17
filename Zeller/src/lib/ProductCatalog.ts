import { Product } from './types';

/**
 * Product catalog
 */
export class ProductCatalog {
  private products: Map<string, Product> = new Map();

  constructor() {
    this.products.set('ipd', { sku: 'ipd', name: 'Super iPad', price: 549.99 });
    this.products.set('mbp', { sku: 'mbp', name: 'MacBook Pro', price: 1399.99 });
    this.products.set('atv', { sku: 'atv', name: 'Apple TV', price: 109.50 });
    this.products.set('vga', { sku: 'vga', name: 'VGA adapter', price: 30.00 });
  }

  getProduct(sku: string): Product | undefined {
    return this.products.get(sku);
  }
}