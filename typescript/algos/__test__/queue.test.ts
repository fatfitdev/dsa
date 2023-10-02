import Queue from '../queue';

describe('Queue', () => {
  let queue = new Queue<number>();

  beforeEach(() => {
    queue = new Queue();
  });

  test('enqueue adds an item to the queue', () => {
    queue.enqueue(1);
    expect(queue.length).toBe(1);
    expect(queue.peek()).toBe(1);
  });

  test('deque removes an item from the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    const dequeuedItem = queue.deque();
    expect(dequeuedItem).toBe(1);
    expect(queue.length).toBe(1);
  });

  test('deque returns undefined on an empty queue', () => {
    const dequeuedItem = queue.deque();
    expect(dequeuedItem).toBeUndefined();
  });

  test('peek returns the first item without removing it', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    const peekedItem = queue.peek();
    expect(peekedItem).toBe(1);
    expect(queue.length).toBe(2);
  });

  test('peek returns undefined on an empty queue', () => {
    const peekedItem = queue.peek();
    expect(peekedItem).toBeUndefined();
  });
});
