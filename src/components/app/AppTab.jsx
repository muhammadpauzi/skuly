import { Tab } from '@headlessui/react';
import { Fragment } from 'react';
import { classNames } from '../../utils';

export default function AppTab({
    className,
    children,
    paddingClassName,
    styleClassName,
    selectedClassName,
    ...props
}) {
    paddingClassName = paddingClassName || 'px-4 py-3';
    const baseStyleClassName = classNames(
        className ? className : '',
        paddingClassName,
        'text-base text-center transition focus:ring-2 ring-offset-2 font-medium border-b-2 border-b-gray-200'
    );
    styleClassName =
        styleClassName ||
        'text-gray-500 hover:text-gray-900 focus:ring-indigo-200';
    selectedClassName =
        selectedClassName ||
        'font-bold text-gray-900 focus:ring-indigo-200 border-b-indigo-200';

    return (
        <Tab
            {...props}
            className={({ selected }) =>
                classNames(
                    baseStyleClassName,
                    selected ? selectedClassName : styleClassName
                )
            }
        >
            {children}
        </Tab>
    );
}
