import React, { Component } from 'react';

class Todo extends Component {
constructor(props) {
  super(props);
  this.state = { uncheckedTask: 0, taskList: [] };
}
handleNewTask = () => {
  const task = document.querySelector('#task');
  let { uncheckedTask } = this.state;
  if (task.value) {
    const taskList = [...this.state.taskList, {task: task.value, checked: false }];
    uncheckedTask ++;
    task.value = '';
    this.setState({ taskList, uncheckedTask });
  }
}

deleteTask = (index) => {
  const checked = this.state.taskList[index].checked;
  const uncheckedTask = checked ? this.state.uncheckedTask : this.state.uncheckedTask -1;
  const taskList = [ ...this.state.taskList];
  taskList.splice(index,1);
  this.setState({ taskList, uncheckedTask });
}
handleCheckbox = (e) =>{
  let uncheckedTask = this.state.uncheckedTask;
  let { taskList } = this.state;
  taskList[e.target.dataset.index].checked = e.target.checked;
  if (e.target.checked) {
    uncheckedTask--;
  } else {
    uncheckedTask ++;
  }
  this.setState({ uncheckedTask, taskList });
}
renderTasks = () => {
  return this.state.taskList.map((task, index) => {
    return (
      <li key={index}>
        <div className='list-checkbox'>
            <input data-index={index} type='checkbox' checked={task.checked} onChange={this.handleCheckbox}/>
        </div>
        <div className='list-taskname'>
            <span> {task.task} </span>
       </div>
       <div className='list-button'>
            <button className='delete-button' name='delete' onClick={() => this.deleteTask(index)}> X </button>
      </div>
     </li>
    );
  })
}
  render() {
    return (
      <div className='container'>
          <div className='counters'>
              <div className='counter-blocks'> Tasks: {this.state.taskList.length} </div>
              <div className='counter-blocks'> Unchecked Tasks: {this.state.uncheckedTask} </div>
          </div>
          <div className='controls'>
            <div className='control-block'>
                <input type='text' name='task' placeholder='Task' id='task' />
            </div>
            <div className='control-block'>
                <button className='create-button' name='submit' onClick={this.handleNewTask}> Create Task </button>
            </div>
          </div>
          {this.renderTasks()}
    </div>
    );
  }

}

export default Todo;
