export default function BinaryBackground() {
  const createRows = () =>
    Array.from({ length: 35 }, () =>
      Array.from({ length: 90 }, () =>
        Math.random() > 0.5 ? "1" : "0"
      ).join("")
    ).join("\n");

  const layer1 = createRows();
  const layer2 = createRows();
  const layer3 = createRows();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      <pre className="binary-layer binary-layer-1">
        {layer1}
      </pre>

      <pre className="binary-layer binary-layer-2">
        {layer2}
      </pre>

      <pre className="binary-layer binary-layer-3">
        {layer3}
      </pre>

      <div className="hero-gradient" />

    </div>
  );
}