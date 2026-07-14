import Image from "next/image";

type Props = {
  size?: number;
};

export default function Logo({
  size = 42,
}: Props) {
  return (
    <Image
      src="/images/atlas-logo.png"
      alt="Atlas Logo"
      width={size}
      height={size}
      priority
    />
  );
}