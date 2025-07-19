import { NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


export interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, NgForOf, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  todoList: TodoItem[] = [];
  newTask: string = '';

  addTask():void {
    if (this.newTask.trim() !== '') { 
      const newTodoItem : TodoItem = {
        id: Date.now(),
        title: this.newTask,
        completed: false
      }
      this.todoList.push(newTodoItem);
      console.log('New task added:', this.todoList);
      this.newTask = '';
    }
  }
  removeTask(id: number): void {
    this.todoList = this.todoList.filter(item => item.id !== id);
  }
  toggleCompleted(index: number) {
    this.todoList[index].completed = !this.todoList[index].completed;
  }
}
