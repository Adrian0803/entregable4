import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';


const UsersForm = ({getUsers, userSelected}) => {


    const{handleSubmit, register, reset} = useForm();

    useEffect (() => {
        if(userSelected){

            reset(userSelected)
        } else {
            reset({
                id:"",
                email:"",
                password:"",
                first_name:"",
                last_name:"",
                birthday:""
            })
        }
    },[userSelected])

    const submit = (data) => {
        console.log(data);

        if(userSelected){
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, data)
                .then(() => {
                    getUsers()
                    deselecUser();
                })
                .catch(error => console.log(error.response?.data))
        }
        else{
            axios.post(`https://users-crud1.herokuapp.com/users/`, data)
                .then(() => getUsers())
                .catch(error => console.xlog(error.response?.data));
        }
    }


    


    return (
        <div className='e'>
            <form 
                className='user-form' 
                onSubmit={handleSubmit(submit)}>

                    
                <div className="imput-container">
                    <label htmlFor="email">Email</label>
                    <input {...register("email")} type="email" id='email' />
                </div>

                <div className="imput-container">
                    <label htmlFor="password">Password</label>
                    <input {...register("password")} type="password" id='password' />
                </div>

                <div className="imput-container">
                    <label htmlFor="first_name">First Name</label>
                    <input {...register("first_name")} type="text" id='first_name' />
                </div>

                <div className="imput-container">
                    <label htmlFor="last_name">Last Name</label>
                    <input {...register("last_name")} type="text" id='last_name' />
                </div>

                <div className="imput-container">
                    <label htmlFor="birthday">Birthday</label>
                    <input {...register("birthday")} type="date" id='birthday' />
                </div>
                
                
                <button> Submit </button>
            </form>
            
        </div>
    );
};

export default UsersForm;