import { Checkout } from './core/Checkout';

/**
 * Simple checkout system demo
 */
export class CheckoutSystem {
  private checkout: Checkout;

  constructor() {
    this.checkout = new Checkout();
  }

  /**
   * Run example scenarios
   */
  runExampleScenarios(): void {
    console.log('=== Zeller Checkout System ===\n');

    // Scenario 1: atv, atv, atv, vga - Expected: $249.00
    console.log('Scenario 1: atv, atv, atv, vga');
    this.checkout = new Checkout();
    this.checkout.scan('atv');
    this.checkout.scan('atv');
    this.checkout.scan('atv');
    this.checkout.scan('vga');
    
    const result1 = this.checkout.total();
    console.log(`Expected: $249.00`);
    console.log(`Actual: $${result1.total.toFixed(2)}`);
    console.log(`Match: ${result1.total === 249.00 ? '✓' : '✗'}\n`);

    // Scenario 2: atv, ipd, ipd, atv, ipd, ipd, ipd - Expected: $2718.95
    console.log('Scenario 2: atv, ipd, ipd, atv, ipd, ipd, ipd');
    this.checkout = new Checkout();
    this.checkout.scan('atv');
    this.checkout.scan('ipd');
    this.checkout.scan('ipd');
    this.checkout.scan('atv');
    this.checkout.scan('ipd');
    this.checkout.scan('ipd');
    this.checkout.scan('ipd');
    
    const result2 = this.checkout.total();
    console.log(`Expected: $2718.95`);
    console.log(`Actual: $${result2.total.toFixed(2)}`);
    console.log(`Match: ${result2.total === 2718.95 ? '✓' : '✗'}\n`);
  }
}

// Export main class
export { Checkout } from './core/Checkout';
export { ProductCatalog } from './lib/ProductCatalog';
export { PricingRulesManager } from './lib/PricingRulesManager';
export * from './lib/types';

// Run demo if this file is executed directly
if (require.main === module) {
  const system = new CheckoutSystem();
  system.runExampleScenarios();
}