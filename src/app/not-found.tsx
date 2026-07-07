import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-32 text-center">
      <p className="font-display text-7xl font-semibold text-mist-100/20">404</p>
      <h1 className="mt-4 font-display text-2xl font-medium text-mist-100">
        This page doesn&apos;t exist
      </h1>
      <p className="mt-3 max-w-sm text-sm text-mist-500">
        The page you&apos;re looking for may have moved. Let&apos;s get you
        back on track.
      </p>
      <div className="mt-8">
        <Button href="/">Back to homepage</Button>
      </div>
    </section>
  );
}
