import { Link } from 'react-router-dom';
import { classNames } from '../../utils';

export default function Button({
    className,
    children,
    styleClassName,
    paddingClassName,
    textSizeClassName,
    as = 'button',
    ...props
}) {
    const ElementAsButton = as === Link ? Link : `${as}`;
    paddingClassName = paddingClassName || 'px-5 py-2.5';
    textSizeClassName = textSizeClassName || 'text-base';
    const baseStyleClassName = classNames(
        className ? className : '',
        paddingClassName,
        textSizeClassName,
        'cursor-pointerborder border-transparent rounded font-medium focus:ring-2 ring-offset-2 transition'
    );
    styleClassName =
        styleClassName ||
        'text-white bg-indigo-500 hover:bg-indigo-400 focus:ring-indigo-400';

    return (
        <ElementAsButton
            {...props}
            className={classNames(baseStyleClassName, styleClassName)}
        >
            {children}
        </ElementAsButton>
    );
}
