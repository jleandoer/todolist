import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  standalone: false,
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent {
  @Input() task: any;
  taskForm: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private fb: FormBuilder,
    private taskService: TaskService
  ) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', [Validators.required, this.futureDateValidator]],
      done: [false],
    });
  }

  ngOnInit() {
    if (this.task) {
      this.taskForm.patchValue(this.task);
    }
  }

  futureDateValidator(control: AbstractControl) {
    const selectedDate = new Date(control.value);
    const today = new Date();
    

    today.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);

    return selectedDate < today ? { pastDate: true } : null;
  }

  saveTask() {
    if (this.taskForm.invalid) return;

    if (this.task) {
      this.taskService.updateTask(this.task.id, this.taskForm.value);
    } else {
      this.taskService.addTask(this.taskForm.value);
    }

    this.closeModal();
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
