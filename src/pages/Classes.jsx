import Container from "../components/Container";
import ClassTabs from "../components/tabs/ClassTabs";

export default function Classes() {
  // set title

  return (
    <Container maxWidthClass="max-w-2xl" className="w-full py-10 min-h-screen">
      <ClassTabs />
    </Container>
  );
}
