import Link from "next/link";
import { IconType } from "react-icons";

export type SocialProps = {
  icon: IconType;
  username: string;
  link: string;
  className?: string;
};

export default function Social({
  icon: Icon,
  username,
  link,
  className,
}: SocialProps) {
  return (
    <Link
      href={link}
      className={`text-4xl font-bold flex flex-row items-center ${className}`}
      target="_blank"
    >
      <Icon className="mr-2" />{" "}
      <span className="hover:underline">{username}</span>
    </Link>
  );
}