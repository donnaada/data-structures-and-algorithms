'use strict';

const { HashTable } = require('../hashtable');

function leftJoin(tb1, tb2) {
  const result = [];

  for (let key in tb1) {
    if (tb2.get(key)) {
      result.push([key, tb1[key], tb2[key]]);
    } else {
      result.push([key, tb1[key], null]);
    }
  }

  return result;
}


module.exports = { leftJoin };
