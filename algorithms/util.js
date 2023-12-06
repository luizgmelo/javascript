const Colors = {
  WHITE: 0,
  GREY: 1,
  BLACK: 2
};

const initializeColor = vertices => {
  const color = {};
  for (let i = 0; i < vertices.length; i++) {
    color[vertices[i]] = Colors.WHITE;
  }
  return color;
}

function defaultEquals(a, b) {
  return a === b ? true : false
}

function swap(array, a, b) {
  return [array[a], array[b]] = [array[b], array[a]]
}

export { Colors, initializeColor, defaultEquals, swap }
