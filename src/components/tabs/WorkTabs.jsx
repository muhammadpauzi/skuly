import { Tab } from "@headlessui/react";
import AppTab from "../app/AppTab";

export default function WorkTabs() {
  return (
    <Tab.Group>
      <Tab.List className="grid grid-cols-3">
        <AppTab>Works</AppTab>
        <AppTab>Students</AppTab>
        <AppTab>Settings</AppTab>
      </Tab.List>
      <Tab.Panels className="py-10">
        <Tab.Panel>Works</Tab.Panel>
        <Tab.Panel>Students</Tab.Panel>
        <Tab.Panel>Settings</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
