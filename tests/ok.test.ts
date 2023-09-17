import { expect, test, describe, mock, spyOn } from "bun:test";

// créé une instance dédié à une function par exemple
const random = mock(() => Math.random());
const random2 = mock((multiplier: number) => multiplier * Math.random());

random2(2);
random2(2);

console.log(random2.mock.calls);
console.log(random2.mock.results);

test("float number", () => {
  expect(0.2 + 0.1).toBeCloseTo(0.3, 5); // passes
})

describe("arithmetic", () => {
  test("2 + 2", () => {
    expect(2 + 2).toBe(4);
  });
  
  test("2 * 2", () => {
    expect(2 * 2).toBe(4);
  });
});

test("2 + 2", () => {
  expect(2 + 2).toBe(4);
});
test("2 * 2", async () => {
  const result = await Promise.resolve(2 * 2);
  expect(result).toEqual(4);
});

test("random", () => {
  const val = random();
  expect(val).toBeGreaterThan(0);
  expect(random).toHaveBeenCalled();
  expect(random).toHaveBeenCalledTimes(1);
});

const ringo = {
  name: "Ringo",
  sayHi() {
    console.log(`Hello I'm ${this.name}`);
  },
};

// spy on a function (in an object for example)
const spy = spyOn(ringo, "sayHi");

test("spyon", () => {
  expect(spy).toHaveBeenCalledTimes(0);
  ringo.sayHi();
  expect(spy).toHaveBeenCalledTimes(1);
});

