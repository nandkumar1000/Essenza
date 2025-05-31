
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignIn() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    
    const validEmail = 'user@example.com';
    const validPassword = '123456';

    if (email === validEmail && password === validPassword) {
      localStorage.setItem('authUser', JSON.stringify({ email }));
      toast.success('Sign in successful!');
      navigate('/'); 
    } else {
      toast.error('Invalid email or password.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-purple-700">Welcome Back</h2>

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
          Sign In
        </button>

        <p className="mt-4 text-center text-sm">
          Don't have an account?{' '}
          <Link to="/signup" className="text-pink-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}
