import { useEffect } from 'react';
import Container from '../components/Container';
import FormCreateClass from '../components/forms/FormCreateClass';
import FormCreateWork from '../components/forms/FormCreateWork';
import PAGE_TITLES from '../constants/pageTitles';

export default function CreateWork() {
    // set title
    useEffect(() => {
        document.title = PAGE_TITLES.CREATE_NEW_WORK;
    }, []);
    return (
        <Container
            maxWidthClass="max-w-2xl"
            className="w-full py-10 min-h-screen"
        >
            <FormCreateWork />
        </Container>
    );
}
