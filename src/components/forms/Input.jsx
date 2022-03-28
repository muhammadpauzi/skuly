import { classNames } from '../../utils';

export default function Input({
    as,
    children,
    styleClassName,
    className,
    ...props
}) {
    const baseStyleClassName = classNames(
        className ? className : '',
        'rounded-md relative block w-full px-3 py-2.5 focus:z-10 text-sm md:text-sm transition'
    );
    styleClassName =
        styleClassName ||
        'border-2 border-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500';

    if (as === 'select')
        return (
            <select
                {...props}
                className={classNames(baseStyleClassName, styleClassName)}
            >
                {children}
            </select>
        );

    return (
        <input
            {...props}
            className={classNames(baseStyleClassName, styleClassName)}
        />
    );
}
