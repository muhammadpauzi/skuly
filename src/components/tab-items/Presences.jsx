import { useEffect } from 'react';
import PAGE_TITLES from '../../constants/pageTitles';
import TextMessageError from '../TextMessageError';
import HeaderTabItem from './HeaderTabItem';

export default function Presences() {
    useEffect(() => {
        document.title = PAGE_TITLES.PRESENCES;
    }, []);

    return (
        <>
            <HeaderTabItem title="Presences" withInputSearch={false} />
            <TextMessageError>
                This feature is not yet available.
            </TextMessageError>
        </>
    );
}
