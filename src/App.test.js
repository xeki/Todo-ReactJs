import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';
import Todo  from './Components/Todo';

describe('Functionality test suit', () => {
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('matches snapshot', () => {
  const todo = renderer.create(
    <Todo />
  );
  expect(todo.toJSON()).toMatchSnapshot();
});

it('should display initial state', () => {
  const todo = renderer.create(
    <Todo />
  );
  const instance = todo.getInstance();
  expect(instance.state.taskList.length).toBe(0);
});

});
