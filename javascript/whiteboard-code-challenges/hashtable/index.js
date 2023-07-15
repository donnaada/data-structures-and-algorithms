'use strict';

class HashTable{
  constructor(size){
    this.size = size;
    this.bucket = new Array(size);
  }

  set(key, value){
    let hash = this.hash(key);
    let data = { [key]: value };
    this.bucket[hash] = data;
  }

  get(key){
    let hash = this.hash(key);
    if (this.bucket[hash]){
      return this.bucket[hash][key];
    } else {
      return null;
    }
  }

  has(key){
    let hash = this.hash(key);
    return this.bucket[hash] ? true : false;
  }

  keys(){
    let results = this.bucket.reduce((arr, bucket)=>{
      if(bucket){
        arr.push(Object.keys(bucket)[0]);
      }
      return arr;
    }, []);
    return results;
  }

  hash(key){
    let hash = key.split('').reduce((sum, char)=>{
      return sum + char.charCodeAt(0);
    },0);
    let hashKey = (hash * 599) % this.size;
    return hashKey;
  }


}

const isRepeated = (str) => {
  let hash = new HashTable(1024);
  let arr = str.split(' ');

  for(let i = 0; i < arr.length; i++){
    if(!hash.get(arr[i])){
      hash.set(arr[i], i);
    } else {
      return arr[i];
    }
  }

};



module.exports = { HashTable, isRepeated };
