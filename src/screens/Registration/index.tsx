import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { AuthorizationDto } from "../../dto/types";
import { useMultistepForm } from "../../hooks/useMultistepForm";
import UserDetails from "./components/UserDetails";
import { Formik, FormikErrors } from "formik";
import PersonalDetails from "./components/PersonalDetails";
import {
  PersonalDetailsValidationSchema,
  UserDetailsValidationSchema,
} from "../../validations/AuthenticationValidation";

const ValidationSchema = [ UserDetailsValidationSchema, PersonalDetailsValidationSchema ];

export default function Registration() {
  const [ data, setData ] = useState<AuthorizationDto>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmationPassword: "",
    dateOfBirth: "",
    gender: "",
  });

  const updateFields = (fields: Partial<AuthorizationDto>) => {
    setData(prev => {
      return { ...prev, ...fields };
    });
  };

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserDetails { ...data } updateFields={ updateFields } />,
      <PersonalDetails { ...data } updateFields={ updateFields } />,
    ]);

  const handleSubmit = (values: AuthorizationDto) => {
    console.log(values);
  };

  const handleStepsTitle = (currentStepIndex: number): React.ReactElement => {
    if (currentStepIndex === 1) {
      return <Text>User Details</Text>;
    } else {
      return <Text>Personal Details</Text>;
    }
  };

  const handlePasswordValidation = (values: AuthorizationDto): FormikErrors<AuthorizationDto> => {
    const errors = {} as FormikErrors<AuthorizationDto>;
    if (values.confirmationPassword !== values.password) {
      errors.confirmationPassword = "Password confirmation password does not matches with the password you provided.";
    }

    return errors;
  };

  return (
    <>
      <View style={ styles.container }>
        <Text>Registration</Text>
        <Formik initialValues={ data } onSubmit={ handleSubmit }
                validationSchema={ ValidationSchema[ currentStepIndex ] } validate={ handlePasswordValidation }>
          {(
            <View>
              <Text>{ currentStepIndex + 1 } of { steps.length }</Text>
              { handleStepsTitle(currentStepIndex) }
              { step }
              { !isFirstStep && (
                <Button title="Back" onPress={ back } />
              ) }
              <Button title={ isLastStep ? "Finish" : "Next" } onPress={ next } />
            </View>
          ) }
        </Formik>
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
});