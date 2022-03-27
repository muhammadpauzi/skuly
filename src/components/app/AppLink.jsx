import { Link } from 'react-router-dom';
import { classNames } from '../../utils';

export default function AppLink({
    className,
    children,
    paddingClassName,
    styleClassName,
    ...props
}) {
    paddingClassName = paddingClassName || 'px-2 py-1';
    const baseStyleClassName = classNames(
        className ? className : '',
        paddingClassName,
        'text-base rounded transition focus:ring-2 ring-offset-2 font-medium'
    );
    styleClassName =
        styleClassName ||
        'text-gray-500 hover:text-gray-900 focus:ring-indigo-200';

    return (
        <Link
            {...props}
            className={classNames(baseStyleClassName, styleClassName)}
        >
            {children}
        </Link>
    );
}
