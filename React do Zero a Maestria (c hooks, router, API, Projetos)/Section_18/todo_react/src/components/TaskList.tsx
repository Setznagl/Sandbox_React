import React from 'react'

import { ITask } from '../interfaces/ITask'
import styles from './TaskList.module.css'

interface Props {
  taskList: ITask[]
  handleDelete(id: number): void
  handleEdit(task: ITask):void
}

const TaskList = ({taskList , handleDelete , handleEdit}: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
          
          taskList.map((t => (
              <div key={t.id} className={styles.task}>
                <div className={styles.details}>
                  <h4>{t.title}</h4>
                  <p>Dificuldade:{t.difficulty}</p>
                </div>
                <div className={styles.actions}>
                  <i className="bi bi-pencil" onClick={() => handleEdit(t)}></i>
                  <i className="bi bi-trash" onClick={() => handleDelete(t.id)}></i>
                </div>
              </div>
            )
          ))
        ):(<p>Não tem</p>)
      }
    </>
  )
}

export default TaskList