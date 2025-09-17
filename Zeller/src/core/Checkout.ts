import { CartItem, CheckoutResult } from '../lib/types';
import { ProductCatalog } from '../lib/ProductCatalog';
import { PricingRulesManager } from '../lib/PricingRulesManager';

/**
 * Checkout system
 */
export class Checkout {
  private cart: Map<string, number> = new Map();
  private productCatalog: ProductCatalog;
  private pricingRules: PricingRulesManager;

  constructor() {
    this.productCatalog = new ProductCatalog();
    this.pricingRules = new PricingRulesManager();
  }

  /**
   * Scanning Items
   */
  scan(sku: string): void {
    if (!this.productCatalog.getProduct(sku)) {
      throw new Error(`Product '${sku}' not found`);
    }

    const currentQuantity = this.cart.get(sku) || 0;
    this.cart.set(sku, currentQuantity + 1);
  }

  /**
   * Calculating Total
   */
  total(): CheckoutResult {
    const items: CheckoutResult['items'] = [];
    let total = 0;

    for (const [sku, quantity] of this.cart.entries()) {
      const product = this.productCatalog.getProduct(sku);
      if (!product) continue;

      const price = this.pricingRules.calculatePrice(sku, quantity, product.price);
      items.push({ sku, quantity, price });
      total += price;
    }

    return {
      total: Math.round(total * 100) / 100,
      items
    };
  }
}