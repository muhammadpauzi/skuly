import { useEffect, useState } from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import ErrorMessage from "../components/ErrorMessage";
import Input from "../components/Input";
import Label from "../components/Label";
import Spinner from "../components/Spinner";
import SuccessMessage from "../components/SuccessMessage";
import PAGE_TITLES from "../constants/pageTitles";

export default function Register() {
  const [errors, setErrors] = useState([]);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);
  const [registerMessage, setRegisterMessage] = useState("");

  useEffect(() => {
    document.title = PAGE_TITLES.REGISTER;
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
            Create a new account
          </h2>
        </div>
        <ErrorMessage errors={errors} />
        {!isRegisterLoading && isRegisterSuccess && (
          <SuccessMessage>
            {registerMessage}. Please click this link to{" "}
            <Link to="/login" className="underline decoration-green-500">
              Log in.
            </Link>
          </SuccessMessage>
        )}
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
                className="mb-2"
              />
            </div>
            <div>
              <Label htmlFor="name" className="mb-1 font-semibold">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
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
          <div>
            {isRegisterLoading ? (
              <Button
                type="submit"
                className="w-full items-center flex justify-center"
              >
                <Spinner /> Registering...
              </Button>
            ) : (
              <Button
                type="submit"
                className="w-full items-center flex justify-center"
              >
                Create account
              </Button>
            )}
          </div>
        </form>
      </Container>
    </>
  );
}
