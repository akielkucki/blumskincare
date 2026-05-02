import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function ServiceNotFound() {
  return (
    <main className="pt-24 min-h-screen flex items-center justify-center">
      <Container className="text-center">
        <h1 className="text-4xl mb-4">Service Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The service you&apos;re looking for doesn&apos;t exist or has been
          removed.
        </p>
        <Button href="/services">Back to Services</Button>
      </Container>
    </main>
  );
}
