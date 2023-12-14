const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const sanitizer = require('sanitizer');

const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        let method = req.body._method;
        delete req.body._method;
        return method;
    }
}));

let todolist = [];

/* 
   Display the to-do list and the form 
*/
app.get('/todo', function (req, res) {
    res.render('todo.ejs', {
        todolist,
        clickHandler: "func1();"
    });
});

/* 
   Add an item to the to-do list 
*/
app.post('/todo/add/', function (req, res) {
    let newTodo = sanitizer.escape(req.body.newtodo);
    if (req.body.newtodo !== '') {
        todolist.push(newTodo);
    }
    res.redirect('/todo');
});

/* 
   Delete an item from the to-do list 
*/
app.get('/todo/delete/:id', function (req, res) {
    let id = req.params.id;
    if (id !== '') {
        todolist.splice(id, 1);
    }
    res.redirect('/todo');
});

/* 
   Get a single to-do item and render the edit page 
*/
app.get('/todo/:id', function (req, res) {
    let todoIdx = req.params.id;
    let todo = todolist[todoIdx];

    if (todo) {
        res.render('edititem.ejs', {
            todoIdx,
            todo,
            clickHandler: "func1();"
        });
    } else {
        res.redirect('/todo');
    }
});

/* 
   Edit an item in the to-do list 
*/
app.put('/todo/edit/:id', function (req, res) {
    let todoIdx = req.params.id;
    let editTodo = sanitizer.escape(req.body.editTodo);
    if (todoIdx !== '' && editTodo !== '') {
        todolist[todoIdx] = editTodo;
    }
    res.redirect('/todo');
});

/* 
   Redirect to the to-do list if the page requested is not found 
*/
app.use(function (req, res, next) {
    res.redirect('/todo');
});

app.listen(port, function () {
    console.log(`Todolist running on http://0.0.0.0:${port}`);
});

// Export app
module.exports = app;
