import React from "react";

const CurrenyComp = (props) => {
  const onChangeHandler = (e) => {
    props.callback(e.target.value);
  };
  return (
    <div>
      <fieldset>
        <legend>enter amount in {props.type}</legend>
        <input onChange={onChangeHandler} value={props.value} />
        <hr />
      </fieldset>
    </div>
  );
};
export default CurrenyComp;
