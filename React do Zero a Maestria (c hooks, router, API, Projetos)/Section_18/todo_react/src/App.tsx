import React, { useState } from 'react';

//components
import Header from './components/Header'
import Footer from './components/Footer'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Modal from './components/Modal';

//style
import styles from './App.module.css'

//interface
import { ITask } from './interfaces/ITask';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])
  const [taskToUpdate, setTaskToUpdate] = useState<ITask|null>(null);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter(t => {
        return t.id !== id
      })
    )
  }

  const hideOrShowModal = (display:boolean) => {
    const modal = document.querySelector("#modal")

    if(display){
      modal!.classList.remove("hide")
    }else{
      modal!.classList.add("hide")
    }
  }

  const editTask = (task: ITask):void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  };

  const updateTask = (id: number, title: string, difficulty: number) => {
    const updatedTask:ITask = {id , title, difficulty}

    const updatedItems = taskList.map((task)=> {
      return task.id === updatedTask.id ? updatedTask: task;
    })

    setTaskList(updatedItems)

    hideOrShowModal(false)
  }

  return (
    <div className="App">
      <Modal children={
        <TaskForm
          btnText="Editar Tarefa"
          taskList={taskList}
          task={taskToUpdate}
          handleUpdate={updateTask}
        />}
      />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você irá fazer?</h2>
          <TaskForm 
            btnText='Criar Tarefa' 
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList 
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={editTask}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
