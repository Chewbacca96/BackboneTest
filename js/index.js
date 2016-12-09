var app = {};

app.Todo = Backbone.Model.extend({
   defaults: {
       title: '',
       completed: false
   }
});

app.TodoList = Backbone.Collection.extend({
    model: app.Todo,
    url: "http://api.moto.site/item"
});

app.todoList = new app.TodoList;
app.todoList.fetch();
console.log(JSON.stringify(app.todoList));



