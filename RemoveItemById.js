// Custom item removal method
Array.prototype.removeItemById = function(id) {
  const pos = this.map((e) => e.id).indexOf(id);
  this.splice(pos, 1);
  return this
}

// testing
const arr = [
  { id: 'Eric' },
  { id: 'Foo' }
];

console.log(JSON.stringify(arr.removeItemById('Eric')));
