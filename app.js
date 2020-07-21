const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static('public'));
app.use('/images', express.static('images'));
app.set('view engine', 'pug');

const routes = require('./routes/index');
const projectRoutes = require('./routes/projects');
app.use(routes, projectRoutes);



app.use((err, req, res, next) => {
    err = new Error('Page Not Found)');
    err.status = 404;
    next(err);
});


app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(404); 
    res.render('error');
});


app.listen(process.env.PORT || 3000, () => {
    console.log('app is working');
});
