import useUser from "@/hooks/useUser";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback } from "react";

interface AvatarProps {
  userId: string;
  isLarge?: boolean;
  hasBorder?: boolean;
}

const Avatar = ({ userId, isLarge, hasBorder }: AvatarProps) => {
  const { data: fetchedUser } = useUser(userId);
  const router = useRouter();
  const onClick = useCallback(() => {
    event?.stopPropagation();
    const url = `/users/${userId}`;
    router.push(url);
  }, [router, event]);
  return (
    <div
      className={`
        ${hasBorder ? "border-4 border-black" : ""}
        ${isLarge ? "h-32 w-32" : "h-12 w-12"}
        rounded-full
        hover:opacity-90
        transition
        cursor-pointer
        relative
    `}
    >
      <Image
        alt="Avatar"
        fill
        className="rounded-full"
        onClick={onClick}
        src={fetchedUser?.profileImage || "/images/placeholder.jpg"}
      />
    </div>
  );
};

export default Avatar;
