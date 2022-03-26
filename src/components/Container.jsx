import { classNames } from "../utils";

export default function Container({ children, maxWidthClass }) {
  maxWidthClass = maxWidthClass || "max-w-5xl";
  return (
    <div className={classNames(maxWidthClass, "mx-auto px-5 sm:px-8")}>
      {children}
    </div>
  );
}
