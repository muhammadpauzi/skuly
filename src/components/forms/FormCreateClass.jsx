import Spinner from '../Spinner';
import Button from './Button';
import { useState } from 'react';
import ErrorMessage from '../ErrorMessage';
import Input from './Input';
import Label from './Label';
import { useClasses } from '../../hooks/useClasses';

export default function FormCreateClass() {
    const { createClass, isLoading } = useClasses();
    const [errors, setErrors] = useState([]);
    const [fields, setFields] = useState({
        name: '',
        description: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createClass({
            setErrors,
            name: fields.name,
            description: fields.description,
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
            <div className="py-9 px-6 bg-white border-2 border-gray-100 rounded-md">
                <div>
                    <h2 className="text-center text-lg md:text-3xl font-black text-gray-900">
                        Create a new class
                    </h2>
                </div>

                <ErrorMessage errors={errors} />

                <form
                    className="mt-8 space-y-6"
                    method="POST"
                    onSubmit={handleSubmit}
                >
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <Label
                                htmlFor="name"
                                className="mb-1 font-semibold"
                            >
                                Name or Title
                            </Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                onChange={handleChange}
                                className="mb-2"
                            />
                        </div>

                        <div>
                            <Label
                                htmlFor="description"
                                className="mb-1 font-semibold"
                            >
                                Description
                            </Label>
                            <Input
                                id="description"
                                name="description"
                                type="text"
                                autoComplete="description"
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
                            styleClassName={
                                isLoading ? 'text-white bg-indigo-400' : ''
                            }
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Spinner className="mr-3" /> Creating
                                    class...
                                </>
                            ) : (
                                'Create class'
                            )}
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
}
