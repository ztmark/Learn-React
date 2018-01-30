

function renderApp(newAppState, oldAppState = {}) {
    if (newAppState === oldAppState) {
        return
    }
    console.log('render app')
    renderTitle(newAppState.title, oldAppState.title)
    renderContent(newAppState.content, oldAppState.content)
}

function renderTitle(newTitle, oldTitle = {}) {
    if (newTitle === oldTitle) {
        return
    }
    console.log('render title')
    const titleDOM = document.getElementById('title')
    titleDOM.innerHTML = newTitle.text
    titleDOM.style.color = newTitle.color
}

function renderContent(newContent, oldContent = {}) {
    if (newContent === oldContent) {
        return
    }
    console.log('render content')
    const contentDOM = document.getElementById('content')
    contentDOM.innerHTML = newContent.text
    contentDOM.style.color = newContent.color
}

function stateChanger(state, action) {
    if (!state) {
        state = {
            title: {
                text: 'React.js 小书',
                color: 'red',
            },
            content: {
                text: 'React.js 小书内容',
                color: 'blue'
            }
        }
    }
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            const n1 = {
                ...state,
                title: {
                    ...state.title,
                    text: action.text
                }
            }
            return n1
        case 'UPDATE_TITLE_COLOR':
            const n = {
                ...state,
                title: {
                    ...state.title,
                    color: action.color
                }
            }
            return n
        default:
            return state
    }
}

function createStore(reducer) {
    let state = null
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
        const old = state
        state = reducer(state, action)
        listeners.forEach((listener) => listener())
    }
    dispatch({})
    return { getState, dispatch, subscribe }
}

const store = createStore(stateChanger)
let oldState = store.getState()
store.subscribe(() => {
    const newState = store.getState()
    renderApp(newState, oldState)
    oldState = newState
})

renderApp(store.getState()) // 首次渲染页面
store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' }) // 修改标题文本
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改标题颜色
