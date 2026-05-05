import { useState } from "react";

function useTogglePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return { showPassword, togglePassword };
}
export default useTogglePassword;
