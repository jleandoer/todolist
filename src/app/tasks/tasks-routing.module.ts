import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListPage } from './pages/task-list/task-list.page';
import { TaskFormPage } from './pages/task-form/task-form.page';

const routes: Routes = [
  { path: '', component: TaskListPage }, 
  { path: 'form', component: TaskFormPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
