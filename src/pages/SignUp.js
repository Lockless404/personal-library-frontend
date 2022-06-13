/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from '../redux/auth';

const SignUp = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(signup(data));
  };

  return (
    <div>
      <form className="col" onSubmit={handleSubmit(onSubmit)} method="post">
        <input name="name" placeholder="Name" {...register('name', { required: true })} />
        <input name="email" placeholder="Email" {...register('email', { required: true })} />
        <input name="password" type="password" placeholder="Password" {...register('password', { required: true })} />
        <input name="password_confirmation" type="password" placeholder="Password Confirmation" {...register('password_confirmation', { required: true })} />
        <input type="submit" value="Sign Up" />
      </form>
      <small>
        Already have an account?
        <Link className="cursor-pointer bg-green px-2 text-sm" to="/users/login">Log In</Link>
      </small>
    </div>
  );
};

export default SignUp;
