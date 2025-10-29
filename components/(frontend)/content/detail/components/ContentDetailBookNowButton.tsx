// utils
import { ShineAnimation } from "@/components/(frontend)/global/ShineAnimation/ShineAnimation";
import { ShoppingCart } from "lucide-react";
import { memo } from "react";

function ContentDetailBookNowButton({
  fullWidth,
  onClick
}: {
  fullWidth: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`cursor-pointer flex items-center justify-center gap-2.5 brightness-100 opacity-100 relative group overflow-hidden bg-moss text-ivory-1 px-3 py-3 sm:py-3.5 rounded-lg sm:rounded-xl text-lg text-center ${fullWidth ? "col-span-2" : ""}  whitespace-nowrap transition-all duration-300`}
      onClick={onClick}
    >
      <ShoppingCart
        width={16}
        height={16}
      />
      <span>Add to Cart</span>
      <ShineAnimation isPersistent />
    </div>
  );
}

export default memo(ContentDetailBookNowButton);
