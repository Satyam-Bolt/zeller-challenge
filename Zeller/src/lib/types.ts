/**
 * Product interface
 */
export interface Product {
  sku: string;
  name: string;
  price: number;
}

/**
 * Cart item
 */
export interface CartItem {
  sku: string;
  quantity: number;
}

/**
 * Checkout Result
 */
export interface CheckoutResult {
  total: number;
  items: Array<{
    sku: string;
    quantity: number;
    price: number;
  }>;
}