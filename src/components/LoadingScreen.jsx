import Spinner from './Spinner';

export default function LoadingScreen() {
    return (
        <div className="absolute inset-0 grid place-content-center">
            <Spinner
                dimensionClassName="h-10 w-10"
                styleClassName="text-indigo-500"
            />
        </div>
    );
}
