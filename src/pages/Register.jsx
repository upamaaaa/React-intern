import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import cat from "../assets/cat.png";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch,
    clearErrors,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://dummyjson.com/auth/login",
        data,
      );
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please check your credentials and try again.");
      return;
    }

    reset();
  };
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow" style={{ width: "350px" }}>
        <div className="card-body">
          <h3 className="text-center mb-3">Login</h3>
          <img src={cat} alt="Cat" style={{ width: "320px" }} />;
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="username"
              control={control}
              rules={{ required: "Username is required" }}
              render={({ field }) => (
                <input
                  type="text"
                  placeholder="Username"
                  className="form-control mb-3"
                  {...field}
                />
              )}
            />
            {errors.email && (
              <p className="text-danger">{errors.email.message}</p>
            )}

            <Controller
              name="password"
              control={control}
              rules={{
                required: "Password is required",
                pattern: {
                  message:
                    "Password must be at least 7 characters ,include 1 capital letter & 1 number ",
                },
              }}
              render={({ field }) => (
                <div className="position-relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="form-control mb-3"
                    {...field}
                  />

                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      cursor: "pointer",
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </span>
                </div>
              )}
            />
            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}

            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={!isValid}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
