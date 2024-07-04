import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isRegistered, setIsRegistered] = useState(false); 
  const [RegisterError, setRegisterError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      console.error('Invalid email format');
      setRegisterError(true);
      return;
    }
    if (formData.password.length < 7) {
      console.error('Password must be at least 7 characters long');
      return;
    }
    try {
      const response = await axios.post('https://6685bb30b3f57b06dd4da302.mockapi.io/user', formData);
      console.log('User signed up:', response.data);
      setIsRegistered(true); 
      setRegisterError(false);
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <section className="h-screen lg:mt-7 lg:mx-28">
      <div className="h-full">
        <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
      <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
        <img
          src="data:image/png;base64,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"
          className="ml-14 w-[70%]"
          alt="Sample image"
        />
      </div>



      {/* Right column container */}
      <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
        <form onSubmit={handleSubmit}>
          {/*Sign in section*/}
          <div className="flex flex-row items-center justify-center lg:justify-start">
            <p className="mb-0 me-4 lg:ml-24 text-lg">Sign in with</p>
            {/* Facebook */}
            <button
              type="button"
              data-twe-ripple-init=""
              data-twe-ripple-color="light"
              className=" mx-1 inline-block h-9 w-9 rounded-full bg-red-600 fill-white p-2 uppercase leading-normal shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            >
              {/* Facebook */}
              <span className="[&>svg]:mx-auto [&>svg]:h-3.5 [&>svg]:w-3.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
              </span>
            </button>
            {/* X */}
            <button
              type="button"
              data-twe-ripple-init=""
              data-twe-ripple-color="light"
              className=" mx-1 inline-block h-9 w-9 rounded-full bg-red-600 fill-white p-2 uppercase leading-normal shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            >
              {/* X */}
              <span className="[&>svg]:mx-auto [&>svg]:h-3.5 [&>svg]:w-3.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </span>
            </button>
            {/* Linkedin */}
            <button
              type="button"
              data-twe-ripple-init=""
              data-twe-ripple-color="light"
              className=" mx-1 inline-block h-9 w-9 rounded-full bg-red-600 fill-white p-2 uppercase leading-normal shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            >
              {/* Linkedin */}
              <span className="[&>svg]:mx-auto [&>svg]:h-3.5 [&>svg]:w-3.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
              </span>
            </button>
          </div>
          {/* Separator between social media sign in and email/password sign in */}
          <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
            <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
              Or
            </p>




              </div>
              {/* Name input */}
              <div className="relative mb-6">
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                  id="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor="name"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary"
                >
                  Name
                </label>
              </div>
              {/* Email input */}
              <div className="relative mb-6">
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                  id="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor="email"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary"
                >
                  Email address
                </label>
              </div>
              {/* Password input */}
              <div className="relative mb-6">
                <input
                  type="password"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                  id="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <label
                  htmlFor="password"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary"
                >
                  Password
                </label>
              </div>

              {RegisterError && (
              <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <span className="font-medium">Error:</span> Invalid email or password.
              </div>
            )}
              {/* Success alert */}
              {isRegistered && (
                <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                  <span className="font-medium">Success alert!</span> You have successfully registered.
                </div>
              )}
              {/* Login button */}
              <div className="text-center lg:text-left">
                <button
                  type="submit"
                  className="inline-block w-full rounded bg-red-600 px-7 pb-2 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600"
                >
                  Sign Up
                </button>
                {/* Register link */}
                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                  Already have an account?
                  <Link to="/login" className="text-danger transition duration-150 ease-in-out hover:text-danger-600">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
