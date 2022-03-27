import { useEffect } from 'react';
import useSWR from 'swr';
import PAGE_TITLES from '../../constants/pageTitles';
import { fetcher } from '../../utils/fetcher';
import ClassCard from '../cards/ClassCard';
import HeaderTabItem from '../HeaderTabItem';
import Spinner from '../Spinner';

export default function Presences() {
    useEffect(() => {
        document.title = PAGE_TITLES.PRESENCES;
    }, []);

    return (
        <>
            <HeaderTabItem title="Presences" withInputSearch={false} />
            <h3 className="text-lg font-bold text-center py-10 text-red-500">
                This feature is not yet available.
            </h3>
        </>
    );
}
