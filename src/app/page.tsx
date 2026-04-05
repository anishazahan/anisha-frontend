import { ThemeToggle } from "@/components/custom/ThemeToggle";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="p-10 grid grid-cols-3 gap-4  rounded-custom">
      <div className="flex flex-col items-center gap-4">
        <p className="text-body-sm text-neutral-500 uppercase tracking-widest">
          Switch Theme
        </p>
        <ThemeToggle />
      </div>

      {/* Testing with your Buttons */}
      <div className="flex gap-4">
        <Button variant="primary" size="lg">
          Primary Action
        </Button>
        <Button variant="dark" size="pill">
          Pill Toggle
        </Button>
      </div>

      <div className="max-w-md text-center">
        <h1 className="text-h2 mb-4">Responsive Design Test</h1>
        <p className="text-body-normal text-neutral-500">
          This text will change color when you click the toggle above, provided
          you added the CSS variables to your globals.css.
        </p>
      </div>
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
