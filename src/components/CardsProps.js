import styles from './CardsProps.module.css'

function CardsProps ({foto, nomecartao, credito, validade}) {
    return (
        <div className={styles.CardsPropsContainer}>
            <img scr={foto} alt={nomecartao}/>
            <h3 className={styles.CardsPropsContent}>Cartão: {nomecartao}</h3>
            <h2>Crédito: {credito}</h2>
            <p>Validade: {validade}</p>
        </div>
    )
}

export default CardsProps