const app = require("../index");
const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log("서버 가동");
});
