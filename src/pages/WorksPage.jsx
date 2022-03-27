import Container from "../components/Container";
import WorkTabs from "../components/tabs/WorkTabs";

export default function Classes() {
  return (
    <Container maxWidthClass="max-w-2xl" className="w-full py-10 min-h-screen">
      <WorkTabs />
    </Container>
  );
}
