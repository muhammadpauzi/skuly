import AppLink from '../app/AppLink';
import { UserIcon } from '@heroicons/react/solid';

export default function ClassCard({ _id, name, description, teacher }) {
    return (
        <AppLink
            to={`/classes/${_id}`}
            paddingClassName="p-5"
            className="block w-full rounded-md bg-white border-2 border-gray-100 hover:bg-indigo-50"
        >
            <h3 className="text-md md:text-lg mb-3 font-bold text-gray-800">
                {name}
            </h3>
            {description && (
                <p className="block text-sm text-gray-600 mb-4">
                    {description}
                </p>
            )}
            <span className="text-sm text-gray-700 flex items-center">
                <UserIcon className="w-5 h-5 mr-2" /> {teacher.name}
            </span>
        </AppLink>
    );
}
