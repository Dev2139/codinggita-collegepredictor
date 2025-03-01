import React, { useId } from "react";
import Select from "react-select";

const customStyles = {
  control: (provided) => ({
    ...provided,
    "borderRadius": "0.25rem",
    "borderColor": "rgba(147, 51, 234, 0.5)", // Light purple border
    "boxShadow": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    "&:hover": {
      borderColor: "#9333ea", // Brighter purple on hover
    },
  }),
  option: (provided, state) => ({
    ...provided,
    padding: "0.5rem 1rem",
    color: state.isSelected ? "#ffffff" : "#000000", // White when selected, black otherwise
    backgroundColor: state.isFocused
      ? "#facc15" // Yellow on hover/focus
      : state.isSelected
      ? "#9333ea" // Purple when selected
      : "#ffffff", // White background default
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "0.25rem",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    backgroundColor: "#ffffff", // White menu background
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#9333ea", // Purple placeholder text
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