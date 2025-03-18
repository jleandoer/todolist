import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from 'src/app/tasks/components/task-form/task-form.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskListComponent } from 'src/app/tasks/components/task-list/task-list.component'; // ✅ Importar TaskListComponent
import { AppComponent } from '../app.component';
@NgModule({
  declarations: [TaskFormComponent,TaskListComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [TaskFormComponent,TaskListComponent] 
})
export class SharedModule {}
