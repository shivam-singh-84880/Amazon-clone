const bcrypt = require("bcryptjs");
const user = [
  {
    name: "admin",
    email: "admin@admin.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "shivam",
    email: "shivam@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "shiva",
    email: "shiva@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];
module.exports = user;
