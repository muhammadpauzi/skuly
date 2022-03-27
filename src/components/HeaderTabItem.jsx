import Input from './forms/Input';

export default function HeaderTabItem({ title, withInputSearch = true }) {
    return (
        <>
            <div>
                <h2 className="text-lg md:text-3xl font-black text-gray-900 mb-6">
                    {title}
                </h2>
            </div>

            <div className="mb-4">
                {withInputSearch && (
                    <Input
                        type="text"
                        autoFocus
                        placeholder="Search by name or description..."
                    />
                )}
            </div>
        </>
    );
}
