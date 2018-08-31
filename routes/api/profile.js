const express = require("express");
const router = express.Router();
const passport = require("passport");

// Load profile model
const Profile = require("../../models/Profile");
// Load user model
const User = require("../../models/User");

// Load validation
const validateProfileInput = require('../../validation/profile');

// @route   POST api/profile
// @desc    Create or edit user profile
// @access  Private
router.post("/", passport.authenticate("jwt", {
    session: false
}), (req, res) => {

    const {
        errors,
        isValid
    } = validateProfileInput(req.body);

    // Check Validation
    if (!isValid) {
        // Return any errors with 400 status
        return res.status(400).json(errors);
    }

    const profileFields = {};
    profileFields.user = req.user.id;
    if (req.body.company) profileFields.company = req.body.company;
    if (req.body.jobtitle) profileFields.jobtitle = req.body.jobtitle;
    if (req.body.phonenumber) profileFields.phonenumber = req.body.phonenumber;
    if (req.body.timezone) profileFields.timezone = req.body.timezone;
    if (req.body.sendquestionsat) profileFields.sendquestionsat = req.body.sendquestionsat;

    Profile
        .findOne({
            user: req.user.id
        })
        .then(profile => {
            if (profile) {
                // Update
                Profile.findOneAndUpdate({
                    user: req.user.id
                }, {
                    $set: profileFields
                }, {
                    new: true
                }).then(profile => res.json(profile));
            } else {
                // Create
                new Profile(profileFields).save().then(profile => res.json(profile));
            }
        })
});

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get("/test", (req, res) => res.json({
    msg: "Profile works"
}));

// @route   GET api/profile
// @desc    Get current users profile
// @access  Private
router.get(
    '/',
    passport.authenticate('jwt', {
        session: false
    }),
    (req, res) => {
        const errors = {};

        Profile.findOne({
                user: req.user.id
            })
            .populate('user', ['name', 'email'])
            .then(profile => {
                if (!profile) {
                    errors.noprofile = 'There is no profile for this user';
                    return res.status(404).json(errors);
                }
                res.json(profile);
            })
            .catch(err => res.status(404).json(err));
    }
);

module.exports = router;