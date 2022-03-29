import { useEffect, useState } from 'react';
import useSWR from 'swr';
import PAGE_TITLES from '../../constants/pageTitles';
import { fetcher } from '../../utils/fetcher';
import ClassCard from '../cards/ClassCard';
import HeaderTabItem from './HeaderTabItem';
import Button from '../forms/Button';
import Spinner from '../Spinner';
import TextMessageError from '../TextMessageError';
import JoinModal from '../modals/JoinModal';

export default function MyJoinedClasses() {
    const [isOpenJoinModal, setIsOpenJoinModal] = useState(false);

    useEffect(() => {
        document.title = PAGE_TITLES.MY_JOINED_CLASSES;
    }, []);

    const { data, error } = useSWR(
        '/classes/joined?with_teacher=true',
        fetcher
    );

    // loading
    if (!data)
        return (
            <>
                <HeaderTabItem title="Joined Classes" />
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
            <HeaderTabItem title="Joined Classes">
                <Button
                    onClick={() => setIsOpenJoinModal(true)}
                    paddingClassName="px-3 py-2"
                    textSizeClassName="text-sm"
                >
                    Join class
                </Button>
            </HeaderTabItem>
            <div className="space-y-2">
                {classes && classes.length > 0 ? (
                    classes.map((_class) => (
                        <ClassCard key={_class._id} {..._class} />
                    ))
                ) : (
                    <TextMessageError>
                        You haven't joined any classes yet.
                    </TextMessageError>
                )}
            </div>
            <JoinModal
                isOpen={isOpenJoinModal}
                setIsOpen={setIsOpenJoinModal}
            />
        </>
    );
}
