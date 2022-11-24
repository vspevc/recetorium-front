import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import InputStyled from "./InputSetStyled";
import { InputSetProps } from "./types";

const InputSet = ({
  id,
  handleValue,
  labelText,
  inputValue = "",
  captionText = "",
  options = { isDisabled: false, isError: false },
}: InputSetProps): JSX.Element => {
  return (
    <InputStyled {...options}>
      <label className="input-set__label" htmlFor={id}>
        {labelText}
      </label>

      <div className="input-set__icon-wrapper">
        <FontAwesomeIcon
          className="input-set__icon"
          icon={solid("circle-exclamation")}
        />

        <input
          id={id}
          className="input-set__input"
          onChange={handleValue}
          type="text"
          disabled={options.isDisabled}
          value={inputValue}
        />
      </div>

      {captionText && (
        <small className="input-set__caption">{captionText}</small>
      )}
    </InputStyled>
  );
};

export default InputSet;