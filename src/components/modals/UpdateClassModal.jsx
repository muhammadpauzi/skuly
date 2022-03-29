import { Dialog } from '@headlessui/react';
import { UserAddIcon } from '@heroicons/react/solid';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useSWR from 'swr';
import { useClasses } from '../../hooks/useClasses';
import { fetcher } from '../../utils/fetcher';
import ErrorMessage from '../ErrorMessage';
import Button from '../forms/Button';
import Input from '../forms/Input';
import Label from '../forms/Label';
import Spinner from '../Spinner';
import Modal from './Modal';

export default function UpdateClassModal({ isOpen, setIsOpen }) {
    const { updateClass, isLoading } = useClasses();
    const [errors, setErrors] = useState([]);
    const [fields, setFields] = useState({
        name: '',
        description: '',
    });

    const params = useParams();
    const { data, error, mutate } = useSWR(`/classes/${params.id}`, fetcher);

    useEffect(() => {
        if (data?.data)
            setFields({
                name: data?.data.name,
                description: data?.data.description,
            });
    }, [data, isOpen]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateClass({
            setErrors,
            classId: params.id,
            name: fields.name,
            description: fields.description,
        });
        // update data in settings page
        mutate();
        // close the modal
        setIsOpen(false);
    };

    const handleChange = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100">
                <UserAddIcon
                    className="h-6 w-6 text-indigo-500"
                    aria-hidden="true"
                />
            </div>
            <div className="mt-3 text-center sm:text-left">
                <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-medium text-gray-900"
                >
                    Update Class
                </Dialog.Title>
                <div className="mt-2">
                    <form
                        className="mt-8 space-y-6"
                        action="#"
                        method="POST"
                        onSubmit={handleSubmit}
                    >
                        <ErrorMessage errors={errors} />
                        <div>
                            <Label
                                htmlFor="name"
                                className="text-left mb-1 font-semibold"
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
                                value={fields.name}
                                className="mb-2"
                            />
                        </div>

                        <div>
                            <Label
                                htmlFor="description"
                                className="text-left mb-1 font-semibold"
                            >
                                Description
                            </Label>
                            <Input
                                id="description"
                                name="description"
                                type="text"
                                autoComplete="description"
                                value={fields.description}
                                onChange={handleChange}
                                className="mb-2"
                            />
                        </div>
                        <div>
                            <Button
                                type="submit"
                                className="block md:inline-block mr-0 md:mr-2 w-full md:w-auto mb-2 md:mb-0"
                                styleClassName={
                                    isLoading ? 'text-white bg-indigo-400' : ''
                                }
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <Spinner className="mr-3" /> Update
                                        class...
                                    </>
                                ) : (
                                    'Update class'
                                )}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    );
}
