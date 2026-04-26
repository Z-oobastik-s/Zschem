interface ChipProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export const Chip = ({ label, active = false, onClick }: ChipProps) => (
  <button className={`chip ${active ? "chip--active" : ""}`} onClick={onClick} type="button">
    {label}
  </button>
);
