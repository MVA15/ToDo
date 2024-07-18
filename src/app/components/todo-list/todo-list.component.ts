import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {TodoService} from "../../services/todo.service";
import {Todo} from "../../models/todo";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todos: Todo[] = [];
  constructor(private todoService: TodoService) {

  }

  ngOnInit() {
    this.todos = this.todoService.getAll()
  }
}
