import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Header from './Header'
import Content from './Content'
import { Provider } from 'react-redux'
import './index.css'


class Index extends Component {

    render() {
        return (
            <div>
                <Header />
                <Content />
            </div>
        )
    }
}

const themeReducer = (state, action) => {
    if (!state) return {
        themeColor: 'red'
    }
    switch (action.type) {
        case 'CHANGE_COLOR':
            return { ...state, themeColor: action.themeColor }
        default:
            return state
    }
}

const store = createStore(themeReducer)


ReactDOM.render(
    <Provider store={store}>
        <Index />
    </Provider>, document.getElementById('root'));

