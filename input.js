import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";

const MaterialStyledInput = ({label,placeholder,value, onChange,readOnly}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isFocused || value ? styles.labelFocused : null]}>
       {label}
      </Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        // keyboardType="numeric" 
        value={value}
        onChangeText={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholderTextColor="#9E9E9E"
        readOnly={readOnly ? readOnly : false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    position: "relative",
    borderWidth: 1,
    borderColor: "#BDBDBD",
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginVertical: 10,
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
  label: {
    position: "absolute",
    left: 10,
    top: 15,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 5,
    color: "#9E9E9E",
    fontSize: 14,
    zIndex: 1,
    display:"none"
  },
  labelFocused: {
    top: -8,
    fontSize: 12,
    color: "#000",
    fontWeight:"800",
    display:"block"
  },
  input: {
    fontSize: 16,
    color: "#212121",
    padding: 0,
    marginTop: 10,
  },
});

export default MaterialStyledInput;
