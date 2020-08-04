class Validator {
  constructor() {
    this.message = '가 유효하지 않습니다.';
  }
  setInvalidMessage(field) {
    return `${field}${this.message}`;
  }
  setInvalidMessages(...fields) {
    return fields.map(this.setInvalidMessage);
  }
}

function sayMessage() {
  return this.message;
}
const alert = {
  message: '위험해!',
};
const sayAlert = sayMessage.bind(alert);
console.log(sayAlert());