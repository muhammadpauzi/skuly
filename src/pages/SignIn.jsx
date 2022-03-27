import { useEffect, useState } from 'react';
import Button from '../components/forms/Button';
import CheckBox from '../components/forms/CheckBox';
import Container from '../components/Container';
import ErrorMessage from '../components/ErrorMessage';
import Spinner from '../components/Spinner';
import Input from '../components/forms/Input';
import Label from '../components/forms/Label';
import PAGE_TITLES from '../constants/pageTitles';
import { useAuth } from '../contexts/useAuth';
import { useLocation } from 'react-router-dom';
import SuccessMessage from '../components/SuccessMessage';

export default function SignIn() {
    const [errors, setErrors] = useState([]);
    const location = useLocation();
    const { signIn, error, isLoading } = useAuth();
    const [fields, setFields] = useState({
        username: '',
        password: '',
    });

    useEffect(() => {
        document.title = PAGE_TITLES.SIGN_IN;
        if (location?.state?.isSignUpSuccess)
            setFields({
                username: location?.state?.username,
            });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signIn({
            setErrors,
            username: fields.username,
            password: fields.password,
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
                    <h2 className="mt-6 text-center text-lg md:text-3xl font-black text-gray-900">
                        Sign in to your account
                    </h2>
                </div>
                <ErrorMessage errors={errors} />
                {location?.state?.isSignUpSuccess && (
                    <SuccessMessage>Please Sign in!</SuccessMessage>
                )}
                <form
                    className="mt-8 space-y-6"
                    action="#"
                    method="POST"
                    onSubmit={handleSubmit}
                >
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <Label
                                htmlFor="username"
                                className="mb-1 font-semibold"
                            >
                                Username
                            </Label>
                            <Input
                                id="username"
                                name="username"
                                type="text"
                                autoComplete="username"
                                required
                                onChange={handleChange}
                                value={fields.username}
                                className="mb-2"
                            />
                        </div>
                        <div>
                            <Label
                                htmlFor="password"
                                className="mb-1 font-semibold"
                            >
                                Password
                            </Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                onChange={handleChange}
                                value={fields.password}
                                className="mb-2"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <CheckBox
                                className="accent-indigo-600"
                                name="remember_me"
                            />
                            <Label htmlFor="remember-me" className="ml-2">
                                Remember me
                            </Label>
                        </div>
                    </div>

                    <div>
                        <Button
                            type="submit"
                            className="w-full"
                            styleClassName={
                                isLoading ? 'text-white bg-indigo-400' : ''
                            }
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Spinner className="mr-3" /> Wait...
                                </>
                            ) : (
                                'Sign in'
                            )}
                        </Button>
                    </div>
                </form>
            </Container>
        </>
    );
}
