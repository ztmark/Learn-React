import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {

    static propsTypes = {
        comment: PropTypes.object.isRequired,
        onDelete: PropTypes.func,
        index: PropTypes.number
    }

    constructor() {
        super()
        this.state = {
            timeString: ''
        }
    }

    componentWillMount() {
        this._updateTimeString()
        this._timer = setInterval(this._updateTimeString.bind(this), 5000)
    }

    componentWillUnmount() {
        clearInterval(this._timer)
    }

    _updateTimeString() {
        const comment = this.props.comment
        const duration = (+new Date() - comment.createdTime) / 1000
        this.setState({
            timeString: duration > 60 
                ? `${Math.round(duration / 60)} minutes ago` 
                : `${Math.round(Math.max(duration, 1))} seconds ago`
        })
    }

    handleDelete() {
        console.log(this.props.index)
        if (this.props.onDelete) {
            this.props.onDelete(this.props.index)
        }
    }

    _getProcessedContent(content) {
        return content.replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#039;")
                    .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
    }

    render() {
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{this.props.comment.username}</span>:
                </div>
                <p dangerouslySetInnerHTML={{
                    __html: this._getProcessedContent(this.props.comment.content)
                }}></p>
                <span className='comment-createdtime'>{this.state.timeString}</span>
                <span onClick={this.handleDelete.bind(this)} className='comment-delete'>Delete</span>
            </div>
        )
    }
}


export default Comment