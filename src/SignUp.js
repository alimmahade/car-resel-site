import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "./Context/AuthUserContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const { createUser, signInWithGoogle, updateUserProfile } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSignUp = (data) => {
    console.log(data);

    createUser(data.email, data.password)
      .then((result) => {
        toast.success("Welcome: Register sucess");
        const user = result.user;
        updateUserProfile({ displayName: data.name });
        console.log(user.displayName);
      })
      .catch((err) => console.log(err));
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        // const cretential=GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="p-10">
      <h1 className="text-4xl text-center">Please Sign Up</h1>
      <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control max-w-xs w-84 p-4">
            <label className="label">
              <span className="label-text text-2xl">Name</span>
            </label>
            <input
              type="text"
              {...register("name")}
              placeholder="Name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control max-w-xs w-84 p-4">
            <label className="label">
              <span className="label-text text-2xl">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              {...register("email", { required: "Email is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-400">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-84 p-4 max-w-xs">
            <label className="label">
              <span className="label-text text-2xl">Password</span>
            </label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              placeholder="enter password"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-400">{errors.password.message}</p>
            )}
          </div>

          {/* <p>{data}</p> */}

          <input className="btn btn-accent w-1/2" type="submit" />
          <p className="p-4 font-semibold">
            Already Have an account ?
            <Link to="/login" className="text-red-500">
              Please Log in
            </Link>
          </p>
          <div className="divider">OR</div>
          <button onClick={handleGoogleSignIn} className="btn btn-outline">
            Continue With Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
