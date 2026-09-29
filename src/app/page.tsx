import Image from "next/image";
import { BarChart3, Search, Share2, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";
import { SectionHeading } from "@/components/shared/section-heading";
import { images } from "@/constants/images";

const scales = [
  { name: "neutral", label: "Neutral / Shuttle Gray" },
  { name: "primary", label: "Primary / Electric Violet" },
  { name: "secondary", label: "Secondary / Electric Lime" },
] as const;

const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;

const typeScale = [
  { className: "heading-l", label: "Heading L · Poppins SemiBold 72/120%" },
  { className: "heading-m", label: "Heading M · Poppins SemiBold 44/120%" },
  { className: "heading-s", label: "Heading S · Poppins SemiBold 36/120%" },
  { className: "heading-xs", label: "Heading XS · Poppins SemiBold 20/120%" },
  { className: "body-l", label: "Body L · Satoshi Regular 18/160%" },
  { className: "body-m", label: "Body M · Satoshi Regular 16/160%" },
  { className: "body-s", label: "Body S · Satoshi Regular 14/160%" },
  { className: "body-xs", label: "Body XS · Satoshi Regular 12/160%" },
  { className: "label-l", label: "Label L · Satoshi Medium 18/120%" },
  { className: "label-m", label: "Label M · Satoshi Medium 16/120%" },
  { className: "label-s", label: "Label S · Satoshi Medium 14/120%" },
  { className: "label-xs", label: "Label XS · Satoshi Medium 12/120%" },
];

function Swatch({ scale, step }: { scale: string; step: number }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div
        className="aspect-square w-full rounded-xl ring-1 ring-black/5"
        style={{ backgroundColor: `var(--color-${scale}-${step})` }}
      />
      <span className="label-xs text-neutral-950">{step}</span>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-6 border-t border-neutral-100 py-12">
      <h2 className="heading-xs text-neutral-950">{title}</h2>
      {children}
    </section>
  );
}

export default function DesignSystemPreview() {
  return (
    <main className="flex-1">
      <div className="bg-grid bg-primary-800">
        <Container className="flex flex-col gap-10 py-16">
          <Logo className="text-white" />
          <SectionHeading
            tone="light"
            as="h1"
            eyebrow="Phase 1 preview"
            title="ByteSpace Design System"
            description="Tokens, typography and base components. This page is temporary and will be replaced by the Home page in Phase 3."
          />
        </Container>
      </div>

      <Container>
        <Block title="Logo">
          <div className="flex flex-wrap items-center gap-8">
            <div className="rounded-2xl bg-primary-800 p-6">
              <Logo className="text-white" />
            </div>
            <div className="rounded-2xl border border-neutral-100 p-6">
              <Logo className="text-neutral-950" />
            </div>
            <div className="rounded-2xl bg-primary-800 p-6">
              <Logo variant="mark" />
            </div>
          </div>
        </Block>

        <Block title="Colors">
          {scales.map((scale) => (
            <div key={scale.name} className="flex flex-col gap-3">
              <span className="label-s text-neutral-700">{scale.label}</span>
              <div className="grid grid-cols-6 gap-3 sm:grid-cols-11">
                {steps.map((step) => (
                  <Swatch key={step} scale={scale.name} step={step} />
                ))}
              </div>
            </div>
          ))}
        </Block>

        <Block title="Typography">
          <div className="flex flex-col gap-6">
            {typeScale.map((t) => (
              <div key={t.className} className="flex flex-col gap-1">
                <span className="label-xs text-neutral-400">{t.label}</span>
                <p className={`${t.className} text-neutral-950`}>
                  We ignite opportunity by setting the world in motion.
                </p>
              </div>
            ))}
          </div>
        </Block>

        <Block title="Buttons">
          <div className="flex flex-wrap items-center gap-4">
            <Button>Search</Button>
            <Button variant="primary">Enroll Now</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="muted">Muted</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">+ More</Button>
            <Button size="sm">
              <Share2 /> Share
            </Button>
            <Button size="lg">Join as Creator</Button>
            <Button size="icon" aria-label="Search">
              <Search />
            </Button>
            <Button disabled>Disabled</Button>
          </div>
        </Block>

        <Block title="Inputs">
          <div className="grid max-w-3xl gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="ds-email">Email</Label>
              <Input id="ds-email" type="email" placeholder="designer@example.com" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="ds-invalid">Password</Label>
              <Input id="ds-invalid" type="password" placeholder="********" aria-invalid />
            </div>
            <div className="flex items-center gap-3 md:col-span-2">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute top-1/2 left-5 size-5 -translate-y-1/2 text-neutral-400" />
                <Input variant="pill" className="pl-13" placeholder="Course, topic, creator" />
              </div>
              <Button>Search</Button>
            </div>
          </div>
        </Block>

        <Block title="Badges & chips">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="lime" size="lg">Featured</Badge>
            <Badge size="lg">Music</Badge>
            <Badge size="lg">Drawing &amp; Painting</Badge>
            <Badge>
              <BarChart3 /> Beginner
            </Badge>
            <Badge variant="outline">
              <Star className="fill-primary-800 text-primary-800" /> 4.8 (172 reviews)
            </Badge>
            <Badge variant="primary" size="sm">New</Badge>
            <div className="rounded-full bg-neutral-400 p-2">
              <Badge variant="glass" size="sm">17 Lessons</Badge>
            </div>
          </div>
        </Block>

        <Block title="Hero backdrop">
          <div className="bg-grid relative h-60 overflow-hidden rounded-3xl bg-primary-800">
            <Image
              src={images.shapes.springLime}
              alt=""
              width={217}
              height={216}
              className="absolute -top-6 -left-6 w-40"
            />
            <Image
              src={images.shapes.pyramidLime}
              alt=""
              width={190}
              height={189}
              className="absolute right-8 bottom-4 w-28"
            />
          </div>
        </Block>

        <Block title="Assets">
          <div className="flex flex-wrap items-end gap-6">
            <Image src={images.hero.student} alt="Student with laptop" width={361} height={258} className="h-40 w-auto" />
            {Object.entries(images.categories).map(([key, src]) => (
              <Image key={key} src={src} alt={key} width={60} height={60} />
            ))}
            <div className="flex -space-x-2">
              {images.avatars.map((src) => (
                <Image key={src} src={src} alt="" width={36} height={36} className="rounded-full ring-2 ring-white" />
              ))}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-8 rounded-2xl bg-neutral-50 p-6">
            {images.partners.map((src) => (
              <Image key={src} src={src} alt="Partner logo" width={169} height={42} className="h-8 w-auto" />
            ))}
          </div>
        </Block>
      </Container>
    </main>
  );
}
