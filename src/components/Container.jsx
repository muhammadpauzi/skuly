import { classNames } from "../utils";

export default function Container({ children, maxWidthClass, ...props }) {
  maxWidthClass = maxWidthClass || "max-w-5xl";
  return (
    <div className={classNames(maxWidthClass, "mx-auto px-4 sm:px-6")}>
      {children}
    </div>
  );
}
