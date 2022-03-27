import { classNames } from '../utils';

export default function Container({ className, children, maxWidthClass }) {
    maxWidthClass = maxWidthClass || 'max-w-5xl';
    return (
        <div
            className={classNames(
                maxWidthClass,
                'mx-auto px-2 sm:px-5 md:px-8',
                className
            )}
        >
            {children}
        </div>
    );
}
