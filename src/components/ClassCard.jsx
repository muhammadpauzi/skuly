import AppLink from "./AppLink";
import { UserIcon } from "@heroicons/react/solid";

export default function ClassCard() {
  return (
    <AppLink
      to="classes/1"
      className="block w-full py-4 px-5 rounded-md bg-white border-l-4 border-t-2 border-r-2 border-b-2 border-gray-200 border-l-orange-500"
    >
      <h3 className="text-lg mb-3 font-bold text-gray-800">My First Class</h3>
      <p className="block text-sm text-gray-600 mb-4">
        XII TKJ 1 - SMK Negeri 1 Stabat
      </p>
      <AppLink
        to="/teacher/asd"
        className="text-sm text-gray-800 hover:text-orange-500 flex items-center"
      >
        <UserIcon className="w-5 h-5 mr-2" /> Muhammad Pauzi
      </AppLink>
    </AppLink>
  );
}
