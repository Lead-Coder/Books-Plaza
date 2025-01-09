import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { signup, setAuthToken } from '../services.ts';

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
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

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      const response = await signup(formData.username, formData.email, formData.password);
      setAuthToken(response.token);
      navigate('/'); // Redirect to dashboard after successful signup
    } catch (err) {
      console.log(err);
      setError('An error occurred during signup');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">Create an account</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Username
          </label> */}
          <input
            className="shadow appearance-none border rounded h-12 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="username"
            placeholder="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            />
        </div>
        <div className="mb-4 pt-3">
          <input
            className="shadow appearance-none border rounded h-12 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4 pt-3">
          <input
            className="shadow appearance-none border rounded h-12 w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6 pt-1">
          <input
            className="shadow appearance-none border rounded h-12 w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required/>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[148px]"
            type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignUp

