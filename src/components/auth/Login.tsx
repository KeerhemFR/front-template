import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

import { useAuthenticate } from '~components/Main';

import { SLogin } from '~components/auth/SLogin';

type formInputs = {
  email: string;
  password: string;
};

/**
 * Login page
 * @return {React.ReactElement} component that load the starter screen if the user and password are correct
 */
export const Login: React.FunctionComponent = React.memo(() => {
  Login.displayName = 'Login';

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<formInputs>();

  const [, setIsAuthenticate] = useAuthenticate();

  const [errMsg, setErrMsg] = useState<string>('');

  /**
   * Function call by handleSubmit to check if the email and password are hte necessary one to log in
   * @param {{string, string}} data values returned by the form on submit
   */
  const onSubmit: SubmitHandler<formInputs> = (data) => {
    if (
      data.email !== import.meta.env.LVMH_USERLOG &&
      data.password !== import.meta.env.LVMH_USERPSW
    ) {
      setErrMsg('bad');
    } else {
      setIsAuthenticate(true);
      navigate('/');
    }
  };

  return (
    <SLogin>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input type="email" {...register('email')} />
        <label>Password</label>
        <input type="password" {...register('password')} />
        <button type="submit" value="Login">
          Submit
        </button>
      </form>
      <p>{errMsg}</p>
    </SLogin>
  );
});
