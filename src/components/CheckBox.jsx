import { classNames } from "../utils";

export default function CheckBox({ className, ...props }) {
  return (
    <input
      {...props}
      type="checkbox"
      className={classNames(className ? className : "", "h-4 w-4")}
    />
  );
}
