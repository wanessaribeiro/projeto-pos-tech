import './ButtonIcon.css';

type ButtonIconProps = {
  Icon: Icon;
  onClickIcon?: () => void;
};

export function ButtonIcon({ Icon, onClickIcon }: ButtonIconProps) {
  return (
    <button onClick={onClickIcon} className="button-icon">
      <Icon />
    </button>
  );
}
