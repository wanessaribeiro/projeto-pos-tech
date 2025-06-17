import React from 'react';
import './EyeButton.css';
import { EyeIcon } from '../../icons/EyeIcon';

type EyeButtonProps = {
  onClick: () => void;
};

export default function EyeButton({ onClick }: EyeButtonProps) {
  return (
    <button onClick={onClick} className="eye-button">
      <EyeIcon />
    </button>
  );
}
