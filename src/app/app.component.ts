import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  standalone: true, // This indicates it's a standalone component
  imports: [RouterOutlet, TodoComponent], // Add TodoComponent here
  templateUrl: './app.component.html',
  styleUrl: ''
})
export class AppComponent {
  title = 'todo-app';
}
