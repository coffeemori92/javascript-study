const items = ['apple', 'banana', '포도', '귤'];

function removeItem(items, removalbe) {
  const updated = [];
  for (let i = 0; i < items.length; i++) {
    if(items[i] !== removalbe) {
      updated.push(items[i])
    }
  }
  return updated;
}

console.log(removeItem(items, '귤'));

function removeItem2(items, removalbe) {
  const index = items.indexOf(removalbe);
  items.splice(index, 1); // 원본 조작
  return items;
}

// console.log(removeItem2(items, 'apple'));
// console.log(items);

function removeItem3(items, removalbe) {
  const index = items.indexOf(removalbe);
  return items.slice(0, index).concat(items.slice(index + 1));
}

console.log(removeItem3(items, 'apple'));