import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

import Todolist from './components/todos/Todolist'
import Header from './components/Header'


const middleware = [thunk]
const mockStore = configureMockStore(middleware)
const store = mockStore({
      todos: [],
      filterTodos: []
    })

describe('App component test', () => {
  it('App component has Todolist', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.containsAllMatchingElements([
      <Header />,
      <Todolist />
    ])).to.be.true
  })

  it('Renders with store as props', (done) => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    )
    expect(wrapper).to.have.length(1)
    done()
  })
})

