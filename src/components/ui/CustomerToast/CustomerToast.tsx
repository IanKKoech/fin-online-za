import { useRouter } from "next/router";
import { Logo } from "../Logo/Logo";

interface MyComponentProps {
  t: {
    visible: boolean;
    id: string;
  };
  message: string;
  title: string;
}

export const CustomerToast: React.FC<MyComponentProps> = ({
  t,
  message,
  title,
}) => {
  return (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-900">{title}</p>
            <p className="mt-1 text-sm text-gray-500">{message}</p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200"></div>
    </div>
  );
};
