import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "./Context/AuthUserContext";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { login } = useContext(AuthContext);
  console.log(login);
  const navigate = useNavigate();
  const handleLogin = (data) => {
    console.log(data);
    login(data.email, data.password)
      .then((result) => {
        navigate("/home");
        toast.success("Welcome: Log in sucess");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1 className="text-3xl">Please Login</h1>
      <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control max-w-xs w-84 p-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", { required: "Email is required" })}
              placeholder="email"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-400">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-84 p-4 max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="enter password"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text">Forgot Password ?</span>
            </label>
          </div>

          {/* <p>{data}</p> */}
          <input className="btn btn-accent w-1/2" type="submit" />
          <p>
            New to our website ? <Link to="/signup">Create a Account</Link>
          </p>
          <div className="divider">OR</div>
          <button className="btn btn-outline">Continue With Google</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
