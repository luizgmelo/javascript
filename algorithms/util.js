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

export { Colors, initializeColor, defaultEquals }
