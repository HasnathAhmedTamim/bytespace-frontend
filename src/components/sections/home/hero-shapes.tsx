import Image from "next/image";

import { images } from "@/constants/images";

const shapes = [
  { src: images.shapes.springLime, width: 217, height: 216, left: -75, top: 336 },
  { src: images.shapes.springWhite, width: 177, height: 176, left: 183, top: 477 },
  { src: images.shapes.torusWhite, width: 238, height: 219, left: 67, top: 741 },
  { src: images.shapes.cylinderLime, width: 164, height: 301, left: 1276, top: 255 },
  { src: images.shapes.pyramidWhite, width: 125, height: 138, left: 1131, top: 485 },
  { src: images.shapes.springWhite, width: 329, height: 327, left: 1140, top: 678, rotate: -45, flip: true },
];

/** Decorative 3D shapes laid out on the 1440px Figma frame, scaled down on smaller desktops. */
export function HeroShapes() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute top-0 left-1/2 hidden h-full w-360 -translate-x-1/2 origin-top scale-90 lg:block xl:scale-100"
    >
      {shapes.map((shape, index) => (
        <Image
          key={index}
          src={shape.src}
          alt=""
          width={shape.width}
          height={shape.height}
          className="absolute max-w-none"
          style={{
            left: shape.left,
            top: shape.top,
            rotate: shape.rotate ? `${shape.rotate}deg` : undefined,
            scale: shape.flip ? "-1 1" : undefined,
          }}
        />
      ))}
    </div>
  );
}
