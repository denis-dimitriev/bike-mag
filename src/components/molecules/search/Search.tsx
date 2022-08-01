import React, { ChangeEvent, useState } from "react";

import { ReactComponent as Delete } from "../../../assets/icons/x-octagon-fill.svg";

import "./Search.scss";

import { Input } from "../../atoms/ui/input/Input";
import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg";

export const Search = () => {
  const [term, setTerm] = useState<string>("");

  const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) =>
    setTerm(event.target.value);

  const onEnterPressHandler = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      console.log("Go to Search", term);
      setTerm("");
    }
  };

  const onClearInputHandler = () => setTerm("");

  return (
    <form onSubmit={onSubmit} className="form-search-container">
      <Input
        children={<SearchIcon />}
        value={term}
        onChange={(event) => onChangeInputHandler(event)}
        onKeyPress={onEnterPressHandler}
      />
      {term && (
        <i className="delete-icon" onClick={onClearInputHandler}>
          <Delete />
        </i>
      )}
    </form>
  );
};
