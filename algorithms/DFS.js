import { Colors, initializeColor} from "./util.js"

export const depthFirstSearch = (graph, callback) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);
  const d = {};
  const f = {};
  const p = {};
  const time = { count: 0 };
  for (let i = 0; i < vertices.length; i++) {
    f[vertices[i]] = 0;
    d[vertices[i]] = 0;
    p[vertices[i]] = null;
  }
  for (let i = 0; i < vertices.length; i++) {
    if (color[vertices[i]] === Colors.WHITE) {
      depthFirstSearchVisit(vertices[i], d, f, p, time, color, adjList, callback);
    } 
  }
  return {
    discovery: d,
    finished: f,
    predecessors: p
  };
};

const depthFirstSearchVisit = (u, d, f, p, time, color, adjList, callback) => {
  color[u] = Colors.GREY;
  d[u] = ++time.count;
  if (callback) {
    callback(u);
  } 
  const neighbors = adjList.get(u);
  for (let i = 0; i < neighbors.length; i++) {
    const w = neighbors[i];
    if (color[w] === Colors.WHITE) {
      p[w] = u;
      depthFirstSearchVisit(w, d, f, p, time, color, adjList, callback);
    }
  }
  color[u] = Colors.BLACK;
  f[u] = ++time.count;
};
