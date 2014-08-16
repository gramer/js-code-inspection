(function($) {
  module("for 100% test coverage");

  test("Test Add", 2, function () {
    $("#qunit-fixture").html($.simpleAdd(1,2));
    equal(typeof $.simpleAdd(1,2), "number", "Add type should be a number");
    equal($.simpleAdd(1,2), 3, "Add Works");

  });

  test("Test Subtract", 2, function () {
    $("#qunit-fixture").html($.simpleSubtract (1,2));
    equal(typeof $.simpleSubtract (1,2), "number", "Subtract should be a number");
    equal($.simpleSubtract (1,2), -1, "Subtraci Works");

  });

  test("Test Multiply", 2, function () {
    $("#qunit-fixture").html($.simpleMultiply (1,2));
    equal(typeof $.simpleMultiply (1,2), "number", "Multiply type should be a number");
    equal($.simpleMultiply (1,2), 2, "Multiply Works");

  });

}(jQuery));
