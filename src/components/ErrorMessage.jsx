import { classNames } from '../utils';

export default function ErrorMessage({ errors = [], className, ...props }) {
    return (
        <>
            {errors.length > 0 && (
                <div
                    className={classNames(
                        className || '',
                        'bg-red-50 p-4 py-5 my-5 rounded-md border border-red-100'
                    )}
                    {...props}
                >
                    <div className="font-medium text-red-600">
                        Whoops! Something went wrong.
                    </div>

                    <ul className="mt-3 list-disc leading-relaxed list-inside text-sm text-red-600">
                        {errors.map((error) => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
}
