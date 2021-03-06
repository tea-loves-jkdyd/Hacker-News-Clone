import PropTypes from "prop-types";

const Comment = ({ comment }) => (
  <div className="comment">
    <div className="comment-user">{comment.user}</div>
    <div
      className="comment-content"
      dangerouslySetInnerHTML={{ __html: comment.content }}
    />
    {comment.comments && (
      <div className="nested-comments">
        {comment.hits.map((comment) => (
          <Comment  comment={comment} />
        ))}
      </div>
    )}
  </div>
);

Comment.propTypes = {
  comment: PropTypes.object,
};

export default Comment;