import { Tab } from '@headlessui/react';
import AppTab from '../app/AppTab';
import MyClasses from '../tab-items/MyClasses';
import MyJoinedClasses from '../tab-items/JoinedClasses';
import Presences from '../tab-items/Presences';

export default function ClassTabs() {
    return (
        <Tab.Group>
            <Tab.List className="grid grid-cols-3">
                <AppTab>My Classes</AppTab>
                <AppTab>Joined Classes</AppTab>
                <AppTab>Presences</AppTab>
            </Tab.List>
            <Tab.Panels className="py-10">
                <Tab.Panel>
                    <MyClasses />
                </Tab.Panel>
                <Tab.Panel>
                    <MyJoinedClasses />
                </Tab.Panel>
                <Tab.Panel>
                    <Presences />
                </Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    );
}
