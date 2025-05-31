
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUp() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = formData;


    const existingUser = JSON.parse(localStorage.getItem('authUser'));
    if (existingUser && existingUser.email === email) {
      toast.error('User already exists!');
      return;
    }


    localStorage.setItem('authUser', JSON.stringify({ name, email, password }));

    toast.success('Account created successfully!');
    navigate('/signin');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-purple-700">Create Account</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-6 px-4 py-2 border border-gray-300 rounded"
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
        >
          Sign Up
        </button>

        <p className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <Link to="/signin" className="text-pink-600 hover:underline">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
}
