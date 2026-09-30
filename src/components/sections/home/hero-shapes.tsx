import Image from "next/image";

import { images } from "@/constants/images";
import { cn } from "@/lib/utils";

type Shape = {
  src: string;
  width: number;
  height: number;
  left?: number;
  right?: number;
  top: number;
};

/** Cropped by the Figma frame edge (or clustered with a shape that is), so they follow the section edges. */
const edgeShapes: Shape[] = [
  { src: images.shapes.springLimeEdge, width: 266, height: 387, left: 0, top: 222 },
  { src: images.shapes.springWhite, width: 177, height: 176, left: 183, top: 477 },
  { src: images.shapes.cylinderLime, width: 164, height: 301, right: 0, top: 255 },
  { src: images.shapes.pyramidWhite, width: 125, height: 138, right: 184, top: 485 },
];

/** Overlap the lime ring's edges, so they stay on the centred 1440 stage with it. */
const ringShapes: Shape[] = [
  { src: images.shapes.torusWhite, width: 238, height: 219, left: 67, top: 741 },
  { src: images.shapes.springWhiteTilted, width: 191, height: 250, left: 1196, top: 710 },
];

function ShapeLayer({ shapes, className }: { shapes: Shape[]; className: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-y-0 left-1/2 z-10 hidden -translate-x-1/2 xl:block", className)}
    >
      {shapes.map((shape) => (
        <Image
          key={shape.src}
          src={shape.src}
          alt=""
          width={shape.width}
          height={shape.height}
          className="absolute max-w-none"
          style={{ left: shape.left, right: shape.right, top: shape.top }}
        />
      ))}
    </div>
  );
}

/**
 * Decorative 3D shapes laid out on the 1440px Figma frame; hidden below 1280 where they would cover the copy.
 * Identical at 1440 and below; on wider screens the edge groups stay on the section edges while the shapes
 * overlapping the lime ring stay centred with it.
 */
export function HeroShapes() {
  return (
    <>
      <ShapeLayer shapes={edgeShapes} className="w-[max(90rem,100%)]" />
      <ShapeLayer shapes={ringShapes} className="w-360" />
    </>
  );
}
