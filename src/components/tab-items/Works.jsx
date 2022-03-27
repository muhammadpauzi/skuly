import { useEffect } from 'react';
import Container from '../Container';
import PAGE_TITLES from '../../constants/pageTitles';
import { useParams } from 'react-router-dom';
import WorkCard from '../cards/WorkCard';
import HeaderTabItem from './HeaderTabItem';
import useSWR from 'swr';
import { fetcher } from '../../utils/fetcher';
import Spinner from '../Spinner';

export default function Works() {
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
            <Container
                maxWidthClass="max-w-2xl"
                className="w-full py-10 min-h-screen"
            >
                <HeaderTabItem title={classData.name} />

                <div className="space-y-2">
                    {works && works.length > 0 ? (
                        works.map((work) => (
                            <WorkCard key={work._id} {...work} />
                        ))
                    ) : (
                        <h3 className="text-lg font-bold text-center py-10 text-red-500">
                            This class has no works.
                        </h3>
                    )}
                </div>
            </Container>
        </>
    );
}
