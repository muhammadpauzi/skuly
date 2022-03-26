import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  PencilIcon,
  PencilAltIcon,
} from "@heroicons/react/outline";
import Logo from "./Logo";
import Button from "./Button";
import AppLink from "./AppLink";
import Container from "./Container";
import { Link } from "react-router-dom";

const links = [
  {
    name: "My Classes",
    href: "/my-classes",
    icon: PencilIcon,
  },
  {
    name: "Classes",
    href: "/classes",
    icon: PencilAltIcon,
  },
];

export default function Navbar() {
  return (
    <Popover className="relative bg-white z-50 border-b-2 border-gray-100">
      <Container>
        <div className="flex justify-between items-center py-6 md:py-4">
          <div className="flex items-center md:space-x-10">
            <Logo className="flex items-center">Skuly.</Logo>
            <div className="hidden md:flex space-x-6 justify-start">
              {links.map((link, i) => {
                return (
                  <AppLink key={i} to={link.href}>
                    {link.name}
                  </AppLink>
                );
              })}
            </div>
          </div>
          <div className="flex items-center gap-x-4 place-self-end">
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-2">
            <Button
              as={Link}
              to="/sign-in"
              styleClassName="bg-orange-50 hover:bg-orange-100 text-orange-500 focus:ring-orange-100"
            >
              Sign in
            </Button>
            <Button as={Link} to="/sign-up">
              Create an account
            </Button>
          </div>
        </div>
      </Container>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between mb-5">
                <Logo>Easy</Logo>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="block md:hidden space-y-4">
                {links.map((link, i) => {
                  return (
                    <AppLink key={i} to={link.href} className="block w-full">
                      {link.name}
                    </AppLink>
                  );
                })}
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <Button
                  as={Link}
                  to="/sign-up"
                  className="w-full block text-center"
                >
                  Create an account
                </Button>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  <span className="inline-block mr-4">
                    Already have an account?
                  </span>
                  <Button
                    as={Link}
                    to="/sign-in"
                    className="bg-orange-50 hover:bg-orange-100 text-orange-500 focus:ring-orange-100"
                  >
                    Sign in
                  </Button>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
