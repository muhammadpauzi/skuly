import { classNames } from "../../utils";

export default function Input({ styleClassName, className, ...props }) {
  const baseStyleClassName = classNames(
    className ? className : "",
    "appearance-none rounded-md relative block w-full px-3 py-2.5 focus:z-10 sm:text-sm transition"
  );
  styleClassName =
    styleClassName ||
    "border-2 border-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500";

  return (
    <input
      {...props}
      className={classNames(baseStyleClassName, styleClassName)}
    />
  );
}
