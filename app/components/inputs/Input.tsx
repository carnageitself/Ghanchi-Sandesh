import React, { ChangeEventHandler } from 'react';

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  primary?: boolean;
  secondary?: boolean;
  icons?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChange,
  primary,
  secondary,
  icons,
}) => {
  const inputClasses = `
     rounded-[8px]
     outline-blue-500
     px-[15px]
    w-full
    ${primary ? 'border-primary border ' : ''}
    ${secondary ? 'border-secondary' : ''}
  
    p-2
    ${icons ? 'pl-8 pr-2' : 'px-2'}
  `;

  const iconContainerClasses = `
    absolute
    ${icons ? 'left-2 top-2' : ''}
  `;

  return (
    <div className="relative">
      {icons && <div className={iconContainerClasses}>{icons}</div>}
      <input
        type="text"
        className={inputClasses}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
