import React, { useId } from "react";
import Select from "react-select";

const customStyles = {
  control: (provided) => ({
    ...provided,
    "borderRadius": "0.25rem",
    "borderColor": "rgba(147, 51, 234, 0.5)", 
    "boxShadow": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    "&:hover": {
      borderColor: "#9333ea",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    padding: "0.5rem 1rem",
    color: state.isSelected ? "#ffffff" : "#000000", 
    backgroundColor: state.isFocused
      ? "#facc15" 
      : state.isSelected
      ? "#5d21d1" 
      : "#ffffff", 
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "0.25rem",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    backgroundColor: "#ffffff",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#5d21d1",
  }),
};

const Dropdown = ({
  options,
  onChange,
  isDisabled,
  selectedValue,
  className,
}) => {
  return (
    <Select
      options={options}
      onChange={onChange}
      isDisabled={isDisabled}
      styles={customStyles}
      instanceId={useId()}
      className={className}
      value={options.find(
        (option) =>
          option.label === selectedValue || option.value === selectedValue
      )}
    />
  );
};

export default Dropdown;