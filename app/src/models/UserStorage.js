class UserStorage {
  static #users = {
    id: ["RnfElwl", "우왁굳", "고세구"],
    psword: ["1234", "1234", "123456"],
    name: ["꿀띠지", "오영택", "고세구"],
  };
  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
