import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import Container from '../components/Container';
import Button from '../components/forms/Button';
import Spinner from '../components/Spinner';
import HeaderTabItem from '../components/tab-items/HeaderTabItem';
import PAGE_TITLES from '../constants/pageTitles';
import { useAuth } from '../contexts/useAuth';
import { useWorks } from '../hooks/useWorks';
import { fetcher } from '../utils/fetcher';

export default function WorkDetail() {
    const { user } = useAuth();
    const { isLoading, deleteWork } = useWorks();
    useEffect(() => {
        document.title = PAGE_TITLES.WORK_DETAIL;
    }, []);

    const params = useParams();

    const { data, error } = useSWR(
        `/works/${params.workId}?classId=${params.classId}`,
        fetcher
    );

    const handleDeleteClass = async () => {
        await deleteWork({ classId: params.classId, workId: params.workId });
    };

    // loading
    if (!data)
        return (
            <>
                <HeaderTabItem
                    title={data?.data?.work?.title}
                    withInputSearch={false}
                />
                <div className="py-10 flex items-center justify-center">
                    <Spinner
                        styleClassName="text-indigo-500"
                        dimensionClassName="w-6 h-6"
                    />
                </div>
            </>
        );

    const workData = data?.data?.work;

    return (
        <Container
            maxWidthClass="max-w-2xl"
            className="w-full py-10 min-h-screen"
        >
            {user._id === workData.author._id ? (
                <HeaderTabItem title={workData.title} withInputSearch={false}>
                    <Button
                        className="w-full md:w-auto"
                        paddingClassName="px-3 py-2.5"
                        textSizeClassName="text-sm"
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
                            'Delete this work'
                        )}
                    </Button>
                </HeaderTabItem>
            ) : (
                <HeaderTabItem title={workData.title} />
            )}
            <div className="py-5 space-y-2">
                <span className="block">
                    Type :{' '}
                    {workData.type[0].toUpperCase() +
                        workData.type.substring(1).toLowerCase()}
                </span>
                <span className="block">
                    {workData.duedate.formated1
                        ? 'Due ' + workData.duedate.formated1
                        : 'No Due'}
                </span>
            </div>
            <div className="space-y-2">{workData.description}</div>
        </Container>
    );
}
