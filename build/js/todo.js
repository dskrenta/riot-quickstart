riot.tag2('todo', '<h1>Todo</h1> <div each="{items}"> <h3>{title}</h3> <button class="btn btn-default" onclick="{parent.remove}">Remove</button> </div> <form onsubmit="{add}"> <input type="text" class="form-input" placeholder="todo item" name="item"> <button class="btn btn-primary input-group-btn">Add Item</button> </form>', 'todo div,[riot-tag="todo"] div,[data-is="todo"] div{ padding-bottom: 10px; }', '', function(opts) {
    this.items = [{title: 'homework'}, {title: 'wash clothes'}];

    this.add = function (event) {
      this.items.push({title: this.item.value});
      this.item.value = '';
    }.bind(this)

    this.remove = function (event) {
      const item = event.item;
      const index = this.items.indexOf(item);
      this.items.splice(index, 1);
    }.bind(this)

});
