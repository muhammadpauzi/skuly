import { classNames } from "../utils";

export default function Input({ className, ...props }) {
  return (
    <input
      {...props}
      className={classNames(
        className ? className : "",
        "appearance-none rounded-md relative block w-full px-3 py-2.5 border-2 border-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
      )}
    />
  );
}
