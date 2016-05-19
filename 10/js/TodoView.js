
(function($, app){


  var $listDom = $('#todoList');
  var todoTemplateHtml = $('#todoTemplate').html();

  app.view ={

    addTodo: function(event){
      var $field = $(event.currentTarget);
      var fieldValue = $field.val();
      var isValue = $field.checked;

      if (event.keyCode !== 13 || fieldValue === "") {

        console.log('event stop');
        return false;
      }

      $field.val('');

      var todo = $.extend({}, app.model, {
        id: app.util.uniqId(),
        title: fieldValue,
        isCheck: false
      });

      //console.log('new​ todo.model:', todo);
      app.collection.add(todo);
    },
    render: function(){
      $listDom.html(tmpl( todoTemplateHtml, { todos: app.collection.toJSON() } ));
    }
  };

  app.$wrap.on('addCollection', app.view.render);
  app.$wrap.on('removeCollection', app.view.render);
  app.$wrap.on('changedCollection', app.view.render);


})(jQuery, Todo);

