//* Logic
import { adding } from "./adding.js";

//* jQuery section

$(document).ready(() => {
  QUnit.module("add", function () {
    QUnit.test("should add two numbers", function (assert) {
      assert.equal(adding(1, 1), 2);
      assert.equal(adding(1, "1"), 2);
      assert.strictEqual(adding(1, "1"), "11");
      assert.true(typeof adding(1, "1") === "number");
      assert.true(typeof adding(1, 1) === "number");
    });
  });
});
