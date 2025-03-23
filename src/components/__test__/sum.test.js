import { sum } from "../sum";

test("Sum of two number", () => {
  const result = sum(3, 2);

  expect(result).toBe(5);
});
