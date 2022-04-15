import React from 'react'
import './FormStyle.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const initialValues = {
    Name: '',
    Email: '',
    Channel: '',
    Color: '',
    Gander: ''
}

const onSubmit = values => {
    alert(values.Name + values.Email + values.Channel + values.Color + values.Gander)
}
const validationSchema = Yup.object({
    Name: Yup.string().required('Name is Required'),
    Email: Yup.string().email('Ivalid Format').required('Email is Required'),
    Channel: Yup.string().required('Channel Name is Required'),
    Color: Yup.string().required('Color Name is Required'),
    Gander: Yup.string().required('Gander is Required')
})
function YoutubeForm() {
    return (
        <div className="container">
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
                <Form>
                    <div className="form-group">
                        <label>Name</label>
                        <Field type="text" placeholder="Name"
                            className="form-control"
                            name='Name' />
                        <ErrorMessage name='Name' component="div" className="ErrorMessage" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <Field type="email" placeholder="Email" className="form-control " name='Email' />
                        <ErrorMessage name='Email' component="div" className="ErrorMessage" />
                    </div>
                    <div className="form-group">
                        <label>Channel</label>
                        <Field type="text" placeholder="Channel" className="form-control" name='Channel' />
                        <ErrorMessage name='Channel' component="div" className="ErrorMessage" />
                        <div className="form-group">
                            <label>ColorName</label>
                            <Field as="select" name="Color" className="form-control">
                                <option value="Select" selected>Select AnyOne</option>
                                <option value="Red">Red</option>
                                <option value="Green">Green</option>
                                <option value="Blue">Blue</option>
                            </Field>
                            <ErrorMessage name="Color" component="div" className="ErrorMessage" />
                        </div>
                    </div>
                    <div className="form-group">
                        <p>Gander</p>
                        <label >
                            <Field type="radio" value="Male" className="form-check-input" name="Gander" />Male
                        </label><br />
                        <label>
                            <Field type="radio" value="Female" className="form-check-input" name="Gander" />Female
                        </label>
                        <ErrorMessage name="Gander" component="div" className="ErrorMessage" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default YoutubeForm;