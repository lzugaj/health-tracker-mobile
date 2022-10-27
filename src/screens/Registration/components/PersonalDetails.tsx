import React, { useState } from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import InputField from "../../../components/UI/InputField";

type PersonalDetails = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
}

type PersonalDetailsProps = PersonalDetails & {
  updateFields: (fields: Partial<PersonalDetails>) => void;
}

export default function PersonalDetails({ firstName, lastName, dateOfBirth, gender, updateFields }: PersonalDetailsProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: "Female", value: "FEMALE"},
    {label: "Male", value: "MALE"},
  ]);
  const [date, setDate] = useState(null);

  return (
    <>
      <View>
        <InputField
          label="First name"
          name="firstName"
          value={firstName}
          keyboardType="default"
          placeholder="Type your first name"
          leftIcon={{ type: "font-awesome", name: "user" }}
          onChangeText={firstName => updateFields({ firstName })}
        />
        <InputField
          label="Last name"
          name="lastName"
          value={lastName}
          keyboardType="default"
          placeholder="Type your last name"
          leftIcon={{ type: "font-awesome", name: "user" }}
          onChangeText={lastName => updateFields({ lastName })}
        />
        <InputField
          label="Date of birth"
          name="dateOfBirth"
          value={dateOfBirth}
          keyboardType="default"
          placeholder="Enter your date of birth"
          leftIcon={{ type: "font-awesome", name: "calendar" }}
          onChangeText={dateOfBirth => updateFields({ dateOfBirth })}
        />
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Select your gender"
        />
      </View>
    </>
  );
}