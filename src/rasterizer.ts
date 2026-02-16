import { Resvg } from "@resvg/resvg-js";

export function rasterize(svg: string, size: number = 200): Buffer {
  const resvg = new Resvg(svg, {
    fitTo: {
      mode: "width",
      value: size,
    },
  });
  const pngData = resvg.render();
  return Buffer.from(pngData.asPng());
}
