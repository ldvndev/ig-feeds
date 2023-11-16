import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/ldvndev.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Leonardo Rodrigues</strong>
              <time title="11 de Maio às 8:13h" dateTime="2023-10-11 08:13:10">Cerca de 1h atrás</time>
            </div>

            <button title='Delete comment'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
             Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
