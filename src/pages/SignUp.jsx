import { useEffect, useState } from "react";
import Button from "../components/forms/Button";
import Container from "../components/Container";
import ErrorMessage from "../components/ErrorMessage";
import Input from "../components/forms/Input";
import Label from "../components/forms/Label";
import Spinner from "../components/Spinner";
import SuccessMessage from "../components/SuccessMessage";
import PAGE_TITLES from "../constants/pageTitles";
import { useAuth } from "../contexts/useAuth";

export default function SignUp() {
  const [errors, setErrors] = useState([]);
  const { signUp, error, isLoading } = useAuth();
  const [fields, setFields] = useState({
    username: "",
    password: "",
    email: "",
  });

  useEffect(() => {
    document.title = PAGE_TITLES.SIGN_UP;
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp({
      setErrors,
      username: fields.username,
      password: fields.password,
      email: fields.email,
    });
  };

  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Container
        maxWidthClass="max-w-md"
        className="w-full space-y-8 min-h-screen py-10"
      >
        <div>
          <h2 className="mt-6 text-center text-3xl font-black text-gray-900">
            Create a new account
          </h2>
        </div>

        <ErrorMessage errors={errors} />

        <form className="mt-8 space-y-6" method="POST" onSubmit={handleSubmit}>
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
                onChange={handleChange}
                className="mb-2"
              />
            </div>
            <div>
              <Label htmlFor="email" className="mb-1 font-semibold">
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                onChange={handleChange}
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
                onChange={handleChange}
                className="mb-2"
              />
            </div>
          </div>
          <div>
            <Button
              type="submit"
              className="w-full"
              styleClassName={isLoading ? "text-white bg-orange-400" : ""}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Spinner className="mr-3" /> Creating account...
                </>
              ) : (
                "Create account"
              )}
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
}
