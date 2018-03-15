require('dotenv').config();
const express = require('express');
// const routes = require('./routes');

const mongoose = require('mongoose');
const {success, fail} = require('./api-utils');
const bodyParser = require('body-parser');
const User = require('./models/User');
const Trip = require('./models/Trip');
const moment = require('moment');
const ObjectId = require('mongodb').ObjectID;


const port = process.env.PORT;


const cors = require('cors');

const mongo = {
    host: process.env.MONGO_HOST,
    port: process.env.MONGO_PORT,
    database: process.env.MONGO_DB,
};


mongoose.connect(`mongodb://${mongo.host}:${mongo.port}/${mongo.database}`);

const app = express();
const router = express.Router();
app.use('/api', router);

const jsonBodyParser = bodyParser.json();

/**
 * Create user
 */
router.post('/user', jsonBodyParser, (req, res) => {

    const {body: {name, surname, email, picture, username, password}} = req;

    Promise.resolve()
        .then(() => User.findOne({username})
            .then(user => {
                if (user) throw Error('user already exists');
                return User.create({name, surname, email, picture, username, password})
            })
            .then(username => res.json(success({username})))
            .catch(err => res.json(fail(err.message)))
        )
});

/**
 * Delete user
 */
router.delete('/user/:username', jsonBodyParser, (req, res) => {
    const {body: {password}} = req;
    const {params: {username}} = req;

    Promise.resolve()
        .then(() => User.findOne({username}))
        .then(user => {
            if (!user) throw Error('user does not exists');
            if (user.password !== password) throw Error('wrong password');

            return User.deleteOne({username})

        })
        .then(() => {
            res.json(success(`Your account ${username} has been deleted`))
        })
        .catch(err => {
            res.json(fail(err.message))
        })

});

/**
 * Update user
 */
router.put('/user/:username', jsonBodyParser, (req, res) => {
    const {body: {name, surname, email, picture, password, newPassword}} = req;
    const {params: {username}} = req;

    Promise.resolve()
        .then((() => User.findOne({username})))
        .then(user => {
            if (!user) throw Error('user does not exists');
            if (user.password !== password) throw Error('wrong password');

            return User.updateOne({username}, {name, surname, email, picture, password: newPassword})

        })
        .then(() => {
            res.json(success(`${username} successfully updated`))
        })
        .catch(err => {
            res.json(fail(err.message))
        })
});


/**
 * Create Trip
 */
router.post('/trip/:username', jsonBodyParser, (req, res) => {
    const {body: {from, to, date, meetingPoint, departureTime, returnTime, tripTime, price, distance, seats, description}} = req;
    const {params: {username}} = req;
    const departureDate = moment(`${date} ${departureTime}`);
    const returnDate = moment(`${date} ${returnTime}`);

    Promise.resolve()
        .then(() => Trip.create({
            from,
            to,
            meetingPoint,
            departureDate,
            returnDate,
            price,
            distance,
            tripTime,
            seats,
            description,
            creator: username
        }))
        .then(trip => {
            res.json(success({trip}))
        })
        .catch(err => {
            res.json(fail(err.message))
        })
});

/**
 * list user published trips
 */
router.get('/trips/:username', (req, res) => {
    const {params: {username}} = req;
    Trip.find({creator: username})
        .then(trips => {
            res.json(success({trips}))
        })


});

/**
 * cancel trip
 */
router.delete('/trip/:username/:id', jsonBodyParser, (req, res) => {
    const {body: {password}} = req;
    const {params: {username, id}} = req;

    Promise.resolve()
        .then(() => User.findOne({username}))
        .then(user => {
            if (user.password !== password) throw Error('wrong password');

            return Trip.deleteOne({"_id": ObjectId(id)})

        })
        .then(() => {
            res.json(success(`The trip ${id} has been deleted`))
        })
        .catch(err => {
            res.json(fail(err.message))
        })

});

/**
 * Update trip
 */
router.put('/trip/:username/:id', jsonBodyParser, (req, res) => {
    const {body: {from, to, date, meetingPoint, departureTime, returnTime, tripTime, price, distance, seats, description, password}} = req;
    const {params: {username, id}} = req;

    Promise.resolve()
        .then(() => User.findOne({username}))
        .then(user => {
            if (user.password !== password) throw Error('wrong password');

            return Trip.updateOne({"_id": ObjectId(id)}, {
                from,
                to,
                date,
                meetingPoint,
                departureTime,
                returnTime,
                tripTime,
                price,
                distance,
                seats,
                description
            })

        })
        .then(() => {
            res.json(success())
        })
        .catch(err => {
            res.json(fail(err.message))
        })
});

/**
 * Join a trip : will happen on click book button, getting the id from the trip
 */

router.patch('/trip/:username/:id', (req, res) => {
    const {params: {username, id}} = req;


    Promise.resolve()
        .then(() => User.findOne({username}))
        .then((user) => Trip.updateOne({"_id": ObjectId(id)}, {passengers: [user.username]}))
        .then(() => {
            res.json(success())
        })
        .catch(err => {
            res.json(fail(err.message))
        })
});

/**
 * Unjoin trip
 */

/**
 * User rate other user
 */

router.patch('/user/:username/:id', jsonBodyParser, (req,res) => {
    const {params: {username, id}} = req;
    const {body: {rating}} = req;

    Promise.resolve()
        .then((user) => User.findOne({username}))
        .then((user) => User.updateOne({"_id": ObjectId(id)}, {rating}))
        .then(() => {
            res.json(success())
        })
        .catch(err => {
            res.json(fail(err.message))
        })

});

/**
 * user let comment to other user
 */

app.use(cors());


app.listen(port, () => console.log(`ODT api running on port ${port}`));