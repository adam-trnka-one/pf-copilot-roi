// Predefined customer steps for the slider - simple increments of 100
export const CUSTOMER_STEPS = Array.from(
  { length: 201 }, // 0 to 20000 in steps of 100
  (_, i) => i * 100
).filter(v => v >= 50); // Start from 50

/**
 * Snaps a customer count value to the nearest 100
 */
export function snapToNearestCustomerStep(value: number): number {
  return Math.round(value / 100) * 100;
}

/**
 * Calculate ProductFruits plan price based on customer count
 */
export function getProductFruitsPlanPrice(customers: number): number {
  if (customers <= 1500) return 139;
  if (customers <= 3000) return 189;
  if (customers <= 5000) return 259;
  if (customers <= 10000) return 339;
  return 439;
}