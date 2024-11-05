import { cx } from "class-variance-authority";
import { HTMLAttributes } from "react";

interface ImageProps
  extends Omit<HTMLAttributes<HTMLImageElement>, "src" | "alt"> {
  imageId: string | null | undefined;
  name: string;
}

export const UserImage = ({
  imageId,
  name,
  className,
  ...props
}: ImageProps) => {
  const path = `/users/${imageId}`;

  if (!imageId) {
    return (
      <div className="h-6 w-6 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">
        {name[0]}
      </div>
    );
  }

  return (
    <img
      {...props}
      src={path}
      alt={`${name}'s picture`}
      className={cx("h-6 w-6 rounded-full", className)}
    />
  );
};
