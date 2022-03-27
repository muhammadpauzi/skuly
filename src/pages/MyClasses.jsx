import { useEffect } from "react";
import Container from "../components/Container";
import PAGE_TITLES from "../constants/pageTitles";
import ClassCard from "../components/ClassCard";
import Input from "../components/Input";

export default function MyClasses() {
  useEffect(() => {
    document.title = PAGE_TITLES.MY_CLASSES;
  });

  return (
    <>
      <Container
        maxWidthClass="max-w-2xl"
        className="w-full py-10 min-h-screen"
      >
        <div>
          <h2 className="text-lg md:text-3xl font-black text-gray-900 mb-6">
            My Classes
          </h2>
        </div>

        <div className="mb-4">
          <Input
            type="text"
            autofocus
            placeholder="Search by name or description..."
          />
        </div>

        <div className="space-y-2">
          <ClassCard />
        </div>
      </Container>
    </>
  );
}
