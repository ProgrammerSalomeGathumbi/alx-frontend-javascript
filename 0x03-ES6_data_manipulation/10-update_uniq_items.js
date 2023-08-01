export default function updateUniqueItems(list) {
  if (Object.getPrototypeOf(list) !== Map.prototype) {
    throw Error('Cannot process');
  }
  list.forEach((quantity, item) => {
    if (quantity === 1) {
      list.set(item, 100);
    }
  });
}
