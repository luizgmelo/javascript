import Dictionary from "../dictionary/Dictionary.js";
import { Stack } from "../stack/array-stack.js";
import { breadthFirstSearch } from "../algorithms/BFS.js";
import { BFS } from "../algorithms/BFS-shortpath.js";
import { depthFirstSearch } from "../algorithms/DFS.js";

class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected;
    this.vertices = [];
    this.adjList = new Dictionary();
  }
  addVertex(v) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v);
      this.adjList.set(v, []);
    }
  }
  addEdge(v, w) {
    if (!this.adjList.get(v)) {
      this.addVertex(v);
    }
    if (!this.adjList.get(w)) {
      this.addVertex(w);
    }
    this.adjList.get(v).push(w);
    if (!this.isDirected) {
      this.adjList.get(w).push(v);
    }
  }
  getVertices() {
    return this.vertices;
  }
  getAdjList() {
    return this.adjList;
  }
  toString() {
    let s = '';
    for (let i = 0; i < this.vertices.length; i++) {
      s += `${this.vertices[i]} -> `;
      const neightbors = this.adjList.get(this.vertices[i]);
      for (let j = 0; j < neightbors.length; j++) {
        s += `${neightbors[j]} `;
      }
      s += '\n';
    }
    return s;
  }
}

const graph = new Graph();
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (let i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');
console.log("===GRAPH===");
console.log(graph.toString());
const printVertex = value => console.log('Visited vertex: ' + value);
breadthFirstSearch(graph, myVertices[0], printVertex);
console.log("===BFS SHORT-PATH===");
const shortestPathA = BFS(graph, myVertices[0]);
console.log(shortestPathA);
console.log("===SHORT-PATH===");
const fromVertex = myVertices[0];
for (let i = 1; i < myVertices.length; i++) {
  const toVertex = myVertices[i];
  const path = new Stack();
  for (let v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) {
    path.push(v);
  }
  path.push(fromVertex);
  let s = path.pop();
  while (!path.isEmpty()) {
    s += ' - ' + path.pop();
  }
  console.log(s);
}
console.log("===DFS===")
console.log(depthFirstSearch(graph, printVertex));