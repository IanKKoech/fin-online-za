interface Props {
  text?: string;
  additionalStyles?: string;
}
export const DashboardTitle: React.FC<Props> = ({
  text,
  additionalStyles,
}: Props) => {
  return (
    <p
      className={`font-semibold text-xl my-2 dark:text-white ${additionalStyles}`}
    >
      {text}
    </p>
  );
};
