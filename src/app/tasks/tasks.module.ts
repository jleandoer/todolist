import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { TaskFormPageModule } from './pages/task-form/task-form.module';
import { TaskListPageModule } from './pages/task-list/task-list.module'; 

import { TasksRoutingModule } from './tasks-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    TasksRoutingModule,
    TaskListPageModule, 
    TaskFormPageModule  
  ]
})
export class TasksModule { }
