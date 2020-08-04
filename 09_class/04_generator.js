function* getCairoTrilogy() {
  yield '궁전 샛길';
  yield '욕망의 궁전';
  yield '설탕 거리';
}

const trilogy = getCairoTrilogy();
console.log(trilogy.next());
console.log(trilogy.next());
console.log(trilogy.next());
console.log(trilogy.next());

console.log([...getCairoTrilogy()]);

const readingList = {
  '깡패단의 방문': true,
  '맨해튼 비치': false,
};
for (const book of getCairoTrilogy()) {
  readingList[book] = false;
}

console.log(readingList);

class FamilyTree {
  constructor() {
    this.familly = {
      name: 'Doris',
      child: {
        name: 'Martha',
        child: {
          name: 'Bea',
        }
      }
    }
  }
  getMembers() {
    const familly = [];
    let node = this.familly;
    while (node) {
      familly.push(node.name);
      node = node.child;
    }
    return familly;
  }
}

const familly = new FamilyTree();
console.log(familly.getMembers());

class FamilyTree2 {
  constructor() {
    this.familly = {
      name: 'Doris',
      child: {
        name: 'Martha',
        child: {
          name: 'Bea',
        }
      }
    }
  }
  * [Symbol.iterator]() {
    let node = this.familly;
    while (node) {
      yield node.name;
      node = node.child;
    }
    return familly;
  }
}

const familly2 = new FamilyTree2();
console.log([...familly2]);