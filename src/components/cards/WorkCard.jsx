import AppLink from '../app/AppLink';

export default function WorkCard({ _id, title, duedate }) {
    return (
        <AppLink
            to={`/classes/works/${_id}`}
            paddingClassName="p-5"
            className="block w-full rounded-md bg-white border-2 border-gray-100 hover:bg-indigo-50"
        >
            <h3 className="text-md md:text-lg mb-3 font-bold text-gray-800">{title}</h3>
            <p className="block text-sm text-gray-600 mb-4">{description}</p>
            <span className="text-sm text-gray-700 flex items-center">
                {duedate}
            </span>
        </AppLink>
    );
}
