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

  has(key) {
    const index = this._hash(key)
      if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    const bucket =this.buckets[index]
    const existingEntry = bucket.find(entry => entry[0] === key);
    
    return !!existingEntry //returns true/false depending if existing entry is truthy
  }

  remove(key) {
    const index = this._hash(key)
          if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    const bucket = this.buckets[index]
    const foundIndex = bucket.findIndex(entry=> entry[0] === key)
    if (foundIndex === -1) return false
    bucket.splice(foundIndex,1)
    return true
  }

  length() {

    return this.buckets.reduce((count, bucket)=> {
        return count + bucket.length
    },0)
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
