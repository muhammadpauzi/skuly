import { useEffect } from "react";
import Container from "../Container";
import PAGE_TITLES from "../../constants/pageTitles";
import Input from "../forms/Input";
import WorkCard from "../cards/WorkCard";

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
        <div>
          <h2 className="text-lg md:text-3xl font-black text-gray-900 mb-6">
            Works
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
          <WorkCard />
        </div>
      </Container>
    </>
  );
}
