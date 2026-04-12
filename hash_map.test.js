import HashMap from "./hash_map";

describe("HashMap", () => {
  let hashMap;

  beforeEach(() => {
    hashMap = new HashMap();
    hashMap.set("apple", "red");
    hashMap.set("banana", "yellow");
    hashMap.set("carrot", "orange");
    hashMap.set("dog", "brown");
    hashMap.set("elephant", "gray");
    hashMap.set("frog", "green");
    hashMap.set("grape", "purple");
    hashMap.set("hat", "black");
    hashMap.set("ice cream", "white");
    hashMap.set("jacket", "blue");
    hashMap.set("kite", "pink");
    hashMap.set("lion", "golden");
  });

  test("length returns 12 after population", () => {
    expect(hashMap.length()).toBe(12);
  });

  test("get returns correct value", () => {
    expect(hashMap.get("apple")).toBe("red");
  });

  describe("updating an entry", () => {
    beforeEach(() => {
      hashMap.set("apple", "green");
    });

    test("returns new value for entry ", () => {
      expect(hashMap.get("apple")).toBe("green");
    });

    test("returns 12 after updating", () => {
      expect(hashMap.length()).toBe(12);
    });
  });

  describe("has", () => {
    test("returns true for an existing entry ", () => {
      expect(hashMap.has("apple")).toBe(true);
    });

    test("returns false for a non existing entry", () => {
      expect(hashMap.has("curtains")).toBe(false);
    });
  });

  describe("remove", () => {
    test("returns true when we remove an entry", ()=> {
        expect(hashMap.remove("lion")).toBe(true)
    })

    test("returns false when we remove a non existing entry", () => {
        expect(hashMap.remove("umbrella")).toBe(false)
    })

    test("decrements the legnth when we remove an entry",()=> {
        hashMap.remove("lion")

        expect(hashMap.length()).toBe(11)
    })

    describe("resize", () => {
    test("doubles capacity when load factor is exceeded", () => {
        hashMap.set("moon", "silver")
        expect(hashMap.capacity).toBe(32)
    })

    test("preserves all entries after resize", () => {
        hashMap.set("moon", "silver")
        expect(hashMap.length()).toBe(13)
    })
})
  })
});
