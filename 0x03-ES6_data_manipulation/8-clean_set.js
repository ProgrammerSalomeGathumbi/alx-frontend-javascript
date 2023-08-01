export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }

  const arr = [];
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      arr.push(value.slice(startString.length));
    }
  });
  return arr.join('-');
}
