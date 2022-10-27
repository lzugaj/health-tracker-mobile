import React from "react";
import { View } from "react-native";
import InputField from "../../../components/UI/InputField";
import { usePasswordVisibility } from "../../../hooks/usePasswordVisibility";

type UserDetails = {
  email: string;
  password: string;
  confirmationPassword: string;
}

type UserDetailsProps = UserDetails & {
  updateFields: (fields: Partial<UserDetails>) => void;
}

export default function UserDetails({ email, password, confirmationPassword, updateFields }: UserDetailsProps) {
  const { showPassword: showPassword, onShowPassword: onShowPassword } = usePasswordVisibility();
  const { showPassword: showConfirmedPassword, onShowPassword: onShowConfirmedPassword } = usePasswordVisibility();

  return (
    <>
      <View>
        <InputField
          label="Email"
          name="email"
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Type your email"
          leftIcon={{ type: "font-awesome", name: "envelope" }}
          onChangeText={email => updateFields({ email })}
        />
        <InputField
          label="Password"
          name="password"
          value={password}
          keyboardType="default"
          secureTextEntry={!showPassword}
          placeholder="Type your password"
          leftIcon={{ type: "font-awesome", name: "lock" }}
          rightIcon={{
            type: "font-awesome",
            name: `${showPassword ? "eye" : "eye-slash"}`,
            onPress: onShowPassword,
          }}
          onChangeText={password => updateFields({ password })}
        />
        <InputField
          label="Confirmation Password"
          name="confirmationPassword"
          value={confirmationPassword}
          keyboardType="default"
          secureTextEntry={!showConfirmedPassword}
          placeholder="Confirm your password"
          leftIcon={{ type: "font-awesome", name: "lock" }}
          rightIcon={{
            type: "font-awesome",
            name: `${showConfirmedPassword ? "eye" : "eye-slash"}`,
            onPress: onShowConfirmedPassword,
          }}
          onChangeText={confirmationPassword => updateFields({ confirmationPassword })}
        />
      </View>
    </>
  );
}