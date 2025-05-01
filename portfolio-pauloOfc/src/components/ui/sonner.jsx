import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner";

const Toaster = ({
  ...props
}) => {

  return (
    <Sonner
      className=" bg-amber-800"
      {...props} />
  );
}

export { Toaster }
