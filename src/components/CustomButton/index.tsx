import { ButtonHTMLAttributes, ReactNode } from "react";
import "./custom-button.styles.scss";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function CustomButton({ children, ...rest }: CustomButtonProps) {
  return (
    <button className="custom-button" {...rest}>
      {children}
    </button>
  );
}

export default CustomButton;
