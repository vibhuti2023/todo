/*const express = require('express'),
    bodyParser = require('body-parser'),
    // In order to use PUT HTTP verb to edit item
    methodOverride = require('method-override'),
    // Mitigate XSS using sanitizer
    sanitizer = require('sanitizer'),
    app = express(),
    port = 8000

app.use(bodyParser.urlencoded({
    extended: false
}));
// https: //github.com/expressjs/method-override#custom-logic
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        let method = req.body._method;
        delete req.body._method;
        return method
    }
}));


let todolist = [];
*/
/* The to do list and the form are displayed */
/*app.get('/todo', function (req, res) {
        res.render('todo.ejs', {
            todolist,
            clickHandler: "func1();"
        });
    })

    /* Adding an item to the to do list */ 
  /*  .post('/todo/add/', function (req, res) {
        // Escapes HTML special characters in attribute values as HTML entities
        let newTodo = sanitizer.escape(req.body.newtodo);
        if (req.body.newtodo != '') {
            todolist.push(newTodo);
        }
        res.redirect('/todo');
    })

    /* Deletes an item from the to do list */
  /*  .get('/todo/delete/:id', function (req, res) {
        if (req.params.id != '') {
            todolist.splice(req.params.id, 1);
        }
        res.redirect('/todo');
    })

    // Get a single todo item and render edit page
    .get('/todo/:id', function (req, res) {
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
    })

    // Edit item in the todo list 
    .put('/todo/edit/:id', function (req, res) {
        let todoIdx = req.params.id;
        // Escapes HTML special characters in attribute values as HTML entities
        let editTodo = sanitizer.escape(req.body.editTodo);
        if (todoIdx != '' && editTodo != '') {
            todolist[todoIdx] = editTodo;
        }
        res.redirect('/todo');
    })
    /* Redirects to the to do list if the page requested is not found 
    .use(function (req, res, next) {
        res.redirect('/todo');
    })

    .listen(port, function () {
        // Logging to console
        console.log(`Todolist running on http://0.0.0.0:${port}`)
    });
// Export app
module.exports = app;
*//*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

