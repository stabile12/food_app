import styles from '../styles/About.module.css'
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 >About me</h1>
        <p>
          My name is Eduardo Estabile, I live in Brazil, in the State of Rio de janeiro.
          I'm a systems analysis student and I'm focusing on become a full stack developer.
          I made this project to fix my knowledge in React, Next.js and MongoDB. Hope you explore
          it and report any bug you may find. :)
        </p>
        <h1> Tech Stack</h1>
        <ul>
          <li>Next.js</li>
          <li>React</li>
          <li>Mongoose</li>
          <li>Axios</li>
          <li>Redux</li>
        </ul>
        <h1>My Links</h1>
        <ul className={styles.list}>
          <li>linkedin.com/in/eduardo-estabile99</li>
          <li>github.com/stabile12</li>
        </ul>
      </div>
    </div>
  )
}

export default About;