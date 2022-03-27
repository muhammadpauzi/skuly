import { Link } from "react-router-dom";
import { classNames } from "../../utils";

export default function Logo({ className, children, ...props }) {
  return (
    <Link
      to="/"
      {...props}
      className={classNames(
        className || "",
        "text-orange-600 font-black text-2xl rounded focus:ring-2 ring-offset-2 ring-orange-200 transition"
      )}
    >
      {children}
    </Link>
  );
}
