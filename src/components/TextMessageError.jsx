export default function TextMessageError({ children }) {
    return (
        <h3 className="text-sm md:text-lg font-bold text-center py-10 text-red-500">
            {children}
        </h3>
    );
}
