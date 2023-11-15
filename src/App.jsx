import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="John Doe"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod deserunt, eum quibusdam non nisi molestiae adipisci beatae vel repellendus porro similique voluptate eveniet natus deleniti. Consectetur non pariatur temporibus ea."
          />
          <Post
            author="Leonardo Rodrigues"
            content="Um novo post muito legal"
          />
        </main>
      </div>
    </div>
  );
}
