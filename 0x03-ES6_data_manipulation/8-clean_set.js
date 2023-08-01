export default function cleanSet(set, startString) {
  if (startString === '') {
    return Array.from(set).join('-');
  }

  const arr = [];
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      arr.push(value.slice(startString.length));
    }
  });
  return arr.join('-');
}
