import styles from './Input.module.css'
import { useField } from 'formik'

export default function Input({ ...props }) {

    const [field, meta] = useField(props)

    return (
        <div className={styles.inputContainer}>
            <label className={styles.label}>{props.label}</label>
            <input
                {...field}
                {...props}
                className={`${styles.input} ${meta.touched && meta.error && styles.inputError}`}
            />
            <label className={styles.errorLabel} style={{ opacity: meta.touched && meta.error ? 100 : 0 }} >{meta.error}<span>&nbsp;&nbsp;</span></label>
        </div >
    )
}

// value - onChange - error - onBlur