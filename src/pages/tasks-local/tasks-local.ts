import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { TasksLocalService } from '../../providers/tasks-local-service';

@Component({
  selector: 'page-tasks-local',
  templateUrl: 'tasks-local.html'
})
export class TasksLocalPage {

  tasks: any[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public tasksService: TasksLocalService,
    public alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    this.tasksService.getAll()
    .then((tasks: any) =>{
      console.log('data', tasks);
      if(tasks){
        this.tasks = tasks;
      }
    })
    .catch(error =>{
      console.error(error);
    });
  }

  createTask(){
    // let prompt = this.alertCtrl.create({
    //   title: 'Nueva tarea',
    //   message: "Digite la nueva tarea",
    //   inputs: [
    //     {
    //       name: 'title',
    //       placeholder: 'Title'
    //     },
    //   ],
    //   buttons: [
    //     {
    //       text: 'Cancel',
    //       handler: data => {
    //         console.log('Cancel clicked');
    //       }
    //     },
    //     {
    //       text: 'Save',
    //       handler: data => {
    //         let newTask ={
    //           title: data.title,
    //           completed: false
    //         }
    //         this.tasksService.create( newTask )
    //         .then(resultTask =>{
    //           this.tasks.unshift( resultTask );
    //         })
    //         .catch(error =>{
    //           console.error( error );
    //         });
    //       }
    //     }
    //   ]
    // });
    // prompt.present();
  }

  onChange( task: any){
    // task.completed = !task.completed;
    // this.tasksService.update( task );
  }

  updateTask( task: any, index: any ){
    // let prompt = this.alertCtrl.create({
    //   title: 'Actualizar tarea',
    //   message: "Digite la nueva tarea",
    //   inputs: [
    //     {
    //       name: 'title',
    //       value: task.title,
    //       placeholder: 'Title'
    //     },
    //   ],
    //   buttons: [
    //     {
    //       text: 'Cancel',
    //       handler: data => {
    //         console.log('Cancel clicked');
    //       }
    //     },
    //     {
    //       text: 'Save',
    //       handler: data => {
    //         let updatetask = Object.assign({}, task);
    //         updatetask.title = data.title;
    //         this.tasksService.update( updatetask )
    //         .then(resultTask =>{
    //           this.tasks[index] = resultTask;
    //         })
    //         .catch(error =>{
    //           console.error( error );
    //         });
    //       }
    //     }
    //   ]
    // });
    // prompt.present();
  }

  deleteTask(task, index){
    // this.tasksService.delete(task.id)
    // .then(resultTask =>{
    //   this.tasks.splice(index, 1);
    // })
    // .catch(error =>{
    //   console.error( error );
    // });
  }

}

