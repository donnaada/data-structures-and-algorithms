'use strict';

const { HashTable, isRepeated } = require('./index');

describe('HashTable Tests', () => {
  // Setting a key/value to your HashTable results in the value being in the data structure
  test('Setting a key/value to your HashTable results in the value being in the data structure', () => {
    let table = new HashTable(1024);
    table.set('Donna', 'Person');
    expect(table.has('Donna')).toBeTruthy();
  });
  // Retrieving based on a key returns the value stored
  test('Retrieving based on a key returns the value stored', () => {
    let table = new HashTable(1024);
    table.set('Donna', 'Person');
    expect(table.get('Donna')).toEqual('Person');
  });
  // Successfully returns null for a key that does not exist in the HashTable
  test('Successfully returns null for a key that does not exist in the HashTable', () => {
    let table = new HashTable(1024);
    expect(table.get('Donna')).toBeNull();
  });
  // Successfully returns a list of all unique keys that exist in the HashTable
  test('Successfully returns a list of all unique keys that exist in the HashTable', () => {
    let table = new HashTable(1024);
    table.set('Donna', 'Person');
    table.set('RJ', 'Person');
    table.set('Wiisch', 'Person');
    expect(table.keys()).toEqual(['Donna', 'RJ', 'Wiisch']);
  });
  // Successfully handle a collision within the HashTable
  test('Successfully handle a collision within the HashTable', () => {
    let table = new HashTable(1024);
    table.set('Donna', 'Person');
    table.set('RJ', 'Person');
    table.set('Wiisch', 'Person');
    expect(table.get('RJ')).toEqual('Person');
  });
  // Successfully retrieve a value from a bucket within the HashTable that has a collision
  test('Successfully retrieve a value from a bucket within the HashTable that has a collision', () => {
    let table = new HashTable(1024);
    table.set('Donna', 'Person');
    table.set('RJ', 'Person');
    table.set('Wiisch', 'Person');
    expect(table.get('RJ')).toEqual('Person');
  });
  // Successfully hash a key to an in-range value
  test('Successfully hash a key to an in-range value', () => {
    let table = new HashTable(1024);
    expect(table.hash('Donna')).toBeLessThan(1024);
  });

  test('Checks for first repeated word in string', ()=>{
    // Code Here
    let str = 'Once upon a time, there was a brave princess who...';
    expect(isRepeated(str)).toEqual('a');
  });
});



