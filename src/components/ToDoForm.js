import { useSelector, useDispatch } from 'react-redux';
import {
  addTodos,
  changeFilter,
  controlForm,
  createTitle,
  selectTitle,
  createTask,
  selectTask
} from '../features/reducer';

function ToDoForm() {
    const dispatch = useDispatch();

    const title = useSelector(selectTitle);
    const task = useSelector(selectTask);

    function changeTitle(event) {
        dispatch(createTitle(event.currentTarget.value));
    }

    function changeTask(event) {
        dispatch(createTask(event.currentTarget.value));
    }

    function addTask(event) {
        event.preventDefault();
        const newItem = {
            id: Math.random().toString(36).substring(2, 12),
            title:  (title === '') ? 'New task' : title,
            task: (task === '') ? 'New task' : task,
            status: '1',
            creationDate: new Date().toString(),
            updateDate: new Date().toString(),
          }
      
        dispatch(addTodos(newItem));
        dispatch(changeFilter(false));
        dispatch(controlForm(false));
        dispatch(createTitle(''));
        dispatch(createTask(''));
        
        document.querySelectorAll('.sort button').forEach(el => el.classList = []);
    }

    return (
        <div className='formPopup'>
            <h2>
                Add new task:
            </h2>
            <form className='toDoForm' onSubmit={addTask}>
                <label>
                    Title
                </label>
                <input
                    value={title}
                    type='text'
                    onChange={changeTitle}
                    placeholder="Title"
                />
                <label>
                    Description
                </label>
                <textarea
                    value={task}
                    type='text'
                    onChange={changeTask}
                    placeholder='Description'
                />
                <button>Add Task</button>
            </form>
            <button
                className='closeToDoFormButton'
                onClick={() => dispatch(controlForm(false))}>
                ×
            </button>
        </div>
    )
}

export default ToDoForm;