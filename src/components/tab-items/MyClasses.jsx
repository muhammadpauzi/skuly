import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import useSWR from 'swr';
import PAGE_TITLES from '../../constants/pageTitles';
import { fetcher } from '../../utils/fetcher';
import ClassCard from '../cards/ClassCard';
import HeaderTabItem from './HeaderTabItem';
import Spinner from '../Spinner';
import Button from '../forms/Button';
import TextMessageError from '../TextMessageError';

export default function MyClasses() {
    useEffect(() => {
        document.title = PAGE_TITLES.MY_CLASSES;
    }, []);

    const { data, error } = useSWR('/classes/me?with_teacher=true', fetcher);

    // loading
    if (!data)
        return (
            <>
                <HeaderTabItem title="My Classes" />
                <div className="py-10 flex items-center justify-center">
                    <Spinner
                        styleClassName="text-indigo-500"
                        dimensionClassName="w-6 h-6"
                    />
                </div>
            </>
        );

    const classes = data?.data;

    return (
        <>
            <HeaderTabItem title="My Classes">
                <Button
                    as={Link}
                    to="/classes/create"
                    paddingClassName="px-3 py-2.5"
                    textSizeClassName="text-sm"
                >
                    Create new class
                </Button>
            </HeaderTabItem>
            <div className="space-y-2">
                {classes && classes.length > 0 ? (
                    classes.map((_class) => (
                        <ClassCard key={_class._id} {..._class} />
                    ))
                ) : (
                    <TextMessageError>
                        You don't have any classes.
                    </TextMessageError>
                )}
            </div>
        </>
    );
}
