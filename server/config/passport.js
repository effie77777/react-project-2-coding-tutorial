const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
const User = require("../models/index").User;

// JWT 驗證
let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
opts.secretOrKey = process.env.PASSPORT_SECRET;
passport.use(new JwtStrategy(opts, async(payload, done) => {
    await User.findOne({ _id: payload.id })
    .then((d) => {
        if (!d) {
            return done(null, false); // done 的兩個參數分別是 error 和 user
        } else if (d) {
            return done(null, d);
        }
    })
    .catch((e) => {
        return done(e);
    })
}))