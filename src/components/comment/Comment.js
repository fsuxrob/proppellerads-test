import React from 'react';
import styles from './Comment.module.css';
import P from '../ptag/P';
import Button from '../button/Button';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const today = new Date();

  if (date.toDateString() === today.toDateString()) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  } else {
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })}`;
  }
};

const Comment = ({ comment }) => {
  return (
    <div className={styles.comment}>
      <img src={comment.img} alt="Аватар" className={styles.img} width="56" height="56" />
      <div className={styles.content}>
        <span className={styles.author}>{comment.author}</span>
        <P>{comment.comment}</P>
      </div>

      <div className={styles.meta}>
        <Button className={styles.likes}>{comment.likes > 0 && comment.likes} Likes</Button>
        <Button className={styles.reply}>Reply</Button>
        <span className={styles.date}>{formatDate(comment.date)}</span>
      </div>
    </div>
  );
};

export default Comment;
