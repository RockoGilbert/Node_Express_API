import express from 'express';

const router = express.Router();

const users = [{
    firstName: "Rock",
    lastName: "GEE",
    age: 25
}, {
}]

router.get('/', (req, res) => {
    console.log(users);
    res.send('YOYO');
});

export default router;