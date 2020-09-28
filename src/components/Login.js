import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { setUserSession } from '../Utils/Common';

const URL = (email, password) => `http://127.0.0.1:3500/auth/login?email=${email}&password=${password}`;

function Login(props) {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getToken = async (email, password) => {
    const response = await fetch(URL(email, password), {
      method: 'POST',
    });
    const data = await response.json();
    return data;
  };

  const handleLogin = data => {
    setError(null);
    setLoading(true);
    const result = getToken(data.username, data.password);
    result.then(res => {
      if (res.auth_token) {
        setUserSession(res.auth_token, data.username);
        setLoading(false);
        props.history.push('/dashboard');
      } else {
        setLoading(false);
        setError(res.message);
      }
    });
  };

  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={handleSubmit(handleLogin)}
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
          name="username"
          ref={register({ required: true })}
        />
        {errors.username && (
          <span className="text-red-500 text-xs italic">
            This field is required
          </span>
        )}
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          name="password"
          placeholder="******************"
          ref={register({ required: true })}
        />
        {errors.password && (
          <span className="text-red-500 text-xs italic">
            This field is required
          </span>
        )}
      </div>
      <div className="flex justify-end">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Sign In'}
        </button>
      </div>
      {error && (
        <>
          <small style={{ color: 'red' }}>{error}</small>
          <br />
        </>
      )}
      <br />
    </form>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
