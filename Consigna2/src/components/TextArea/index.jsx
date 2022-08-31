import styles from './TextArea.module.css'
import { useField } from 'formik'

export default function TextArea({ label, ...props }) {

    const [field] = useField(props)

    return (
        <div className={styles.inputContainer}>
            <label className={styles.label}>{label}</label>
            <textarea {...props} {...field} className={styles.input} />
        </div>
    )
}