import React from 'react';

import ToDoForm from './components/ToDoForm';
import ToDoItem from './components/ToDoItem';

import { useSelector, useDispatch } from 'react-redux';
import {
  replaceTodos,
  selectTodos,
  changeFilter,
  selectFilter,
  changeCreateParam,
  selectCreateParam,
  changeUpdateParam,
  selectUpdateParam,
  controlForm,
  selectForm
} from './features/reducer';

function App() {
  const dispatch = useDispatch();

  const todos = useSelector(selectTodos);
  const filter = useSelector(selectFilter);
  const createParam = useSelector(selectCreateParam);
  const updateParam = useSelector(selectUpdateParam);
  const form = useSelector(selectForm);

  function sortCreation(event) {
    dispatch(changeUpdateParam(null));
    const create = event.currentTarget;
    const update = create.nextElementSibling;

    create.classList.add('active');
    update.classList.remove('active');

    create.classList.remove('newest');
    create.classList.remove('oldest');
    update.classList.remove('newest');
    update.classList.remove('oldest');

    let array = [...todos];
    array.sort((a, b) => {
      let x = Date.parse(a.creationDate);
      let y = Date.parse(b.creationDate);
      if (createParam === null || createParam === 'oldest') {
        dispatch(changeCreateParam('newest'));
        create.classList.add('newest');
        return y - x;
      } else {
        dispatch(changeCreateParam('oldest'));
        create.classList.add('oldest');
        return x - y;
      }
    });

    dispatch(replaceTodos(array));
  }

  function sortUpdate(event) {
    dispatch(changeCreateParam(null));

    const update = event.currentTarget;
    const create = update.previousElementSibling;

    update.classList.add('active');
    create.classList.remove('active');

    update.classList.remove('newest');
    update.classList.remove('oldest');
    create.classList.remove('newest');
    create.classList.remove('oldest');

    let array = [...todos];
    array.sort((a, b) => {
      let x = Date.parse(a.updateDate);
      let y = Date.parse(b.updateDate);
      if (updateParam === null || updateParam === 'oldest') {
        dispatch(changeUpdateParam('newest'));
        update.classList.add('newest');
        return y - x;
      } else {
        dispatch(changeUpdateParam('oldest'));
        update.classList.add('oldest');
        return x - y;
      }
    });

    dispatch(replaceTodos(array));
  }

  function showForm() {
    dispatch(controlForm(true));
  }

  return (
    <div className='app'>
      <div className='showToDoForm'>
        <h1>
          Todo List
        </h1>
        <button
          className='showToDoFormButton'
          onClick={showForm}>
          + Add New Task
        </button>
      </div>
      <div className='control'>
        <div className='filter'>
          <span>
            Filter by:
          </span>
          <button onClick={() => dispatch(changeFilter(false))} className={(filter === false) ? 'active' : ''}>
            All Tasks
          </button>
          <button onClick={() => dispatch(changeFilter('1'))} className={(filter === '1') ? 'active' : ''}>
            Open Tasks
          </button>
          <button onClick={() => dispatch(changeFilter('2'))} className={(filter === '2') ? 'active' : ''}>
            In Progress Tasks
          </button>
          <button onClick={() => dispatch(changeFilter('3'))} className={(filter === '3') ? 'active' : ''}>
            Done Tasks
          </button>
        </div>
        <div className='sort'>
          <span>
            Sort by:
          </span>
          <button onClick={sortCreation}>
            Creation Date
          </button>
          <button onClick={sortUpdate}>
            Update Date
          </button>
        </div>
      </div>
      {todos.map((todo) => {
        if (filter === false) {
          return (
            <ToDoItem
              key={todo.id}
              todo={todo}
            />
          )
        } else {
          if (todo.status === filter) {
            return (
              <ToDoItem
                key={todo.id}
                todo={todo}
              />
            )
          }
        }
      })}
      {(form) ? 
      <div className='wrapper'>
        <ToDoForm />
      </div> 
      : null}
    </div>

  );
}

export default App;
