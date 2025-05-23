import { Component } from '@angular/core';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo', // This is the HTML tag you'll use <app-todo></app-todo>
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent {
  // Similar to React's state
  todos: Todo[] = [
    { id: 1, text: 'Learn Angular', completed: false },
    { id: 2, text: 'Build a todo app', completed: false }
  ];
  newTodoText = '';
  myName = 'Hassaan';

  // Methods for our actions
  addTodo() {
    if (this.newTodoText.trim()) {
      const newTodo: Todo = {
        id: this.todos.length + 1,
        text: this.newTodoText,
        completed: false
      };
      this.todos = [...this.todos, newTodo]; // Immutable update like React
      this.newTodoText = '';
    }
  }

  toggleTodo(id: number) {
    this.todos = this.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}