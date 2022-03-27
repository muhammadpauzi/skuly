import { useEffect } from "react";
import PAGE_TITLES from "../../constants/pageTitles";
import ClassCard from "../cards/ClassCard";
import Input from "../forms/Input";

export default function MyClasses() {
  useEffect(() => {
    document.title = PAGE_TITLES.MY_CLASSES;
  }, []);

  return (
    <>
      <div>
        <h2 className="text-lg md:text-3xl font-black text-gray-900 mb-6">
          My Classes
        </h2>
      </div>

      <div className="mb-4">
        <Input
          type="text"
          autoFocus
          placeholder="Search by name or description..."
        />
      </div>

      <div className="space-y-2">
        <ClassCard />
      </div>
    </>
  );
}
