import { useState, useEffect } from 'react';
import './App.css';
import A from './components/A';
import B from './components/B';

function App() {
  const [value, setValue] = useState('');
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div className='wrapper'>
      <input value={value} onChange={(e) => setValue(e.target.value)} />

      <div className='post'>
        <A message={value} posts={posts} />
        <B message={value} posts={posts} />
      </div>
    </div>
  );
}

export default App;
