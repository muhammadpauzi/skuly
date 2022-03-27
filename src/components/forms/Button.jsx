import { Link } from "react-router-dom";
import { classNames } from "../../utils";

export default function Button({
  className,
  children,
  styleClassName,
  as = "button",
  ...props
}) {
  const ElementAsButton = as === Link ? Link : `${as}`;
  const baseStyleClassName = classNames(
    className ? className : "",
    "cursor-pointer px-5 py-2.5 border border-transparent rounded text-base font-medium focus:ring-2 ring-offset-2 transition"
  );
  styleClassName =
    styleClassName ||
    "text-white bg-orange-500 hover:bg-orange-400 focus:ring-orange-400";

  return (
    <ElementAsButton
      {...props}
      className={classNames(baseStyleClassName, styleClassName)}
    >
      {children}
    </ElementAsButton>
  );
}
