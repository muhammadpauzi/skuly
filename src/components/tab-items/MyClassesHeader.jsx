import Input from '../forms/Input';

export default function MyClassesHeader() {
    return (
        <>
            <div>
                <h2 className="text-lg md:text-3xl font-black text-gray-900 mb-6">
                    My Classes
                </h2>
            </div>

            <div className="mb-4">
                <Input
                    type="text"
                    autoFocus
                    placeholder="Search by name or description..."
                />
            </div>
        </>
    );
}
