import AppLink from '../app/AppLink';

export default function WorkCard() {
    return (
        <AppLink
            to="classes/1"
            className="block w-full py-4 px-5 rounded-md bg-white border-l-4 border-t-2 border-r-2 border-b-2 border-gray-100 border-l-orange-500"
        >
            <h3 className="text-lg mb-3 font-bold text-gray-800">
                My First Class Work
            </h3>
            <p className="block text-sm text-gray-600 mb-4">Reading this ...</p>
            <small className="text-gray-700 font-medium">
                Duedate : 2022 Mar, 20 20:00 PM{' '}
            </small>
        </AppLink>
    );
}
