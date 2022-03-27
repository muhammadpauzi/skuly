import { useEffect, useState } from 'react';
import useSWR from 'swr';
import PAGE_TITLES from '../../constants/pageTitles';
import { fetcher } from '../../utils/fetcher';
import ClassCard from '../cards/ClassCard';
import Spinner from '../Spinner';
import Input from '../forms/Input';
import MyClassesHeader from './MyClassesHeader';

export default function MyClasses() {
    useEffect(() => {
        document.title = PAGE_TITLES.MY_CLASSES;
    }, []);

    const { data, error } = useSWR('/classes/me?with_teacher=true', fetcher);

    // loading
    if (!data)
        return (
            <>
                <MyClassesHeader />
                <div className="py-10 flex items-center justify-center">
                    <Spinner
                        styleClassName="text-orange-500"
                        dimensionClassName="w-6 h-6"
                    />
                </div>
            </>
        );

    const classes = data?.data;

    return (
        <>
            <MyClassesHeader />
            <div className="space-y-2">
                {classes && classes.length > 0 ? (
                    classes.map((_class) => (
                        <ClassCard key={_class._id} {..._class} />
                    ))
                ) : (
                    <h3 className="text-lg font-bold text-center py-10 text-red-500">
                        You don't have any classes.
                    </h3>
                )}
            </div>
        </>
    );
}
