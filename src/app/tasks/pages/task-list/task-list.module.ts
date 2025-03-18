import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { TaskListPage } from './task-list.page';
import { SharedModule } from '../../../shared/shared.module';

const routes: Routes = [
  { path: '', component: TaskListPage }
];

@NgModule({
  declarations: [TaskListPage],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [TaskListPage]  
})
export class TaskListPageModule { }
