import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthenticate } from '~components/Main';

import { SLogin } from '~components/auth/SLogin';

/**
 * Login page
 * @return {React.ReactElement} component that load the starter screen if the user and password are correct
 */
export const Login: React.FunctionComponent = React.memo(() => {
  Login.displayName = 'Login';

  const navigate = useNavigate();

  const [, setIsAuthenticate] = useAuthenticate();

  const [user, setUser] = useState<string>('');
  const [pswrd, setPswrd] = useState<string>('');
  const [errMsg, setErrMsg] = useState<string>('');

  /**
   * Handle the change in the input
   * @param {React.SetStateAction} stateHandler function that will change the state of the targeted variable
   * @param {HTMLInputElement} e event of the input value changing
   */
  const handleInput = (
    stateHandler: React.Dispatch<React.SetStateAction<string>>,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    stateHandler(e.target.value);
  };

  /**
   * Function that display a text if the submit button is clicked without the good values
   */
  const handleSubmit = () => {
    if (
      user !== import.meta.env.LVMH_USERLOG &&
      pswrd !== import.meta.env.LVMH_USERPSW
    ) {
      setErrMsg('bad');
    } else {
      setIsAuthenticate(true);
      navigate('/');
    }
  };

  return (
    <SLogin>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>User</label>
        <input
          type="text"
          name="user"
          value={user}
          onChange={(e) => handleInput(setUser, e)}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={pswrd}
          onChange={(e) => handleInput(setPswrd, e)}
        />
        <button type="submit" value="Login" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <p>{errMsg}</p>
    </SLogin>
  );
});
