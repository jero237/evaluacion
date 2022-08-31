import Swal from 'sweetalert2'

const showAlert = (title, text, type) => {

    Swal.fire({
        title,
        text,
        icon: type
    })

}

export default showAlert