import axios from "./axios";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export { axios, classNames };
