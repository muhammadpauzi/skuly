import { useEffect } from "react";
import AppLink from "../components/AppLink";
import Container from "../components/Container";
import PAGE_TITLES from "../constants/pageTitles";
import { UserIcon } from "@heroicons/react/solid";

export default function MyClasses() {
  useEffect(() => {
    document.title = PAGE_TITLES.MY_CLASSES;
  });

  return (
    <>
      <Container
        maxWidthClass="max-w-2xl"
        className="w-full space-y-8 py-10 min-h-screen"
      >
        <div>
          <h2 className="text-3xl font-black text-gray-900">My Classes</h2>
        </div>

        <div className="space-y-2">
          <AppLink
            to="classes/1"
            className="block w-full py-4 px-5 rounded-md bg-white border-l-4 border-t-2 border-r-2 border-b-2 border-gray-200 border-l-orange-500"
          >
            <h3 className="text-lg mb-3 font-bold text-gray-800">
              My First Class
            </h3>
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
          <AppLink
            to="classes/1"
            className="block w-full py-4 px-5 rounded-md bg-white border-l-4 border-t-2 border-r-2 border-b-2 border-gray-200 border-l-orange-500"
          >
            <h3 className="text-lg mb-3 font-bold text-gray-800">
              My First Class
            </h3>
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
        </div>
      </Container>
    </>
  );
}
