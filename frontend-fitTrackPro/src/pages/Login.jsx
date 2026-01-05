import { useState } from "react";
import api from '../services/api';

export default function login(){
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleSubmit = async (e)=> {
        e.preventDefault();

        try{
            const res = await api.post("/login");

            //simpen token
            localStorage.setItem("token", res.data.token);

            alert("Login berhasil");
        }catch(err){
            alert("Gagal login")
        }
        
    };

    return(
        <form onSubmit={handleSubmit}>
            <input placeholder="email" onChange={setForm({...form, email: e.target.value})}/>
            <input type="password" placeholder="password" onChange={setForm({...form, password: e.target.value})}/>
            <button>Login</button>
        </form>
    )
}