'use strict';

const { Hashtable } = require('./index');

describe('Hashtable Tests', () => {
  // Setting a key/value to your hashtable results in the value being in the data structure
  test('Setting a key/value to your hashtable results in the value being in the data structure', () => {
    let table = new Hashtable(1024);
    table.set('Donna', 'Person');
    expect(table.has('Donna')).toBeTruthy();
  });
  // Retrieving based on a key returns the value stored
  test('Retrieving based on a key returns the value stored', () => {
    let table = new Hashtable(1024);
    table.set('Donna', 'Person');
    expect(table.get('Donna')).toEqual('Person');
  });
  // Successfully returns null for a key that does not exist in the hashtable
  test('Successfully returns null for a key that does not exist in the hashtable', () => {
    let table = new Hashtable(1024);
    expect(table.get('Donna')).toBeNull();
  });
  // Successfully returns a list of all unique keys that exist in the hashtable
  test('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    let table = new Hashtable(1024);
    table.set('Donna', 'Person');
    table.set('RJ', 'Person');
    table.set('Wiisch', 'Person');
    expect(table.keys()).toEqual(['Donna', 'RJ', 'Wiisch']);
  });
  // Successfully handle a collision within the hashtable
  test('Successfully handle a collision within the hashtable', () => {
    let table = new Hashtable(1024);
    table.set('Donna', 'Person');
    table.set('RJ', 'Person');
    table.set('Wiisch', 'Person');
    expect(table.get('RJ')).toEqual('Person');
  });
  // Successfully retrieve a value from a bucket within the hashtable that has a collision
  test('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    let table = new Hashtable(1024);
    table.set('Donna', 'Person');
    table.set('RJ', 'Person');
    table.set('Wiisch', 'Person');
    expect(table.get('RJ')).toEqual('Person');
  });
  // Successfully hash a key to an in-range value
  test('Successfully hash a key to an in-range value', () => {
    let table = new Hashtable(1024);
    expect(table.hash('Donna')).toBeLessThan(1024);
  });
});



