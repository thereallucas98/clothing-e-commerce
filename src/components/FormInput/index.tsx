import { InputHTMLAttributes } from "react";
import "./form-input.styles.scss";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function FormInput({ label, ...rest }: FormInputProps) {
  return (
    <div className="group">
      <input className="form-input" {...rest} />
      {
        label ? 
        (
        <label className={`${rest.value?.toString().length ? 'shrink': ''} form-input-label`}>
            {label}
        </label>
        )
        : null
      }
    </div>
  );
}

export default FormInput;
