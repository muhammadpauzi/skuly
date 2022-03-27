import { Tab } from '@headlessui/react';
import AppTab from '../app/AppTab';
import Settings from '../tab-items/Settings';
import Students from '../tab-items/Students';
import Works from '../tab-items/Works';

export default function WorkTabs() {
    return (
        <Tab.Group>
            <Tab.List className="grid grid-cols-3">
                <AppTab>Works</AppTab>
                <AppTab>Students</AppTab>
                <AppTab>Settings</AppTab>
            </Tab.List>
            <Tab.Panels>
                <Tab.Panel>
                    <Works />
                </Tab.Panel>
                <Tab.Panel>
                    <Students />
                </Tab.Panel>
                <Tab.Panel>
                    <Settings />
                </Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    );
}
