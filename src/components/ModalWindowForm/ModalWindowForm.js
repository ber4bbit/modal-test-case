import React, {useState} from 'react';
import {Button, FormControl, FormHelperText} from "@mui/material";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Switch from '@mui/material/Switch';

import {useFormik} from "formik";
import {validate} from "../../generalFunctions/validate";

export default function ModalWindowForm() {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            product: '',
            totalPrice: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    const [state, setState] = useState({
        feature1: false,
        feature2: false
    });
    const featureHandleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked
        })
    }

    return (
        <form onSubmit={ formik.handleSubmit }>
            <TextField
                error={formik.touched.firstName && formik.errors.firstName}
                helperText={formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : false}
                name="firstName"
                variant="outlined"
                label="First Name *"
                margin="dense"
                fullWidth
                onChange={formik.handleChange}
                value={formik.values.firstName}
                onBlur={formik.handleBlur}/>
            <TextField
                error={formik.touched.lastName && formik.errors.lastName}
                helperText={formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : false}
                name="lastName"
                variant="outlined"
                label="Last Name *"
                margin="dense"
                fullWidth
                onChange={formik.handleChange}
                value={formik.values.lastName}
                onBlur={formik.handleBlur}/>
            <TextField
                error={formik.touched.email && formik.errors.email}
                helperText={formik.touched.email && formik.errors.email ? formik.errors.email : false}
                name="email"
                variant="outlined"
                label="user@gmail.com *"
                margin="dense"
                fullWidth
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}/>
            <div className="productContainer">
                <p>Product type * </p>
                <FormControl className="productContainer__select" error={formik.touched.product && formik.errors.product}>
                    <InputLabel className="labelText">Product</InputLabel>
                    <Select name="product" onChange={formik.handleChange} id="errorSelect">
                        <MenuItem value="">None</MenuItem>
                        <MenuItem value={50}>Product $50</MenuItem>
                        <MenuItem value={100}>Product $100</MenuItem>
                        <MenuItem value={300}>Product $300</MenuItem>
                    </Select>
                    {formik.touched.product && formik.errors.product ? <FormHelperText>Please select product type.</FormHelperText> : null}
                </FormControl>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '24px'
            }}>
                <p>Additional feature for $100</p>
                <Switch checked={state.feature1} onChange={featureHandleChange} name="feature1"/>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <p>Additional feature for $200</p>
                <Switch checked={state.feature2} onChange={featureHandleChange} name="feature2"/>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <p>Total price</p>
                {state.feature1 && state.feature2 ? <p>${formik.values.product + 300}</p>
                    : state.feature1 ? <p>${formik.values.product + 100}</p> : state.feature2
                        ? <p>${formik.values.product + 200}</p> : <p>${formik.values.product + 0}</p>}
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '24px'
            }}>
                <Button variant="contained" type="submit">Send form</Button>
            </div>
        </form>
    )
}