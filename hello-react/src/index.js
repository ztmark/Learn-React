import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class LikeButton extends Component {
    constructor() {
        super()
        this.state = { isLiked: false}
    }

    handleClickOnLikeButton() {
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    render() {
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked ? 'cacle' : 'like'}
            </button>
        )
    }
}


class Index extends Component {
    render() {
        return (
            <div>
                <LikeButton />
            </div>
        )
    }
}

class Header extends Component {
    render() {
        return (
            <div>
                <h1>React little book</h1>
            </div>
        )
    }
}

const lessons = [
    { title: 'Lesson 1: title', description: 'Lesson 1: description' },
    { title: 'Lesson 2: title', description: 'Lesson 2: description' },
    { title: 'Lesson 3: title', description: 'Lesson 3: description' },
    { title: 'Lesson 4: title', description: 'Lesson 4: description' }
]

class Lesson extends Component {
    render() {
        const { lesson } = this.props
        return (
            <div onClick={() => {console.log(`${this.props.index} - ${lesson.title}`)}}>
                <h1>{lesson.title}</h1>
                <p>{lesson.description}</p>
            </div>
        )
    }
}

class LessonList extends Component {

    render() {
        return (
            <div>
                {this.props.lessonList.map((l, i) => {
                    return <Lesson index={i} key={i} lesson={l} />
                })}
            </div>
        )
    }
}

class Input extends Component {
    render () {
      return (
        <div>
          <input onChange={this.props.handleChange} type='number' />
        </div>
      )
    }
  }
  
  class PercentageShower extends Component {
    render () {
      const show = this.props.data ?  Math.round(this.props.data * 10000) / 100 : ''
      return (
        <div>
          {show}%
        </div>
      )
    }
  }
  
  class PercentageApp extends Component {
    
    constructor() {
      super()
      this.state = {
        num: ''
      }
    }
    
    handleChange(event) {
        console.log(event.target.value)
      this.setState({
        num: event.target.value
      })
    }
    
    render () {
      return (
        <div>
          <Input handleChange={this.handleChange.bind(this)} />
          <PercentageShower data={this.state.num} />
        </div>
      )
    }
  }
  

ReactDOM.render(
    //<Index />,
    //<LessonList lessonList={lessons} />,
    <PercentageApp />,
    document.getElementById('root')
)
