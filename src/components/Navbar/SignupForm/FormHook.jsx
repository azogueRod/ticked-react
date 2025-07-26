import React from 'react'
import { useForm } from 'react-hook-form'
const FormHook = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const handleFormSubmit = (data) => {

        console.log("submit form", data);

    }
    const handleClear = () => {
        reset()
    }
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <label>Name<input {...register('name')} /></label><br/>
            <label>Age<input  {...register('age', { required: true })} /></label><br/>
            <label>Adress<input {...register('address', { required: true })} /></label><br/>
            <label>Phone<input {...register('phone', { required: true })} /></label><br/>
            <button type="submit">Submit</button>
            <button type="button" onClick={handleClear}>Clear</button>
        </form>
    )
}

export default FormHook
