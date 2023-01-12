import styles from '../styles/PizzaList.module.css';
import PizzaCard from './PizzaCard';

const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>A MELHOR DA CIDADE!</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => ( // pega a lista de produtos e exibe
          <PizzaCard key={pizza._id} pizza={pizza}/> // a prop pizza passa as informações do produto pro componente PizzaCard

        ))}

        
      </div>
    </div>
  )
}

export default PizzaList;