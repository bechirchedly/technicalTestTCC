const express = require('express');
const personRoute = express.Router();

// person model
let PersonModel = require('../models/Person');

// Get all data
personRoute.route('/').get((req, res, next) => {
    PersonModel.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Create person data
personRoute.route('/create-person').post((req, res, next) => {
    PersonModel.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Edit person data
personRoute.route('/edit-person/:id').get((req, res, next) => {
    PersonModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data);
        }
    })
})

// Update person data
personRoute.route('/update-person/:id').put((req, res, next) => {
    PersonModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
            console.log('Person successfully updated');
        }
    })
})

// Delete person data
personRoute.route('/delete-person/:id').delete((req, res, next) => {
    PersonModel.findByIdAndDelete(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = personRoute;