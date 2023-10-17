export function defaultToString(item) {
  if (item === null) {
    return 'NULL';
  } else if (item === undefined) {
    return 'UNDEFINED';
  } else if (typeof item === 'string') {
    return `${item}`;
  }
  // convert object to string
  return JSON.stringify(item);
}

