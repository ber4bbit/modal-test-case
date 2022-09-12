export const validate = values => {
    const errors = {};
    const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    let validateEmail = reg.test(String(values.email));
    if (!values.email) {
        errors.email = 'Please fill in email.';
    } else if (values.email.length < 5) {
        errors.email = 'Address must be 5 characters or more.';
    } else if (validateEmail === false) {
        errors.email = 'Address must have a normal view.';
    }

    if (!values.firstName) {
        errors.firstName = 'Please fill in first name.'
    }

    if (!values.lastName) {
        errors.lastName = 'Please fill in last name.'
    }

    if (!values.product) {
        errors.product ='Please select product.'
    }
    return errors;
}