import React, { useState } from 'react';
import styles from './Comments.module.css';
import Loading from '../loading/Loading';
import P from '../ptag/P';
import Select from '../select/Select';
import Comment from '../comment/Comment';

const Comments = ({ comments, loading }) => {
  const [sortBy, setSortBy] = useState('likes');

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  const sortedComments = [...comments].sort((a, b) => {
    if (sortBy === 'likes') {
      return a.likes - b.likes;
    } else {
      return new Date(a.date) - new Date(b.date);
    }
  });

  if (comments.length === 0) {
    return (
      <>
        <P className={styles.noCommentsText}>No comments yet</P>
      </>
    );
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className={styles.header}>
            <P className={styles.title}>{comments.length > 0 && `${comments.length} comments`}</P>
            <Select
              options={['date', 'likes']}
              defaultValue={sortBy}
              onChange={handleSortChange}
              title="Sort by: "
            />
          </div>
          {sortedComments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </>
      )}
    </>
  );
};

export default Comments;
