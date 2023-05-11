import { Sum } from "../Sum";

//This below test will test Sum function output and show test case result either passed or failed

test("Check sum of two numbers", () => {
  expect(Sum(2, 5)).not.toBe(5);
  expect(Sum(2, 5)).toBe(7);
});
