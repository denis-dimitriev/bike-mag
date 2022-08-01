import React, { ChangeEvent, createRef, ReactNode, useRef } from "react";

interface InputProps {
  children?: ReactNode;
  placeholder?: string;
  value?: string | "";
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: KeyboardEvent) => void;
  otherProps?: any;
}

export const Input: React.FC<InputProps> = ({
  children,
  value,
  placeholder,
  onChange,
  onKeyPress,
  otherProps,
}) => {
  return (
    <div className="input-group">
      {children && (
        <span className="input-group-text" id="basic-addon1">
          {children}
        </span>
      )}
      <input
        type="text"
        value={value}
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
        onKeyPress={onKeyPress}
        {...otherProps}
      />
    </div>
  );
};
