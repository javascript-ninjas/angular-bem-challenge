import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-withoutbem',
  templateUrl: './withoutbem.component.html',
  styleUrls: ['./withoutbem.component.scss']
})
export class WithoutbemComponent implements OnInit {
    newTodo: Todo = new Todo();

    constructor(private todoService: TodoService) {

    }

    addTodo() {
        this.todoService.addTodo(this.newTodo);
        this.newTodo = new Todo();
    }

    toggleTodoComplete(todo) {
        this.todoService.toggleTodoComplete(todo);
    }

    removeTodo(todo) {
        this.todoService.deleteTodoById(todo.id);
    }

    get todos() {
        return this.todoService.getAllTodos();
    }

    ngOnInit() {
    }

}
