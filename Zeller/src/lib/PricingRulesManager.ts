
export class PricingRulesManager {
  
  /**
   * Pricing Rules
   */
  calculatePrice(sku: string, quantity: number, basePrice: number): number {
    // 3 for 2 deal on Apple TVs
    if (sku === 'atv') {
      const freeItems = Math.floor(quantity / 3);
      const paidItems = quantity - freeItems;
      return paidItems * basePrice;
    }

    // Bulk discount for Super iPad (more than 4)
    if (sku === 'ipd' && quantity > 4) {
      return quantity * 499.99;
    }

    // Regular pricing
    return quantity * basePrice;
  }
}