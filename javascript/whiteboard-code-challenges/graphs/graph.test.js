'use strict';

let { Graph } = require(".");

describe('Testing Graphs', () => {
  test('Vertex can be successfully added to the graph', ()=>{
    let graph = new Graph();
    let a = graph.addVertex('a');

    expect(a).toBeTruthy();
  });

  test('An edge can be successfully added to the graph', ()=>{
    let graph = new Graph();
    let a = graph.addVertex('a');
    let b = graph.addVertex('b');

    graph.addDirectedEdge(a, b);

    expect(graph.getNeighbors(a)).toBeTruthy();
  });

  test('A collection of all vertices can be properly retrieved from the graph', ()=>{
    let graph = new Graph();
    graph.addVertex('a');
    graph.addVertex('b');

    expect(graph.getVertices().length).toBe(2);
    expect(graph.getVertices()).toEqual([{'value': 'a'}, {'value': 'b'}]);

  });

  test(`All appropriate neighbors can be retrieved from the graph`, () => {
    let graph = new Graph();
    let a = graph.addVertex('A');
    let b = graph.addVertex('B');

    graph.addDirectedEdge(a, b);

    expect(graph.getNeighbors(a)).toBeTruthy();
  });

  test(`Neighbors are returned with the weight between nodes included`, () => {
    let graph = new Graph();
    let a = graph.addVertex('A');
    let b = graph.addVertex('B');

    graph.addDirectedEdge(a, b, 1);

    expect(graph.getNeighbors(a)).toBeTruthy();
  });

  test(`The proper size is returned, representing the number of nodes in the graph`, () => {
    let graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');

    expect(graph.size()).toEqual(2);
  });

  test(`A graph with only one node and edge can be properly returned`, () => {
    let graph = new Graph();
    let a = graph.addVertex('a');

    graph.addDirectedEdge(a, a);

    expect(graph.getNeighbors(a)).toEqual([{'vertex': {'value': 'a'}, 'weight': 0}]);
  });
});



// A collection of all vertices can be properly retrieved from the graph
// All appropriate neighbors can be retrieved from the graph
// Neighbors are returned with the weight between vertices included
// The proper size is returned, representing the number of vertices in the graph
// A graph with only one vertex and edge can be properly returned
