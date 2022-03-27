import { useEffect } from 'react';
import Container from '../Container';
import PAGE_TITLES from '../../constants/pageTitles';
import Input from '../forms/Input';
import WorkCard from '../cards/WorkCard';
import HeaderTabItem from './HeaderTabItem';

export default function Works() {
    useEffect(() => {
        document.title = PAGE_TITLES.WORKS;
    }, []);

    return (
        <>
            <Container
                maxWidthClass="max-w-2xl"
                className="w-full py-10 min-h-screen"
            >
                <HeaderTabItem title="Works" />

                <div className="space-y-2">
                    <WorkCard />
                </div>
            </Container>
        </>
    );
}
