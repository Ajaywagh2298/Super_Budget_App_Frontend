import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent {
  title = 'My-List';

  nextId = 4;
  todos = [
    { id: 1, label: 'Bring Milk', done: false },
    { id: 2, label: 'Soya oil', done: false},
    { id: 3, label: 'Everest Masala', done: true},
  ];

  // tslint:disable-next-line:typedef
  delete(todo: { id: number; }) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
  }

  // @ts-ignore
  add(newTodoLabel) {
    const newTodo = {
      id: this.nextId,
      temp : this.nextId,
      label: newTodoLabel,
      done: false
    };
    if (newTodo.label.trim() !== '') {
      this.todos.push(newTodo);
      this.nextId++;
    }else {
      alert('Insert Something into list');
    }
  }

  // @ts-ignore
  toggle(todo) {
    todo.done = !todo.done;
  }
}
