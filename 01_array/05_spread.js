const items = ['apple', 'banana', '감', '수박'];

function removeItem(items, removable) {
  const index = items.indexOf(removable);
  return [...items.slice(0, index), ...items.slice(index + 1)];
}

console.log(removeItem(items, '수박'));

const book = ['Reasons and Persons', 'Derek Parfit', 19.99];

function formatBook(title, author, price) {
  return `${title} by ${author} $${price}`;
}

console.log(formatBook(...book));