import  React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment';


class CommentList extends Component {

    static propTypes = {
        comments: PropTypes.array,
        onDelete: PropTypes.func
    }

    static defaultProps = {
        comments: []
    }

    onDelete(index) {
        if (this.props.onDelete) {
            this.props.onDelete(index)
        }
    }

    render() {
        return (
            <div>
                {this.props.comments.map((comment, i) => <Comment onDelete={this.onDelete.bind(this)} index={i} comment={comment} key={i} />)}
            </div>
        )
    }
}

export default CommentList