# Hash Map
A HashMap stores data in key value pairs, allowing for O(1) retrieval

## Features
- set(key,value) adds key value pair to a bucket
- get(key) returns value at key if key exists
- has(key) returns true/false depending if key exists
- remove(key) deletes an entry if key exists
- length() returns length of hashmap
- entries() returns all entries (key, value pairs)
- keys() returns all keys
- values() returns all values
- clear() resets the hashmap 

## Installation 
- clone repo from github
- run `npm install`
- test the test cases using `npm test`


## Usage

​```javascript
const map = new HashMap()

map.set('apple', 'red')
map.get('apple')      // returns 'red'
map.has('apple')      // returns true
map.remove('apple')   // returns true
map.length()          // returns 0
​```
## Technologies
- JavaScript
- Jest for testing
- Babel

## What I learned

- This project taught me how to use and implement hashmaps as a data structure for efficient retrieval and insertion of data as well as familiarising myself with array methods such as flatmap and reduce,and findindex, and using methods to keep the code DRY. Most importantly I strengthened my unit-testing skills using Jest,  an important skill any developer should be familiar with.


