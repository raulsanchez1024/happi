const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const keys = require("../../config/keys");

// Load coworker model
const Coworker = require("../../models/Coworker");
// Load profile model
const Profile = require("../../models/Profile");

// Validation
// const validateCoworkerInput = require("../../validation/coworker");

// @route   POST api/coworker/add
// @desc    Create coworker
// @access  Private
router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // const { errors, isValid } = validateCoworkerInput(req.body);

    // // Check validation
    // if (!isValid) {
    //   // If any errors send 400 with errors object
    //   return res.status(400).json(errors);
    // }

    const newCoworker = new Coworker({
      user: req.user.id,
      email: req.body.email,
      name: req.body.name,
      jobtitle: req.body.jobtitle
    });

    newCoworker.save().then(coworker => res.json(coworker));
  }
);

// @route   POST api/coworker/qa/:id
// @desc    Add to Q&A
// @access  Private
router.post(
  "/qa/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // const { errors, isValid } = validateCoworkerInput(req.body);

    // // Check validation
    // if (!isValid) {
    //   // If any errors send 400 with errors object
    //   return res.status(400).json(errors);
    // }

    Coworker.findById(req.params.id)
      .then(coworker => {
        const newQA = {
          question: req.body.question,
          answer: req.body.answer
        };

        // Add to questionandanswer array
        coworker.questionandanswer.unshift(newQA);

        // Save
        coworker.save().then(coworker => res.json(coworker));
      })
      .catch(err =>
        res.status(404).json({ coworkernotfound: "Coworker not found" })
      );
  }
);

// @route   GET api/coworker/all
// @desc    Get all users coworkers documents
// @access  Private
router.get(
  "/all",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Coworker.find({ user: req.user.id })
      .then(coworker => res.json(coworker))
      .catch(err => res.json(err));
  }
);

// @route   GET api/coworker/:id
// @desc    Get coworker by id
// @access  Private
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Coworker.findById(req.params.id)
      .then(coworker => res.json(coworker))
      .catch(err =>
        res
          .status(400)
          .json({ coworkernotfound: "No coworker found with that ID" })
      );
  }
);

// @route   DELETE api/coworker/:id
// @desc    Remove a coworker via id
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Coworker.findById(req.params.id).then(coworker => {
        // Check for coworker owner
        if (coworker.user.toString() !== req.user.id) {
          return res(401).json({ notauthorized: "User not authorized" });
        }

        // Delete
        coworker
          .remove()
          .then(() => res.json({ success: true }))
          .catch(err =>
            res.status(404).json({ coworkernotfound: "Coworker not found" })
          );
      });
    });
  }
);

module.exports = router;

