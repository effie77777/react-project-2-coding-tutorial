const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const User = require("../models/index").User;
const facebookAccessToken = require("../routes/auth-route").accessToken;

// Login with Facebook 驗證 access token
passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "https://effie77777.github.io/react-project-2-coding-tutorial/#/profile"
},
function(accessToken, refreshToken, profile, cb) {
    accessToken = facebookAccessToken;
    console.log(`accessToken: ${accessToken}`);
    console.log(`profile: ${profile}`);
    return cb(profile);
}))

// JWT 部分
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

// Google Oauth 部分
// passport.use(new GoogleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: "/auth/google/redirect",
// }, (accessToken, refreshToken, profile, cb) => {
//     console.log(profile);
// }))