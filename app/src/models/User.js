const UserStorage = require("./UserStorage");
const { response } = require("express");
class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const client = this.body;
    const { user } = await UserStorage.getUserInfo(client.id);
    if (user) {
      if (user.id === client.id && user.psword === client.psword) {
        return { success: true };
      }
      return { success: false, msg: "비밀번호가 틀렸습니다." };
    }
    return { success: false, msg: "존재하는 아이디가 없습니다." };
  }
  async register() {
    const client = this.body;
    try {
      const response = await UserStorage.save(client);
      return response;
    } catch (err) {
      console.log(err);
      return { success: false, msg: err };
    }
  }
}

module.exports = User;
