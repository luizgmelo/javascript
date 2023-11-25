const INF = Number.MAX_SAFE_INTEGER;
export const prim = graph => {
  const parent = [];
  const key = [];
  const visited = [];
  const { length } = graph;
  for (let i = 0; i < length; i++) {
    key[i] = INF;
    visited[i] = false;
  }
  key[0] = 0;
  parent[0] = -1;
  for (let i = 0; i < length - 1; i++) {
    const u = minKey(key, visited);
    visited[u] = true;
    for (let v = 0; v < length; v++) {
      if (graph[u][v] && !visited[v] && graph[u][v] < key[v]) {
        parent[v] = u;
        key[v] = graph[u][v];
      }
    }
  }
  return parent;
}

const minKey = (key, visited) => {
  let min = INF;
  let minIndex = -1;
  for (let v = 0; v < key.length; v++) {
    if (visited[v] === false && key[v] <= min) {
      min = key[v];
      minIndex = v;
    }
  }
  return minIndex;
}
