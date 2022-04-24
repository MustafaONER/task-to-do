import React from 'react';
import DeleteTask from './DeleteTask';

export default function AllTasks(props) {
  return (
    <div className='task-list'>
      <ul>
        {props.tasks &&
          props.tasks.map((task, index) => {
            return (
              <div className='values-card' key={index}>
                <div className={task.isDone ? 'done' : ''}>
                  <div className='values'>
                    <span>{task.title}</span>
                    <span>{task.description}</span>
                    <span>{task.deadline}</span>
                    <DeleteTask deleteTask={props.deleteTask} index={index} />
                  </div>
                </div>
              </div>
            );
          })}
      </ul>
    </div>
  );
}
