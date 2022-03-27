import { useEffect } from 'react';
import Container from '../Container';
import PAGE_TITLES from '../../constants/pageTitles';
import { useParams } from 'react-router-dom';
import WorkCard from '../cards/WorkCard';
import HeaderTabItem from './HeaderTabItem';
import useSWR from 'swr';
import { fetcher } from '../../utils/fetcher';
import Spinner from '../Spinner';
import UserCard from '../cards/UserCard';
import TextMessageError from '../TextMessageError';

export default function Students() {
    useEffect(() => {
        document.title = PAGE_TITLES.STUDENTS;
    }, []);

    const params = useParams();

    const { data, error } = useSWR(
        `/classes/${params.id}?with_students=true`,
        fetcher
    );

    // loading
    if (!data)
        return (
            <>
                <HeaderTabItem title="Students" withInputSearch={false} />
                <div className="py-10 flex items-center justify-center">
                    <Spinner
                        styleClassName="text-indigo-500"
                        dimensionClassName="w-6 h-6"
                    />
                </div>
            </>
        );

    const classData = data?.data;
    const students = classData?.students;
    const teacher = classData?.teacher;

    return (
        <>
            <Container
                maxWidthClass="max-w-2xl"
                className="w-full py-10 min-h-screen"
            >
                <HeaderTabItem title="Students" withInputSearch={false} />
                <div>
                    <div className="mb-4">
                        <small className="text-md font-bold text-gray-600 uppercase block mb-4">
                            Teacher
                        </small>
                        <UserCard key={teacher._id} {...teacher} />
                    </div>
                    <small className="text-md font-bold text-gray-600 uppercase block mb-4">
                        Students
                    </small>
                </div>
                <div className="space-y-2">
                    {students && students.length > 0 ? (
                        students.map((student) => (
                            <UserCard key={student._id} {...student} />
                        ))
                    ) : (
                        <TextMessageError>
                            This class has no students.
                        </TextMessageError>
                    )}
                </div>
            </Container>
        </>
    );
}
