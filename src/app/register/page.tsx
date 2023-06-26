"use client"

import axios, { AxiosError } from "axios"
import { FormEvent, useState } from "react"

export default function RegisterPage() {
  const [error, setError] = useState()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    try {
      const res = await axios.post("api/auth/signup", {
        email: formData.get("email"),
        password: formData.get("password"),
        fullname: formData.get("fullname"),
      })
      console.log(res)
    } catch (error) {
      console.log(error)
      if (error instanceof AxiosError) {
        setError(error.response?.data.message)
      }
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {error && <div className="bg-red-500 text-white p-2 mb-2">{error}</div>}

        <h1>Signup</h1>
        <input
          name="fullname"
          type="text"
          placeholder="Hernán"
          className="bg-zinc-800 px-4 py-2 block mb-2"
        />
        <input
          name="email"
          type="email"
          placeholder="sarasa@gmail.com"
          className="bg-zinc-800 px-4 py-2 block mb-2"
        />
        <input
          name="password"
          type="password"
          placeholder="******"
          className="bg-zinc-800 px-4 py-2 block mb-2"
        />

        <button className="bg-indigo-500 px-4 py-2">Register</button>
      </form>
    </div>
  )
}
