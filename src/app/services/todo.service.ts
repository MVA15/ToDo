import { Injectable } from '@angular/core';
import {Todo} from "../models/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos = [
    new Todo('1', 'Go to Gym', false),
    new Todo('2', 'Go to Gym', false),
    new Todo('3', 'Go to Gym', false),
  ];
  constructor() { }
  getAll() {
    return this.todos;
  }
}
