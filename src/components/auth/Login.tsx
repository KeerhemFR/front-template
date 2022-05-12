import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Footer } from '~components/footer/Footer';

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
  const [isCheck, setIsCheck] = useState<boolean>(false);

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
      <h2>Log in</h2>
      <div className="formsContainer">
        <section>
          <h3>Identification</h3>
          <div className="formCard">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="formBody">
                <div className="formInput">
                  <label>Email</label>
                  <input type="email" {...register('email')} />
                </div>
                <div className="formInput">
                  <label>Password</label>
                  <input type="password" {...register('password')} />
                </div>
                <p className="pswrdReset">Forgot password?</p>
                <div className="formCheckbox">
                  <button type="button" onClick={() => setIsCheck(!isCheck)}>
                    {isCheck && <div></div>}
                  </button>
                  <p>Remember me</p>
                </div>
              </div>
              <div className="formBtn">
                <button type="submit" value="Login" className="primaryButton">
                  Login
                </button>
              </div>
            </form>
          </div>
          <p>{errMsg}</p>
        </section>

        <section>
          <h3>New client?</h3>
          <div className="formCard">
            <div className="formBody">
              <p className="formText">
                Create an account to track and manage your orders, view all your
                personal information, and save your favourite addresses for
                quick and easy checkout.
              </p>
            </div>
            <div className="formBtn">
              <button className="primaryButton" disabled>
                Create an account
              </button>
            </div>
          </div>
        </section>

        <section>
          <h3>Check order</h3>
          <div className="formCard">
            <form>
              <div className="formBody">
                <p className="formText">
                  See your order even if you are not a registered user. Enter
                  the order number and the billing address postcode.
                </p>
                <div className="formInput">
                  <label>Order number</label>
                  <input type="text" />
                </div>
                <div className="formInput">
                  <label>Order Email</label>
                  <input type="text" />
                </div>
                <div className="formInput">
                  <label>Billing postcode</label>
                  <input type="text" />
                </div>
              </div>
              <div className="formBtn">
                <button className="primaryButton" disabled>
                  Create an account
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </SLogin>
  );
});
