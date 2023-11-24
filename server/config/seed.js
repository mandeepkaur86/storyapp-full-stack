const User = require("../apis/user/userModel");

User.findOne({ email: "admin@gmail.com" })
  .exec()
  .then((data) => {
    if (data == null) {
      let admin = new User();
      admin.autoId = 1;
      admin.name = "Admin";
      admin.email = "admin@gmail.com";
      admin.password = "1234";
      admin.userType = 1;
      admin
        .save()
        .then(() => {
          console.log("Admin Created");
        })
        .catch((err) => {
          console.log("Error In Creating Admin");
        });
    } else console.log("Admin Already Registered");
  });
