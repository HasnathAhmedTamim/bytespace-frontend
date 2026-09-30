import Image from "next/image";

import { images } from "@/constants/images";

type Shape = {
  src: string;
  width: number;
  height: number;
  left?: number;
  right?: number;
  top: number;
};

const shapes: Shape[] = [
  { src: images.shapes.springLimeEdge, width: 266, height: 387, left: 0, top: 222 },
  { src: images.shapes.springWhite, width: 177, height: 176, left: 183, top: 477 },
  { src: images.shapes.torusWhite, width: 238, height: 219, left: 67, top: 741 },
  { src: images.shapes.cylinderLime, width: 164, height: 301, right: 0, top: 255 },
  { src: images.shapes.pyramidWhite, width: 125, height: 138, right: 184, top: 485 },
  { src: images.shapes.springWhiteTilted, width: 191, height: 250, right: 53, top: 710 },
];

/**
 * Decorative 3D shapes laid out on the 1440px Figma frame; hidden below 1280 where they would cover the copy.
 * They form a left and a right group cropped by the frame edge, so above 1440 each group stays on its section edge.
 */
export function HeroShapes() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 left-1/2 z-10 hidden w-[max(90rem,100%)] -translate-x-1/2 xl:block"
    >
      {shapes.map((shape, index) => (
        <Image
          key={index}
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
