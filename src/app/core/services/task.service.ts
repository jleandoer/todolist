import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Task {
  id?: string;
  title: string;
  description: string;
  completed: boolean;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksCollection = collection(this.firestore, 'tasks');

  constructor(private firestore: Firestore) {}

  // 🔄 Obtiene las tareas en tiempo real (Detecta cambios automáticamente)
  getTasks(): Observable<Task[]> {
    return collectionData(this.tasksCollection, { idField: 'id' }) as Observable<Task[]>;
  }

  // ➕ Agregar una tarea nueva
  addTask(task: Task) {
    return addDoc(this.tasksCollection, task);
  }

  // ❌ Eliminar una tarea
  deleteTask(id: string) {
    return deleteDoc(doc(this.firestore, `tasks/${id}`));
  }

  // ✅ Actualizar una tarea
  updateTask(id: string, data: Partial<Task>) {
    return updateDoc(doc(this.firestore, `tasks/${id}`), data);
  }
}

