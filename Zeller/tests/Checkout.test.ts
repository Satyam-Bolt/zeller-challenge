import { Checkout } from '../src/core/Checkout';

describe('Checkout System', () => {
  let checkout: Checkout;

  beforeEach(() => {
    checkout = new Checkout();
  });

  test('3-for-2 Apple TV deal with VGA adapter', () => {
    checkout.scan('atv');
    checkout.scan('atv');
    checkout.scan('atv');
    checkout.scan('vga');
    
    const result = checkout.total();
    expect(result.total).toBe(249.00);
  });

  test('Mixed items with bulk iPad discount', () => {
    checkout.scan('atv');
    checkout.scan('ipd');
    checkout.scan('ipd');
    checkout.scan('atv');
    checkout.scan('ipd');
    checkout.scan('ipd');
    checkout.scan('ipd');
    
    const result = checkout.total();
    expect(result.total).toBe(2718.95);
  });

  test('Bulk discount for 5 iPads', () => {
    checkout.scan('ipd');
    checkout.scan('ipd');
    checkout.scan('ipd');
    checkout.scan('ipd');
    checkout.scan('ipd');
    
    const result = checkout.total();
    expect(result.total).toBe(2499.95);
  });

  test('6 Apple TVs with 3-for-2 deal', () => {
    checkout.scan('atv');
    checkout.scan('atv');
    checkout.scan('atv');
    checkout.scan('atv');
    checkout.scan('atv');
    checkout.scan('atv');
    
    const result = checkout.total();
    expect(result.total).toBe(438.00);
  });
});