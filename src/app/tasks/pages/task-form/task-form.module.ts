import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { TaskFormPage } from './task-form.page';
import { SharedModule } from '../../../shared/shared.module';

const routes: Routes = [
  { path: '', component: TaskFormPage }
];

@NgModule({
  declarations: [TaskFormPage],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [TaskFormPage] 
})
export class TaskFormPageModule { }
