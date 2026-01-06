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
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <h1 className="text-3xl font-bold">Tailwind Aktif 🔥</h1>
    </div>
  )
}