import { useState } from "react";
import api from '../services/api';
import { use } from "react";

export default function Register(){
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            await api.post("/register", form);
            alert("Register berhasil, Silahkan login");
        }catch(err){
            alert(err.response.data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="nama" onChange={(e) => setForm({...form, name: e.target.value})} />
            <input placeholder="email" onChange={(e) => setForm({...form, email: e.target.value})} />
            <input type="password" placeholder="password" onChange={(e) => setForm({...form, password: e.target.value})} />
            <input type="password" placeholder="password confirmation" onChange={(e) => setForm({...form, password_confirmation: e.target.value})} />

            <button>Register</button>
        </form>
    )
}