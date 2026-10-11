// Checkpoint A — your work goes in this file.
//
// Read checkpoint-a/spec.md. It was written for your GitHub account and it is
// the only description of the task that matters.
//
// Check your work with:  npm test a

import { findAllOrders, findOrderById } from "./orders-db.js";

// TODO: export the five functions spec.md asks for:
//   loadOrders()        async
//   myOrders(orders)
//   summarize(orders)
//   describeOrder(id)   async, and must never throw
//   toJsonLines(orders)
//
// Nothing is started for you this time. Everything you need is in modules
// 00 to 08.

import { findAllOrders, findOrder } from "./orders-db.js";

// 1. Load all orders
export async function loadOrders() {
  return await findAllOrders();
}

// 2. Filter Mansoura's pending orders
export function myOrders(orders) {
  return orders.filter(
    (order) =>
      order.city === "Mansoura" &&
      order.status === "pending"
  );
}

// 3. Find the highest single-item price
export function summarize(orders) {
  if (orders.length === 0) return 0;

  return Math.max(...orders.map((order) => order.price));
}

// 4. Describe one order

export async function describeOrder(id) {
  try {
    const orders = await findAllOrders();
    const order = orders.find((o) => o.id === id);

    if (!order) {
      return `Missing order: ${id}`;
    }

    return `${order.quantity} x ${order.item} for ${order.student}`;
  } catch (error) {
    return `Missing order: ${id}`;
  }
}


// 5. Convert orders into JSON text
export function toJsonLines(orders) {
  return JSON.stringify(
    orders.map((order) => ({
      student: order.student,
      item: order.item
    }))
  );
}
