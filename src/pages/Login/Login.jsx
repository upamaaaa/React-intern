import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useTogglePassword from "../../hooks/useTogglePassword";
import axios from "axios";
import cat from "../../assets/cat.png";
import "./Login.scss";

function Login() {
  const navigate = useNavigate();

  const { showPassword, togglePassword } = useTogglePassword();
  const {
    handleSubmit,
    formState: { errors, isValid },
    reset,
    register,
    clearErrors,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://dummyjson.com/auth/login",
        data,
        { withCredentials: true },
      );

      if (response.status === 200) {
        // console.log("Login successful:", response.data);

        toast.success("Login successful!");

        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("token", response.data.accessToken);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login failed:", error);

      toast.error("Login failed. Please check your credentials and try again.");

      clearErrors();
      // return;
    }

    reset();
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__left">
          <img src={cat} alt="Travel" className="login__image" />

          <div className="login__overlay">
            <h1 className="login__title"> Tours</h1>
          </div>
        </div>

        <div className="login__right">
          <div className="login__form-wrapper">
            <h2 className="login__heading">Welcome</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="login__field">
                <label className="login__label">Username</label>

                <input
                  type="text"
                  placeholder="Enter username"
                  className="login__input"
                  {...register("username", {
                    required: "Username is required",
                  })}
                />

                {errors.username && (
                  <p className="login__error">{errors.username.message}</p>
                )}
              </div>

              {/* PASSWORD */}
              <div className="login__field">
                <label className="login__label">Password</label>

                <div className="login__password-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className="login__input"
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />

                  <span className="login__show" onClick={togglePassword}>
                    {showPassword ? "Hide" : "Show"}
                  </span>
                </div>

                {errors.password && (
                  <p className="login__error">{errors.password.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="login__button"
                disabled={!isValid}
              >
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
