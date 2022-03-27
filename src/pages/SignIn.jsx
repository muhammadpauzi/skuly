import { useEffect, useState } from "react";
import Button from "../components/Button";
import CheckBox from "../components/CheckBox";
import Container from "../components/Container";
import ErrorMessage from "../components/ErrorMessage";
import Input from "../components/Input";
import Label from "../components/Label";
import PAGE_TITLES from "../constants/pageTitles";

export default function SignIn() {
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    document.title = PAGE_TITLES.SIGN_IN;
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Container
        maxWidthClass="max-w-md"
        className="w-full space-y-8 min-h-screen py-10"
      >
        <div>
          <h2 className="mt-6 text-center text-3xl font-black text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <ErrorMessage errors={errors} />
        <form
          className="mt-8 space-y-6"
          action="#"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <Label htmlFor="username" className="mb-1 font-semibold">
                Username
              </Label>
              <Input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="mb-2"
              />
            </div>
            <div>
              <Label htmlFor="password" className="mb-1 font-semibold">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="mb-2"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <CheckBox className="accent-orange-600" name="remember_me" />
              <Label htmlFor="remember-me" className="ml-2">
                Remember me
              </Label>
            </div>
          </div>

          <div>
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
}
