const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const bcrypt = require('bcryptjs');
const Usermodel = require('../models/UserModel');
const {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, FACEBOOK_CLIENT_ID, FACEBOOK_CLIENT_SECRET} = require('../config/config');
const { hashPassword } = require('../functions_schemas/validateFunctions');

const userInstance = new Usermodel();

const loadPassport = (passport) => {
    
    passport.use(new LocalStrategy({usernameField: 'email'}, async (email, password, done) => {
        try {
            const user = await userInstance.getByEmail(email);
            if(!user) return done(null, false);
            if(! await bcrypt.compare(password, user.password)) return done(null, false);
            user.password = '******';
            return done(null, user);
        } catch (err) {
            return done(err);
        }
    }));

    passport.use(new GoogleStrategy({
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:5000/api/login-google/redirect",
            passReqToCallback: true
        },
        async (req, accessToken, refreshToken, profile, done) => {
            try {
                let email = profile._json.email;
                const user = await userInstance.getByEmail(email);
                if(!user){
                    const userData = {
                        first_name: profile.name.givenName,
                        last_name: profile.name.familyName,
                        email,
                        password: await hashPassword(profile.id)
                    }
                    const newUser = await userInstance.create(userData);
                   return done(null, newUser);
                }
                return done(null, user);
            } catch(err) {
                return done(err);
            }
        }
    ));

    passport.use(new FacebookStrategy({
            clientID: FACEBOOK_CLIENT_ID,
            clientSecret: FACEBOOK_CLIENT_SECRET,
            callbackURL: "http://localhost:5000/api/login-facebook/redirect",
            profileFields: ['id', 'name', 'email']
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                let email = profile._json.email;
                const user = await userInstance.getByEmail(email);
                if(!user){
                    const userData = {
                        first_name: profile.name.givenName,
                        last_name: profile.name.familyName,
                        email,
                        password: await hashPassword(profile.id)
                    }
                    const newUser = await userInstance.create(userData);
                   return done(null, newUser);
                }
                return done(null, user);
            } catch(err) {
                return done(err);
            }
        }
    ));

    passport.serializeUser((user, done) => {
        return done(null, user.id)
    });

    passport.deserializeUser( async (id, done) => {
        const user = await userInstance.getById(id);
        user.password = '******';
        return done(null, user);
    });
};

const checkAuthentication = (req, res, next) => {
    console.log(req.isAuthenticated());
    if(req.isAuthenticated()) return next();
    res.status(400).json({message: 'Please login'});
};

module.exports = {loadPassport, checkAuthentication};