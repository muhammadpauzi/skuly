import { Link } from "react-router-dom";
import { classNames } from "../utils";

export default function Logo({ className, children, ...props }) {
  return (
    <Link
      to="/"
      {...props}
      className={classNames(
        className || "",
        "text-orange-600 font-black text-2xl"
      )}
    >
      {children}
    </Link>
  );
}
