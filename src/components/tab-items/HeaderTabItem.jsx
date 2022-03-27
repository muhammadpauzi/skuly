import Input from '../forms/Input';

export default function HeaderTabItem({
    children,
    title,
    withInputSearch = true,
}) {
    return (
        <>
            <div
                className={
                    children ? 'flex items-center justify-between mb-6' : 'mb-6'
                }
            >
                <h2 className="text-lg md:text-3xl font-black text-gray-900">
                    {title}
                </h2>

                {children && <div>{children}</div>}
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
