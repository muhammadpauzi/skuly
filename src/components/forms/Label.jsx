import { classNames } from "../../utils";

export default function Label({ className, children, ...props }) {
  return (
    <label
      {...props}
      className={classNames(
        className ? className : "",
        "block text-sm font-medium text-gray-700"
      )}
    >
      {children}
    </label>
  );
}
