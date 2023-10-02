import { expect, test } from "bun:test";
import Queue from "../queue";

let queue = new Queue<number>();

test("Queue enqueue adds an item to the queue", () => {
  queue = new Queue();
  queue.enqueue(1);
  expect(queue.length).toBe(1);
  expect(queue.peek()).toBe(1);
});

test("Queue deque removes an item from the queue", () => {
  queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  const dequeuedItem = queue.deque();
  expect(dequeuedItem).toBe(1);
  expect(queue.length).toBe(1);
});

test("Queue deque returns undefined on an empty queue", () => {
  queue = new Queue();
  const dequeuedItem = queue.deque();
  expect(dequeuedItem).toBeUndefined();
});

test("Queue peek returns the first item without removing it", () => {
  queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  const peekedItem = queue.peek();
  expect(peekedItem).toBe(1);
  expect(queue.length).toBe(2);
});

test("Queue peek returns undefined on an empty queue", () => {
  queue = new Queue();
  const peekedItem = queue.peek();
  expect(peekedItem).toBeUndefined();
});
