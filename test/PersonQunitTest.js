QUnit.test( "person test", function( assert ) {
  var p = new Person('John' , 'Doe' ,'P.');
  assert.ok(  'John P. Doe' ===  p.whoAreYou());
});
