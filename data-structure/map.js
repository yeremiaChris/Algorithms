// Map
// A map is an unordered collection of key-value pairs. Both keys and values can be of any data type
// To retrieve a value, you can use the corresponding key
// Maps are iterables. They can be used with a for of loop

// Object vs Map
// Objects are unordered whereas maps are ordered
// Keys in objects can only be string or symbol type whereas in maps, they can be of any type
// An object has a prototype and may contain a few default keys which may collide with  your own keys if you're not careful. A map on the other hand does not contain any keys by default
// Objects are not iterables where as maps are iterables
// The number of items in an object must be determined manually where as it is readily available with the size property in a map
// Apart of storing data, you can attach functionality to an object whereas maps are restricted to just storing data

const map = new Map([
  ["a", 1],
  ["b", 2],
]);
map.set("c", 3);
map.delete("c");
console.log(map.has("a"));
console.log(map.size);
map.clear();

for (const [key, value] of map) {
  console.log(key, value);
}
