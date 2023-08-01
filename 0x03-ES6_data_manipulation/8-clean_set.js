export default function cleanSet(set, startString) {
  const arr = [];
  if (startString.length === 0 || typeof startString !== 'string' || typeof set !== 'object') {
    return '';
  }

  set.forEach((value) => {
    if (value && value.startsWith(startString)) {
      arr.push(value.slice(startString.length));
    }
  });
  return arr.join('-');
}
