import AppLink from '../app/AppLink';

export default function UserCard({ username, name }) {
    return (
        <div className="px-5 py-4 block w-full rounded-md bg-white border-2 border-gray-100">
            <h3 className="text-lg mb-2 font-bold text-gray-800">{name}</h3>
            <p className="block text-sm text-gray-600">{username}</p>
        </div>
    );
}
