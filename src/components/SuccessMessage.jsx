import { classNames } from "../utils";

export default function SuccessMessage({ children, className, ...props }) {
  return (
    <>
      <div
        className={classNames(
          className || "",
          "bg-green-50 p-4 py-5 rounded-md border border-green-100"
        )}
        {...props}
      >
        <div className="font-medium text-green-600">{children}</div>
      </div>
    </>
  );
}
