const formValidation = values => {

    const errors = {}
    if (!values.name) errors.name = 'Required'
    else if (values.name.length < 2) errors.name = 'Must be at least 3 characters long'

    if (!values.email) errors.email = 'Required'
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) errors.email = 'Invalid email adress'

    if (!values.password) errors.password = 'Required'
    else if (values.password.length < 8) errors.password = 'Must be at least 8 characters long'

    return errors
}

export default formValidation