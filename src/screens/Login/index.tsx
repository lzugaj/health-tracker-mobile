import React, { useState } from "react";
import InputField from "../../components/UI/InputField";
import { Formik } from "formik";
import { Button, Keyboard, StyleSheet, Text, View } from "react-native";
import { AuthenticationDto } from "../../dto/types";
import { authentication } from "../../api/authentication";
import { usePasswordVisibility } from "../../hooks/usePasswordVisibility";
import { AuthorizationValidation } from "../../validations/AuthorizationValidation";
import { screens } from "../../constants/screens";
import TextError from "../../components/UI/TextError";
import { FontAwesome5 } from '@expo/vector-icons';

export default function Login({ navigation }: { navigation: any }) {
  const { showPassword, onShowPassword } = usePasswordVisibility();
  const [showError, setShowError] = useState<string>("");
  const initialValues: AuthenticationDto = {
    email: "",
    password: "",
  };

  const handleSubmit = (values: AuthenticationDto, { resetForm }: any) => {
    authentication(values)
      .then((isOk: boolean) => {
        if (isOk) {
          navigation.navigate(screens.DASHBOARD);
        } else {
          setShowError("Email/password is not entered correctly.");
        }
      });

    resetForm();
    Keyboard.dismiss();
  };

  return (
    <>
      <View style={styles.container}>
        { showError && <TextError error={showError} /> }
        <View>
          <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={AuthorizationValidation}>
            {formik => (
              <View>
                <InputField
                  label="Email"
                  name="email"
                  value={formik.values.email}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  placeholder="Type your email"
                  leftIcon={{ type: "font-awesome", name: "envelope" }}
                  error={formik.touched.email && formik.errors.email}
                  onChangeText={formik.handleChange("email")}
                />
                <InputField
                  label="Password"
                  name="password"
                  value={formik.values.password}
                  keyboardType="default"
                  secureTextEntry={!showPassword}
                  placeholder="Type your password"
                  leftIcon={{ type: "font-awesome", name: "lock" }}
                  rightIcon={{
                    type: "font-awesome",
                    name: `${showPassword ? "eye" : "eye-slash"}`,
                    onPress: onShowPassword,
                  }}
                  error={formik.touched.password && formik.errors.password}
                  onChangeText={formik.handleChange("password")}
                />
                <View style={styles.forgotPasswordContainer}>
                  <Text onPress={() => navigation.navigate(screens.DASHBOARD)} style={styles.forgotPasswordText}>
                    Forgot your password?
                  </Text>
                </View>
                <Button title="Login" disabled={formik.isValid} onPress={formik.handleSubmit as any} />
              </View>
            )}
          </Formik>
        </View>

        <View style={styles.socialMediaContainer}>
          <Text style={{textAlign: "center"}}>Or</Text>
          <View style={styles.socialMediaLinks}>
            <FontAwesome5 name="google-plus" size={50} color="#DB4437" style={styles.socialMediaLink} />
            <FontAwesome5 name="facebook" size={50} color="#0C88EF" style={styles.socialMediaLink} />
          </View>
        </View>

        <View style={styles.socialMediaContainer}>
          <Text style={{textAlign: "center"}}>
            Don't have an account?{" "}
            <Text style={{textDecorationLine: "underline"}} onPress={() => navigation.navigate(screens.REGISTRATION)}>Sign Up</Text>
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 15,
  },
  forgotPasswordContainer: {
    marginBottom: 25,
    marginRight: 15,
  },
  forgotPasswordText: {
    justifyContent: "center",
    textAlign: "right",
    textDecorationLine: "underline"
  },
  socialMediaContainer: {
    marginTop: 50,
  },
  socialMediaLinks: {
    flexDirection: "row",
    justifyContent: "center"
  },
  socialMediaLink: {
    margin: 5,
  }
});
