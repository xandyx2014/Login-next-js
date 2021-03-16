import React, { ReactElement } from 'react'
import { useForm } from 'react-hook-form';
import { ExgPattern } from '../../shared/helpers/ExgPattern';

interface Props {
    
}

export default function _formRegister({}: Props): ReactElement {
    const { register, handleSubmit, watch, errors  } = useForm();
  const onSubmit = data => {
    console.log('DATA on submit', data);
  };
  console.log('Erros', errors);
    return (
        <>
            <div className="container mt-4" >
          <div className="row">
            <div className="col-lg-4 col-md-6 ml-auto mr-auto">
              <div className="card card-login">
                <form onSubmit={handleSubmit(onSubmit)} className="form">
                  <div className="card-header card-header-primary text-center">
                    <h4 className="card-title">Register</h4>
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
                  <p className="description text-center">Login to My awesome project</p>
                  <div className="card-body p-3">
                      <div className="form-group">
                        <label>Email address</label>
                        <input type="email" name="email" ref={register({required: true, pattern: ExgPattern.isValidEmail, })} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        { errors.email && <small id="emailHelp" className="form-text text-muted text-warning">Email is not valid.</small>} 
                      </div>
                      <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" ref={register({required: true, pattern: ExgPattern.isValidName, })} className="form-control" id="nameInput" aria-describedby="emailHelp" placeholder="Enter name" />
                        { errors.name && <small id="emailHelp" className="form-text text-muted text-warning">Name not is valid.</small>} 
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" ref={register({ required: true, pattern: ExgPattern.isValidPassword,  })} className="form-control" autoComplete="on" id="exampleInputPassword1" placeholder="Password" />
                        {errors.password && <small id="emailHelp" className="form-text text-muted text-warning">The password minimum 8 characters, should have a lowercase letter and a symbol.</small>}
                      </div>
                      <div className="form-group">
                        <label>Repeat Password</label>
                        <input type="password" name="repeatPassword" ref={register({ required: true, validate: (value) => value === watch('password') || "The passwords do not match",  })} className="form-control" autoComplete="on" id="exampleInputPassword2" placeholder="Repeat password" />
                        {errors.repeatPassword &&  <small id="emailHelp" className="form-text text-muted text-warning">{errors.repeatPassword.message}</small>}
                      </div>
                      
                      <div className="footer text-center">
                        <button className="btn btn-primary btn-link btn-wd btn-lg">Login</button>
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
