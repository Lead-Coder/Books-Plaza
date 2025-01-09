import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { login, setAuthToken } from '../services.ts';
import image from '/blog-3.jpg'

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await login(formData.email, formData.password);
      setAuthToken(response.token);
      navigate('/book'); // Redirect to dashboard after successful login
    }catch(error) {
      setError('An error occurred during login');
    }
  };

  return (
    <div>
      <h1 className="flex justify-center mb-5 font-bold text-3xl">Welcome To Books Plaza.</h1>
    <div className="w-full h-screen flex items-start">
      <div className='relative w-1/2 h-full flex flex-col'>
        <div className='absolute top-[26%] left-[10%] flex flex-col'>
          <h1 className= 'text-4x] [text-white font-bold my-4'>Explore, discover, and dive into the world of books.</h1>
          <p className= 'text-x] [text-white font-normal'>Login to our website and get attractive offers from the community.</p>
        </div>
        <img src={image} className="w.full h-full object-cover" />
      </div>
      
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-extrabold text-center text-gray-900 mb-6">Log in to your account</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="abc@example.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[148px]"
            type="submit">Log In
          </button>
        </div>
        <div className="mt-4 flex items-center justify-center">Don't have an account?
            <a className="text-blue-400 ml-1 hover:underline hover:underline-offset-4" href="/signup"> Sign Up</a>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2023 Auth. All rights reserved.
      </p>
    </div>
    </div>
    </div>
  )
}

export default Login

