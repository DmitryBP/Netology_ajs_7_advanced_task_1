export class Validator {
  static validateUsername(userName) {
    const re = /^[a-z][a-z_-]*([\d]{0,2}[a-z_-])*[\d]{0,2}[a-z]$/ig;
    return re.test(userName);
  }
}
export const validator = new Validator();
