
import { items } from "./items.js";

// 1. Display the products on the page
export function renderItems(list) {
  const container = document.querySelector("#list");
  container.innerHTML = "";

  list.forEach((item) => {
    const card = document.createElement("li");
    card.className = "article-card";
    card.textContent = `${item.name} - ${item.price} EGP`;
    container.append(card);
  });
}

// 2. Return only the electronics products
export function matching() {
  return items.filter((item) => item.category === "electronics");
}

// 3. Display all products and set up the filter button
export function start() {
  renderItems(items);

  const applyButton = document.querySelector("#apply");

  applyButton.addEventListener("click", () => {
    renderItems(matching());
  });
}
start();