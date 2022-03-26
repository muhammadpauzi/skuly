import { Link } from "react-router-dom";
import { classNames } from "../utils";

export default function AppLink({
  className,
  children,
  styleClassName,
  ...props
}) {
  const baseStyleClassName = classNames(
    className ? className : "",
    "text-base rounded px-2 py-1 transition focus:ring-2 ring-offset-2 font-medium"
  );
  styleClassName =
    styleClassName || "text-gray-500 hover:text-gray-900 focus:ring-orange-200";

  return (
    <Link {...props} className={classNames(baseStyleClassName, styleClassName)}>
      {children}
    </Link>
  );
}
