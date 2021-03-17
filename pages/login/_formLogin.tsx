import React, { ReactElement, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { ExgPattern } from '../../shared/helpers/ExgPattern';
import { useRouter } from 'next/router'
import axios from 'axios';
import Swal from 'sweetalert2';
interface Props {

}

export default function _formLogin({ }: Props): ReactElement {
  const { register, handleSubmit, watch, errors } = useForm();
  const [disableButton, setDisableButton] = useState(false);
  const router = useRouter();
  const onSubmit = data => {
    setDisableButton(true);
    axios.post('/api/login', { ...data }).then(async resp => {
      setDisableButton(false);
      const { data } = resp;
      localStorage.setItem('tk', JSON.stringify(data));
      await Swal.fire(
        'Good job!',
        'Success login!',
        'success'
      );
      router.push('/private');
    }).catch( (e) => {
      setDisableButton(false);
      Swal.fire(
        'Error!',
        e.message,
        'error'
      );
    });

  };
  return (
    <>
      <div className="container mt-4" >
        <div className="row">
          <div className="col-lg-4 col-md-6 ml-auto mr-auto">
            <div className="card card-login">
              <form onSubmit={handleSubmit(onSubmit)} className="form">
                <div className="card-header card-header-primary text-center">
                  <h4 className="card-title">Login</h4>
                  <div className="social-line">
                    <a className="btn btn-just-icon btn-link">
                      <i className="fa fa-facebook-square"></i>
                    </a>
                    <a className="btn btn-just-icon btn-link">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a className="btn btn-just-icon btn-link">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </div>
                </div>
                <p className="description text-center">Login to My awesome project {`${disableButton}`}</p>
                <div className="card-body p-3">


                  <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="email" ref={register({ required: true, pattern: ExgPattern.isValidEmail, })} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    {errors.email && <small id="emailHelp" className="form-text text-muted text-warning">Email is not valid.</small>}
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" ref={register({ required: true, pattern: ExgPattern.isValidPassword, })} className="form-control" autoComplete="on" id="exampleInputPassword1" placeholder="Password" />
                    {errors.password && <small id="emailHelp" className="form-text text-muted text-warning">The password minimum 8 characters, should have a lowercase letter and a symbol.</small>}
                  </div>

                  <div className="footer text-center">
                    <button disabled={disableButton} className="btn btn-primary btn-link btn-wd btn-lg">Login</button>
                  </div>


                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
