import { Component, OnInit } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  standalone:false,
  selector: 'app-task-list-page',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
})
export class TaskListPage implements OnInit {
  tasks: any[] = []; 

  constructor(private firestore: Firestore) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    const tasksCollection = collection(this.firestore, 'tasks');
    collectionData(tasksCollection, { idField: 'id' }).subscribe((data) => {
      this.tasks = data; 
    });
  }
}
