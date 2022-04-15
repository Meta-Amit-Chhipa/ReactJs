import React from 'react'
import './FormStyle.css'
import {useFormik} from 'formik'
import * as Yup from 'yup'

const initialValues={
    Name:'',
    Email:'',
    Channel:'',
    FrameWork:''
}

const onSubmit=values=>{
    alert(values.Name+values.Email+values.Channel)
}

// const validate=values=>{
//     let errors={}
//     if(!values.Name)
//         errors.Name='Name is Required'
//     if(!values.Email)
//         errors.Email='Email is Required'
//     else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.Email))
//         errors.Email='Invalid Format'
//     if(!values.Channel)
//         errors.Channel='Channel is Required'
//     return errors
// }
const validationSchema=Yup.object({
    Name:Yup.string().required('Name is Required'),
    Email:Yup.string().email('Ivalid Format').required('Email is Required'),
    Channel:Yup.string().required('Channel Name is Required')
})
function YoutubeForm(){
    const formik=useFormik({
        initialValues,
        onSubmit,
        // validate,
        validationSchema
    })
    console.log(formik.errors)
    return( 
        <div className="container">
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Name" 
                className="form-control"
                name='Name' 
                value={formik.values.Name} 
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                />
                {formik.errors.Name && formik.touched.Name ? <div className='ErrorMessage'>{formik.errors.Name}</div>:null}
                </div>
                <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Email" className="form-control " name='Email'
                 value={formik.values.Email} 
                 onBlur={formik.handleBlur}
                 onChange={formik.handleChange}
                 />
                {formik.errors.Email && formik.touched.Email ? <div className='ErrorMessage'>{formik.errors.Email}</div>:null}
                </div>
                <div className="form-group">
                <label>Channel</label>
                <input type="text" placeholder="Channel" className="form-control" name='Channel'
                 value={formik.values.Channel}
                 onBlur={formik.handleBlur}
                onChange={formik.handleChange}/>
                {formik.errors.Channel && formik.touched.Channel ? <div className='ErrorMessage'>{formik.errors.Channel}</div>:null}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default YoutubeForm;