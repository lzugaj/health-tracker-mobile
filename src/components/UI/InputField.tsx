import React from "react";
import { Input } from "@rneui/themed";
import { IconNode } from "@rneui/base";
import TextError from "./TextError";

type InputFieldProps = {
  label: string;
  name: string;
  value: string;
  keyboardType: "default" | "number-pad" | "decimal-pad" | "numeric" | "email-address" | "phone-pad";
  secureTextEntry?: boolean;
  placeholder?: string;
  autoCapitalize?: "characters" | "words" | "sentences" | "none";
  leftIcon?: IconNode;
  rightIcon?: IconNode;
  error?: string | false | undefined;
  onChangeText: (value: string) => void;
};

export default function InputField({ error, ...props }: InputFieldProps) {
  return (
    <>
      <Input {...props} />
      {error && <TextError error={error} />}
    </>
  );
}
