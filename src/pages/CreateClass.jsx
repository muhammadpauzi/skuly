import { useEffect } from 'react';
import Container from '../components/Container';
import FormCreateClass from '../components/forms/FormCreateClass';
import PAGE_TITLES from '../constants/pageTitles';

export default function CreateClass() {
    // set title
    useEffect(() => {
        document.title = PAGE_TITLES.CREATE_NEW_CLASS;
    }, []);
    return (
        <Container
            maxWidthClass="max-w-2xl"
            className="w-full py-10 min-h-screen"
        >
            <FormCreateClass />
        </Container>
    );
}
