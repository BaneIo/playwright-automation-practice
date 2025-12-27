import { test, expect } from "@playwright/test";
import { title } from "process";
// No Global Variable Here Because tests are executed one by one, not all in one shot!
test("GET - Get product", async ({ request }) => {
  const response = await request.get("https://fakestoreapi.com/products/1");
  console.log(await response.json());
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.id).toBe(1);
  expect(body).toHaveProperty("title");
  expect(body).toHaveProperty("price");
});

test("POST - Create product", async ({ request }) => {
  const response = await request.post("https://fakestoreapi.com/products", {
    data: {
      title: "Test product",
      price: 13.5,
      description: "Playwtight API test product",
      category: "tech",
    },

    headers: { "Content-Type": "application/json" },
  });
  // console.log(await response.json());

  expect(response.status()).toBe(201);

  const body = await response.json();
  console.log("Response body", body);
  expect(body).toHaveProperty("id");
  expect(body.title).toBe("Test product");
});

test("PUT - Update product", async ({ request }) => {
  const productId = 21;
  const response = await request.put("https://fakestoreapi.com/products/1", {
    data: {
      title: "Updated product title",
      price: 99.99,
      description: "Updated description from Playwright",
      category: "tech",
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
  expect(response.status()).toBe(200);
  const body = await response.json();
  console.log("Updated product title", body);
  expect(body).toHaveProperty("id");
  expect(body).toHaveProperty("category");
  expect(body.category).toBe("tech");
  expect(body.title).toBe("Updated product title");
});

test.only("DELETE - Delete product", async ({ request }) => {
  const productId = 21;
  const response = await request.delete(
    `https://fakestoreapi.com/products/${productId}`
  );
  expect(response.status()).toBe(200);

  console.log(`Product with ID ${productId} deleted successfully.`);
});
