const validator = {
  message: '는 유효하지 않습니다.',
  setInvalidMessage(field) {
    return `${field}${this.message}`;
  },
};

console.log(validator.setInvalidMessage('도시'));

const validator2 = {
  message: '는 유효하지 않습니다.',
  setInvalidMessages(...fields) {
    return fields.map(field => `${field}${this.message}`);
  },
};
console.log(validator2.setInvalidMessages('도시', '이름'));