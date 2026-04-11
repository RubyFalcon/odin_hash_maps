class HashMap {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.75;
    this.buckets = Array.from({ length: this.capacity }, () => []);
  }

  set(key, value) {
    const index = this._hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    const bucket = this.buckets[index];
    const existingEntry = bucket.find((entry) => entry[0] === key);

    if (existingEntry) {
      existingEntry[1] = value;
    } else {
      bucket.push([key, value]);
    }

    if (this.length() > this.capacity * this.loadFactor) {
      this._resize();
    }
  }

  get(key) {
    const index = this._hash(key);
     if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    const bucket = this.buckets[index];
    const existingEntry = bucket.find(entry => entry[0] === key);
    if (existingEntry) {
        return existingEntry[1]
    }
    return null
    
  }
 
  _hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }
}
