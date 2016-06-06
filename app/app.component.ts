import {Component} from '@angular/core';
import {TodoListComponent} from './todo/todo-list.component';
import {Todo} from './todo/todo';
import {TodoFormComponent} from './todo/todo-form.component';

@Component({
    selector: 'todo-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    directives: [TodoListComponent, TodoFormComponent]
})
export class AppComponent { 
	title: string;
	todos: Todo[];

	constructor(){
		this.title = "Angular 2do!=)";
		this.todos = [];
	}

	onTodoAdded(todo: Todo) {
		this.todos.push(todo);
		//input.value = "";
	}

	/*addTodo(input: HTMLInputElement){
			let title = input.value;
			console.log('Добавление задачи ' + title);
			this.todos.push(title);
			input.value = "";
		}*/


	test(){
		console.log('Testing');
	}
}
