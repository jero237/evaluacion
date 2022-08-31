import styles from './Button.module.css'

export default function Button({ children, disabled, type }) {
    return (
        <button className={styles.button} disabled={disabled} type={type} >{children}</button>
    )
}