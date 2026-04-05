import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="p-10 grid grid-cols-3 gap-4 bg-neutral-100 rounded-custom">
      {/* Row 1: Primary Blue Variants */}
      <Button variant="primary">Button</Button>
      <Button variant="dark">Button</Button>
      <Button variant="dark" size="pill">
        Button
      </Button>

      {/* Row 2: Lighter Variants */}
      <Button variant="secondary">Button</Button>
      <Button variant="dark_light">Button</Button>
      <Button variant="dark_light" size="pill">
        Button
      </Button>

      {/* Row 3: Solid/Active Variants */}
      <Button className="bg-primary-700">Button</Button>
      <Button className="bg-black">Button</Button>
      <Button className="bg-black" size="pill">
        Button
      </Button>
    </div>
  );
}
