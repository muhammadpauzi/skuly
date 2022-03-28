import Spinner from '../Spinner';
import Button from './Button';
import { useState } from 'react';
import ErrorMessage from '../ErrorMessage';
import Input from './Input';
import Label from './Label';
import useSWR from 'swr';
import { fetcher } from '../../utils/fetcher';
import { useWorks } from '../../hooks/useWorks';
import { useParams } from 'react-router-dom';

export default function FormCreateWork() {
    const { createWork, isLoading } = useWorks();

    const { data, error } = useSWR('/works/types', fetcher);
    const params = useParams();
    const [errors, setErrors] = useState([]);
    const [fields, setFields] = useState({
        title: '',
        description: '',
        type: '',
        duedate: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { title, description, type, duedate } = fields;
        await createWork({
            setErrors,
            title,
            description,
            type,
            duedate,
            classId: params.id,
        });
    };

    const handleChange = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value,
        });
        if (fields.type === '') {
            const firstType = data?.data[0];
            setFields({ ...fields, type: firstType });
        }
    };
    return (
        <>
            <div className="py-9 px-6 bg-white border-2 border-gray-100 rounded-md">
                <div>
                    <h2 className="text-center text-lg md:text-3xl font-black text-gray-900">
                        Create a new work
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
                                htmlFor="title"
                                className="mb-1 font-semibold"
                            >
                                Title
                            </Label>
                            <Input
                                id="title"
                                name="title"
                                type="text"
                                autoComplete="title"
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
                                onChange={handleChange}
                                className="mb-2"
                            />
                        </div>

                        <div>
                            <Label
                                htmlFor="type"
                                className="mb-1 font-semibold"
                            >
                                Type
                            </Label>
                            <Input
                                as="select"
                                required
                                onChange={handleChange}
                                className="mb-2"
                            >
                                {data?.data.map((type) => (
                                    <option value={type} key={type}>
                                        {type[0] +
                                            type
                                                .toLowerCase()
                                                .substr(1, type.length - 1)}
                                    </option>
                                ))}
                            </Input>
                        </div>

                        <div>
                            <Label
                                htmlFor="duedate"
                                className="mb-1 font-semibold"
                            >
                                Due
                            </Label>
                            <Input
                                name="duedate"
                                onSelect={handleChange}
                                id="duedate"
                                type="datetime-local"
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
                                    work...
                                </>
                            ) : (
                                'Create work'
                            )}
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
}
