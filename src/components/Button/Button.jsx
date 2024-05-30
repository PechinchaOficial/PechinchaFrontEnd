import styles from './Button.module.css'


function Button({text, color}) {
    return (
        <button className={styles.btn} id={color}>
           {text}
        </button>
    )
}

export default Button;