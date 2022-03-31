import AppLink from '../app/AppLink';

export default function WorkCard({
    _id,
    title,
    description,
    createdAt,
    class: classId,
    updatedAt,
}) {
    return (
        <AppLink
            to={`/classes/${classId}/works/${_id}`}
            paddingClassName="p-5"
            className="block w-full rounded-md bg-white border-2 border-gray-100 hover:bg-indigo-50"
        >
            <h3 className="text-md md:text-lg mb-3 font-bold text-gray-800">
                {title}
            </h3>
            {description && (
                <p className="block text-sm text-gray-600 mb-4">
                    {description}
                </p>
            )}
            <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-700 flex items-center">
                    {createdAt.formated1}{' '}
                    {createdAt.default !== updatedAt.default
                        ? `(Edited ${updatedAt.formated1})`
                        : ''}
                </span>
                {/* <span className="text-sm text-gray-700 flex items-center">
                    {duedate ? 'Due ' + duedate.formated1 : 'No Due'}
                </span> */}
            </div>
        </AppLink>
    );
}
