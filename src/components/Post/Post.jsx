import styles from "./Post.module.css";

const { post, header, avatar, author, authorInfo, content } = styles;

export function Post() {
  return (
    <article className={post}>
      <header className={header}>
        <div className={author} >
          <img src="https://github.com/lucylima.png" className={avatar} />
          <div className={authorInfo}>
            <strong>Lucy Lima</strong>
            <span>Web developer</span>
          </div>
        </div>
        <time dateTime="2024-11-21" title="21 de novembro de 2024">
          Publicado há 1h
        </time>
      </header>
      <div className={content}>
        <p> Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a>{' '}
          <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>{" "}
        </p>
      </div>
    </article>
  );
}
