const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World! abc xys')
})

router.get('/abc', (req, res) => {
    res.send('check ABC')
})

router.get('/xyz', (req, res) => {
    //res.send('<h1> Hỏi cc </h1>')
    res.render('sample.ejs')
})
module.exports = router;// export default