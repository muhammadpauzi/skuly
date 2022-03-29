import { useEffect } from 'react';
import PAGE_TITLES from '../../constants/pageTitles';
import { Link, useParams } from 'react-router-dom';
import WorkCard from '../cards/WorkCard';
import HeaderTabItem from './HeaderTabItem';
import useSWR from 'swr';
import { fetcher } from '../../utils/fetcher';
import Spinner from '../Spinner';
import TextMessageError from '../TextMessageError';
import Button from '../forms/Button';
import { useAuth } from '../../contexts/useAuth';

export default function Works() {
    const { user } = useAuth();
    useEffect(() => {
        document.title = PAGE_TITLES.WORKS;
    }, []);

    const params = useParams();

    const { data, error } = useSWR(`/classes/${params.id}/works`, fetcher);

    // loading
    if (!data)
        return (
            <>
                <HeaderTabItem title={data?.data?.name} />
                <div className="py-10 flex items-center justify-center">
                    <Spinner
                        styleClassName="text-indigo-500"
                        dimensionClassName="w-6 h-6"
                    />
                </div>
            </>
        );

    const classData = data?.data;
    const works = classData?.works;

    return (
        <>
            {user._id === classData.teacher ? (
                <HeaderTabItem title={classData.name}>
                    <Button
                        as={Link}
                        to={`/classes/${params.id}/create-work`}
                        paddingClassName="px-3 py-2.5"
                        textSizeClassName="text-sm"
                    >
                        Create new work
                    </Button>
                </HeaderTabItem>
            ) : (
                <HeaderTabItem title={classData.name} />
            )}

            <div className="space-y-2">
                {works && works.length > 0 ? (
                    works.map((work) => <WorkCard key={work._id} {...work} />)
                ) : (
                    <TextMessageError>
                        This class has no works.
                    </TextMessageError>
                )}
            </div>
        </>
    );
}
