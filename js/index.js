/*'use strict';
var app = {}; // create namespace for our app

//--------------
// Models
//--------------
app.Todo = Backbone.Model.extend({
    defaults: {
        title: '',
        completed: false
    }
});

//--------------
// Collections
//--------------
app.TodoList = Backbone.Collection.extend({
    model: app.Todo,
    localStorage: new Store("backbone-todo")
});

// instance of the Collection
app.todoList = new app.TodoList();

//--------------
// Views
//--------------

app.TodoView = Backbone.View.extend({
    tagName: 'li',
    template: _.template($('#item-template').html()),

    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        return this; // enable chained calls
    }
});

app.AppView = Backbone.View.extend({
    el: '#todoapp',

    initialize: function () {
        this.input = this.$('#new-todo');
        app.todoList.on('add', this.addAll, this);
        app.todoList.on('reset', this.addAll, this);
        app.todoList.fetch(); // Loads list from local storage
    },

    events: {
        'keypress #new-todo': 'createTodoOnEnter'
    },

    createTodoOnEnter: function(e){
        if ( e.which !== 13 || !this.input.val().trim() ) { // ENTER_KEY = 13
            return;
        }
        app.todoList.create(this.newAttributes());
        this.input.val(''); // clean input box
    },

    addOne: function(todo){
        var view = new app.TodoView({model: todo});
        $('#todo-list').append(view.render().el);
    },

    addAll: function(){
        this.$('#todo-list').html(''); // clean the todo list
        app.todoList.each(this.addOne, this);
    },

    newAttributes: function(){
        return {
            title: this.input.val().trim(),
            completed: false
        }
    }
});

//--------------
// Initializers
//--------------

app.appView = new app.AppView();*/


'use strict';

var app = {};

app.TodoModel = Backbone.Model.extend({
    defaults: {
        mark_id: null,
        type_id: null,
        code: null,
        model: '',
        capacity: null,
        year_start: null,
        yeat_end: null,
        frame: '',
        raw_model: '',
        deleted_on: null
    }
});

app.TodoCollection = Backbone.Collection.extend({
    model: app.TodoModel,
    url: "http://api.moto.site/bike"
});

app.todoList = new app.TodoCollection;

var some = app.todoList.fetch();
var someF = some.responseJSON;