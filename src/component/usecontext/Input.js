import React from 'react'
import Output from './Output';
import { useState,createContext } from 'react';
export const user=createContext();
const Input=()=>{
    const[name]= useState("habeeb");

    let url = "https://11fa-223-190-217-124.ngrok.io";

    const handleGet = () => {
        let data = fetch(`${url}/api/courses`)
        .then(response => response.json())
        .catch(err => console.log(err, " -> Error"))

        console.log("Data: ", data)

    }

    const handlePost = () => {
        let options = {
            method: 'POST',
            body: JSON.stringify({
                name: 'Course 4'
            }),
            headers: {
                Accept: 'applcation/json',
                "Content-Type": "application/json;charset=UTF-8"
            }
        }
        fetch(`${url}/api/courses`, options)
        .then(response => console.log(response, "-> Response"))
        .catch(err => console.log(err, " -> Error"))

    }

    const handlePut = () => {
        let options = {
            method: 'PUT',
            body: JSON.stringify({
                name: 'Course - 4'
            }),
            headers: {
                Accept: 'applcation/json',
                "Content-Type": "application/json;charset=UTF-8"
            }
        }
        fetch(`${url}/api/courses/4`, options)
        .then(response => console.log(response, "-> Response"))
        .catch(err => console.log(err, " -> Error"))
    }

    const handleDelete = () => {
        let options = {
            method: 'DELETE'
        }
        fetch(`${url}/api/courses/4`, options)
        .then(response => console.log(response, "-> Response"))
        .catch(err => console.log(err, " -> Error"))

    }

    return(
       <user.Provider value={name}>
        <div>
       <h1> this is input page{name}</h1>
         <Output val={name} />
         <button onClick={handleGet}>GET</button>
         <button onClick={handlePost}>POST</button>
         <button onClick={handlePut}>PUT</button>
         <button onClick={handleDelete}>DELETE</button>
        </div>
        </user.Provider>
    )
}

export default Input;