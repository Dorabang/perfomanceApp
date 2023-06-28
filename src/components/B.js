import React from 'react';

const Message = React.memo(({ message }) => {
  return <div>{message}</div>;
});

const ListItem = React.memo(({ post }) => {
  return (
    <li key={post.id}>
      <p>{post.title}</p>
    </li>
  );
});

const List = React.memo(({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <ListItem post={post} />
      ))}
    </ul>
  );
});

const B = ({ message, posts }) => {
  return (
    <div>
      <h1>B Components</h1>
      <Message message={message} />
      <List posts={posts} />
    </div>
  );
};

export default B;
