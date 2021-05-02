//* Logic
import { adding } from "./adding.js";

//* jQuery section

$(document).ready(() => {
  QUnit.module("add", () => {
    QUnit.test("should add two numbers", (assert) => {
      assert.equal(adding(1, 1), 2);
      assert.equal(adding(1, "1"), 2, "Failing test as 1 param is a string");
    });
    QUnit.test("should not add a number and a string", (assert) => {
      assert.strictEqual(adding(1, "1"), "11");
      assert.true(typeof adding(1, "1") === "number");
      assert.true(typeof adding(1, 1) === "number", "Should be true!");
    });
  });
});
