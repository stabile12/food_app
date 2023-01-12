import styles from '../styles/NavBar.module.css'
import Image from 'next/image';
import { useSelector } from 'react-redux';
import Link from 'next/link';

const NavBar = () => {

  const quantity = useSelector(state => state.cart.quantity);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src='/img/telephone.png' alt='' width='32' height='32' />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>CONTACT ME NOW!</div>
          <div className={styles.text}>22 98105 6202</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Link href='/'>
            <h1 className={styles.logo}>Estabile's</h1>
          </Link>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <Link href='/about'><li className={styles.listItem}>About</li></Link>
          
        </ul>
      </div>
      <Link href='/cart'>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src='/img/cart.png' alt='' width='35' height='35' />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default NavBar;