import React, { Component } from 'react'

class Post extends Component {
    render () {
        return (
        <div>
            <p>{this.props.content}</p>
            <button onClick={() => this.props.refresh()}>刷新</button>
        </div>
        )
    }
}


const loadAndRefresh = (url) => {
    return (WPost) => {
          class WrappedPost extends Component {

            getData(url) {
                return new Promise(re => {
                    setTimeout(() => {
                        re(Math.random());
                      }, 1000);
                })
            }
  
              constructor() {
                  super()
                  this.state = {
                      content: '数据加载中...'
                  }
              }
  
              componentWillMount() {
                  this.init()
                  this._doRefresh()
              }
              
              _doRefresh() {
                this.getData(url).then((d) => {
                    this.setState({
                      content: d
                    })
                  })
              }
  
              init() {
                this.setState({
                      content: '数据加载中...'
                  })
              }
  
              onRefresh() {
                this.init()
                  this._doRefresh()
              }
  
              render() {
                  return <WPost {...this.props} content={this.state.content} refresh={this.onRefresh.bind(this)} />
              }
          }
          return WrappedPost
      }
  }
  

export default Post = loadAndRefresh('/post')(Post)