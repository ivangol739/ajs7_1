export default class Validator {
  constructor(nickname) {
    this.nickname = nickname;
  }

  validateUsername() {
    if (/[-\w]/.test(this.nickname) && /^[^-_\d]/.test(this.nickname) && /[^-_\d]$/.test(this.nickname) && !/\d{4}/.test(this.nickname)) {
      return true;
    } return false;
  }
}
