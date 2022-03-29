import { useEffect, useState } from 'react';
import PAGE_TITLES from '../../constants/pageTitles';
import { useParams } from 'react-router-dom';
import HeaderTabItem from './HeaderTabItem';
import useSWR from 'swr';
import { fetcher } from '../../utils/fetcher';
import Spinner from '../Spinner';
import Button from '../forms/Button';
import { useAuth } from '../../contexts/useAuth';
import { useClasses } from '../../hooks/useClasses';
import UpdateClassModal from '../modals/UpdateClassModal';

export default function Settings() {
    const { user } = useAuth();
    const [isOpenUpdateClassModal, setIsOpenUpdateClassModal] = useState(false);
    const { isLoading, deleteClass } = useClasses();
    useEffect(() => {
        document.title = PAGE_TITLES.SETTINGS;
    }, []);

    const params = useParams();
    const { data, error } = useSWR(`/classes/${params.id}`, fetcher);
    const { data: codeData, error: codeError } =
        user._id === data?.data.teacher &&
        useSWR(`/classes/${params.id}/code`, fetcher);

    // loading
    if (!data)
        return (
            <>
                <HeaderTabItem title="Settings" withInputSearch={false} />
                <div className="py-10 flex items-center justify-center">
                    <Spinner
                        styleClassName="text-indigo-500"
                        dimensionClassName="w-6 h-6"
                    />
                </div>
            </>
        );

    const classData = data?.data;

    const handleDeleteClass = async () => {
        confirm('Are sure to delete this class?') &&
            (await deleteClass({ id: params.id }));
    };

    return (
        <>
            <HeaderTabItem title="Settings" withInputSearch={false} />

            <div className="bg-white rounded-md p-7 border-2 border-gray-100 text-indigo-500 font-bold text-sm md:text-md">
                <div className="space-y-4 mb-8">
                    <h4>
                        Class Name :{' '}
                        <span className="mt-2 block text-gray-600 font-normal">
                            {classData?.name}
                        </span>
                    </h4>
                    <h4>
                        Description :{' '}
                        <span className="mt-2 block text-gray-600 font-normal">
                            {classData?.description}
                        </span>
                    </h4>
                    <h4>
                        Created at :{' '}
                        <span className="mt-2 block text-gray-600 font-normal">
                            {classData?.createdAt}
                        </span>
                    </h4>
                    <h4>
                        Updated at :{' '}
                        <span className="mt-2 block text-gray-600 font-normal">
                            {classData?.updatedAt}
                        </span>
                    </h4>
                    {user._id === classData.teacher && (
                        <h4>
                            Class Code :{' '}
                            <span className="mt-2 block text-gray-600 font-normal">
                                {codeData?.data?.code}
                            </span>
                        </h4>
                    )}
                </div>

                <div className="flex items-center justify-end space-y-2 md:space-y-0 md:space-x-3 flex-col md:flex-row">
                    {user._id === classData.teacher && (
                        <>
                            <Button
                                className="w-full md:w-auto"
                                onClick={() => setIsOpenUpdateClassModal(true)}
                            >
                                Update class
                            </Button>
                            <Button
                                className="w-full md:w-auto"
                                onClick={handleDeleteClass}
                                styleClassName={
                                    isLoading
                                        ? 'text-white bg-red-400'
                                        : 'bg-red-500 hover:bg-red-600 text-white focus:ring-red-600'
                                }
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <Spinner className="mr-3" /> Deleting...
                                    </>
                                ) : (
                                    'Delete this class'
                                )}
                            </Button>
                        </>
                    )}
                </div>
            </div>
            <UpdateClassModal
                isOpen={isOpenUpdateClassModal}
                setIsOpen={setIsOpenUpdateClassModal}
            />
        </>
    );
}
