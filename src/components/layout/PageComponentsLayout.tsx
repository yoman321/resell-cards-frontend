import { Props } from "../../interfaces/Interface.tsx";

const PageComponents = ({ children }: Props) => {
  return (
    <div className="flex justify-center rounded-md w-full">
      <div className="w-10/12">{children}</div>
    </div>
  );
};

export default PageComponents;
