import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function ProductNotFound() {
  return (
    <main className="pt-24 min-h-screen flex items-center justify-center">
      <Container className="text-center">
        <h1 className="text-4xl mb-4">Product Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The product you&apos;re looking for doesn&apos;t exist.
        </p>
        <Button href="/products">Back to Products</Button>
      </Container>
    </main>
  );
}
