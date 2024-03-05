// components/Sierpinski.js
import { useEffect, useRef } from "react";

function drawTriangle(
  ctx,
  x1,
  y1,
  x2,
  y2,
  x3,
  y3,
  fill = false,
  fillColor = "black",
  strokeColor = "black"
) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.closePath();
  if (fill) {
    ctx.fillStyle = fillColor;
    ctx.fill();
  }
  ctx.strokeStyle = strokeColor;
  ctx.stroke();
}

function createSierpinski(ctx, depth, x1, y1, x2, y2, x3, y3, triangles) {
  if (depth === 0) {
    const triangle = { x1, y1, x2, y2, x3, y3, depth };
    triangles.push(triangle);
  } else {
    const mid1x = (x1 + x2) / 2;
    const mid1y = (y1 + y2) / 2;
    const mid2x = (x2 + x3) / 2;
    const mid2y = (y2 + y3) / 2;
    const mid3x = (x1 + x3) / 2;
    const mid3y = (y1 + y3) / 2;

    createSierpinski(
      ctx,
      depth - 1,
      x1,
      y1,
      mid1x,
      mid1y,
      mid3x,
      mid3y,
      triangles
    );
    createSierpinski(
      ctx,
      depth - 1,
      mid1x,
      mid1y,
      x2,
      y2,
      mid2x,
      mid2y,
      triangles
    );
    createSierpinski(
      ctx,
      depth - 1,
      mid3x,
      mid3y,
      mid2x,
      mid2y,
      x3,
      y3,
      triangles
    );
  }
}

export default function Sierpinski() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const depth = 4;
    const height = (Math.sqrt(4) * canvas.height) / 2;
    const topX = canvas.width / 2;
    const topY = (canvas.height - height) / 2;
    const leftX = (canvas.width - height) / 2;
    const rightX = (canvas.width + height) / 2;
    const bottomY = (canvas.height + height) / 2;

    const triangles = [];
    createSierpinski(
      ctx,
      depth,
      topX,
      topY,
      leftX,
      bottomY,
      rightX,
      bottomY,
      triangles
    );

    // Dessine tous les triangles stockés
    triangles.forEach((triangle) => {
      drawTriangle(
        ctx,
        triangle.x1,
        triangle.y1,
        triangle.x2,
        triangle.y2,
        triangle.x3,
        triangle.y3,
        true,
        "#28666E"
      );
    });

    // Exemple de manipulation d'un triangle (ici, nous ajoutons un contour noir)
    const firstTriangle = triangles[0];

    drawTriangle(
      ctx,
      firstTriangle.x1,
      firstTriangle.y1,
      firstTriangle.x2,
      firstTriangle.y2,
      firstTriangle.x3,
      firstTriangle.y3,
      false,
      "",
      "pink"
    );
  }, []);

  return <canvas ref={canvasRef} width={428} height={428} />;
}
