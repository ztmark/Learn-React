import React, { Component } from "react";
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {

    constructor() {
        super()
        this.state = {
            comments: []
        }
    }

    componentWillMount() {
        this._loadComments()
    }

    _loadComments() {
        const comments = localStorage.getItem('comments')
        if (comments) {
            this.setState({
                comments: JSON.parse(comments)
            })
        }
    }

    _saveComments() {
        localStorage.setItem('comments', JSON.stringify(this.state.comments))
    }

    handleSubmitComment(comment) {
        if (!comment) return
        if (!comment.username) return alert('please input username')
        if (!comment.content) return alert('please input content')
        this.state.comments.push(comment)
        this.setState({
            comments: this.state.comments
        })
        this._saveComments()
    }

    handleOnDelete(index) {
        this.state.comments.splice(index, 1)
        this.setState({
            comments: this.state.comments
        })
        this._saveComments()
    }

    render() {
        return (
            <div className='wrapper'>
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
                <CommentList onDelete={this.handleOnDelete.bind(this)} comments={this.state.comments} />
            </div>
        )
    }
}

export default CommentApp