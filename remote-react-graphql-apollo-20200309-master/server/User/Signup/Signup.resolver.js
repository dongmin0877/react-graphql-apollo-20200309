const User = require("../../../models/User");
const jwt = require("jsonwebtoken");
const createJWT = user => {
  const { _id } = user;
  return jwt.sign({ _id }, process.env.JWT_SECRET, {
    expiresIn: "1h"
  });
};

const resolver = {
  Mutation: {
    signup: async (parent, { name, email, password }, context, info) => {
      console.log(name, email, password);
      try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return {
            success: false,
            error: "해당 이메일이 존재합니다.",
            data: null
          };
        }
        const newUser = await User.create({
          name: name,
          email: email,
          password: password
        });

        const token = await createJWT(newUser);

        console.log(token);

        return {
          success: true,
          error: null,
          data: token
        };
      } catch (error) {
        return {
          success: false,
          error: error.message,
          data: null
        };
      }
    }
  }
};
module.exports = resolver;
