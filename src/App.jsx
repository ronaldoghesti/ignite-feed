import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Ronaldo Ghesti"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis distinctio animi cupiditate, modi sunt ipsum assumenda? Similique dolorum nobis quae placeat quo temporibus eius id, atque quod deleniti quidem ex."
          />
          <Post author="Diego Fernandes" content="Um novo post muito legal" />
        </main>
      </div>
    </>
  );
}
