import { Dialog } from '@headlessui/react';
import { UserAddIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { useClasses } from '../../hooks/useClasses';
import Button from '../forms/Button';
import Input from '../forms/Input';
import Label from '../forms/Label';
import Modal from './Modal';

export default function JoinModal({ isOpen, setIsOpen }) {
    const [code, setCode] = useState('');
    const { joinClass } = useClasses();

    const handleJoinClass = async (e) => {
        e.preventDefault();
        if (!code.trim()) return;
        await joinClass({ code });
        setCode('');
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
                    Join Class
                </Dialog.Title>
                <div className="mt-2">
                    <p className="text-sm text-gray-500">
                        Enter the code of the class you want to join, if you
                        don't khow the class code of the class you want to join
                        please ask the teacher or class owner.
                    </p>
                    <form
                        className="mt-8 space-y-6"
                        action="#"
                        method="POST"
                        onSubmit={handleJoinClass}
                    >
                        <div>
                            <Label
                                htmlFor="code"
                                className="text-left mb-1 font-semibold"
                            >
                                Code
                            </Label>
                            <Input
                                id="code"
                                name="code"
                                type="text"
                                maxLength={20}
                                autoComplete="code"
                                required
                                onChange={(e) => setCode(e.target.value)}
                                value={code}
                                className="mb-2"
                            />
                        </div>
                    </form>
                </div>
            </div>
            <Button
                onClick={handleJoinClass}
                className="block md:inline-block mr-0 md:mr-2 w-full md:w-auto mb-2 md:mb-0"
            >
                Join Class
            </Button>
        </Modal>
    );
}
