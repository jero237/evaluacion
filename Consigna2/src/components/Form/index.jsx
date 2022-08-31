import styles from './Form.module.css'
import Input from "../Input";
import Button from '../Button';
import { Form, Formik } from 'formik'
import formValidation from '../../validations/form';
import TextArea from '../TextArea';
import showAlert from '../../utils/showAlert';

export default function RegisterForm() {

    return (
        <Formik
            initialValues={{ name: '', email: '', password: '', textArea: '' }}
            validate={formValidation}
            onSubmit={values => showAlert("Form validated successfully", JSON.stringify(values), "success")}
        >
            <Form className={styles.Form}>
                <h3 className={styles.title}>Form</h3>
                <Input placeholder="Woody Allen" name="name" label="Name" />
                <Input placeholder="contoso@domain.com" name="email" label="Email" />
                <Input placeholder="Provide a password" name="password" type="password" autoComplete="new-password" label="Password" />
                <TextArea placeholder="Write whatever you want :)" name='textArea' label='Text Area' />
                <Button type="submit" >Submit</Button>
            </Form>
        </Formik>
    )
}