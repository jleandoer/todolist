import { Component } from '@angular/core';
import { TaskService, Task } from 'src/app/core/services/task.service';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  standalone:false,
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  tasks$: Observable<Task[]>; 

  constructor(private taskService: TaskService, private modalCtrl: ModalController) {
    this.tasks$ = this.taskService.getTasks(); 
  }

 
  toggleTask(task: Task) {
    const updatedTask = { ...task, completed: !task.completed };
    this.taskService.updateTask(task.id!, { completed: updatedTask.completed }).then(() => {
      console.log(`Tarea ${updatedTask.completed ? 'completada' : 'pendiente'}`);
    }).catch(error => {
      console.error('Error actualizando tarea:', error);
    });
  }

 
  deleteTask(id: string) {
    this.taskService.deleteTask(id);
  }

  
  async openTaskForm(task?: Task) {
    const modal = await this.modalCtrl.create({
      component: TaskFormComponent,
      componentProps: { task },
    });
    await modal.present();
  }
}
