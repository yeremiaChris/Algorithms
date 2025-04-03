class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let index = 0; index < key.length; index++) {
      total += key.charCodeAt(index);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    let bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKey = bucket.find((item) => item[0] === key);
      if (sameKey) {
        sameKey[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    // return this.table[index];
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        return sameKeyItem;
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    // this.table[index] = undefined;
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }

  display() {
    for (let index = 0; index < this.table.length; index++) {
      if (this.table[index]) {
        console.log(index, this.table[index]);
      }
    }
  }
}

const table = new HashTable(50);
table.set("name", "bruce");
table.set("age", 25);
table.display();
console.log(table.get("name"));
table.set("mane", "clark");
table.set("name", "rwar");
table.remove("name");
table.display();
