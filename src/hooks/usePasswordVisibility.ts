import { useState } from "react";

export function usePasswordVisibility() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return {
    showPassword,
    onShowPassword,
  };
}
