import passport from "passport";
const LocalStrategy = require("passport-local").Strategy;
import bcrypt from "bcrypt";

import User from "../mongoose/models/user";

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "id",
        passwordField: "password",
      },
      async (id, password, done) => {
        try {
          const exUser = await User.findOne({ where: { id } });
          if (exUser) {
            const result = await bcrypt.compare(password, exUser.password);
            if (result) {
              done(null, exUser);
            } else {
              done(null, false, {
                message: "Invalid password. Please try again.",
              });
            }
          } else {
            done(null, false, { message: "ID does not exist." });
          }
        } catch (error) {
          console.error(error);
          done(error);
        }
      }
    )
  );
};
