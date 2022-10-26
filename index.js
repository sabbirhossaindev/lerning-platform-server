const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('Course API Running');
});

app.get('/courses-categories', (req, res) => {
    res.send(categories);
});

// app.get('/category/:id', (req, res) => {
//     const id = req.params.id;
//     const category_courses = courses.filter(c => c.category_id === id);
//     console.log(category_courses);
//     res.send(category_courses)
// })

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(c => c._id === id);
    res.send(selectedCourse)
})


app.listen(port, () => {
    console.log('course server running on port', port);
});