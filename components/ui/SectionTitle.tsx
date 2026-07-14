type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  center = false,
}: Props) {
  return (
    <div className={center ? "text-center" : ""}>

      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
          {eyebrow}
        </span>
      )}

      <h2 className="mt-4 text-5xl font-semibold tracking-tight text-gray-900">
        {title}
      </h2>

      {description && (
        <p
          className={`mt-6 text-lg leading-8 text-gray-500 ${
            center ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}