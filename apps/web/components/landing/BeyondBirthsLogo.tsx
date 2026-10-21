import React from 'react';

interface BeyondBirthsLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'dark' | 'light' | 'lime';
  className?: string;
}

export const BeyondBirthsLogo: React.FC<BeyondBirthsLogoProps> = ({
  size = 'md',
  variant = 'dark',
  className = '',
}) => {
  const sizes = {
    sm: { mainSize: '18px', subSize: '8px', gap: '2px' },
    md: { mainSize: '24px', subSize: '9.5px', gap: '3px' },
    lg: { mainSize: '32px', subSize: '12px', gap: '4px' },
  }[size];

  const colors = {
    dark: { text: '#000000', sub: '#111111' },
    light: { text: '#FFFFFF', sub: '#E0E0E0' },
    lime: { text: 'var(--color-lime)', sub: '#FFFFFF' },
  }[variant];

  return (
    <div
      className={`select-none ${className}`}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        lineHeight: 1,
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      }}
      aria-label="Beyond Births. By Alia Khalil"
      dir="ltr"
    >
      <div
        style={{
          fontSize: sizes.mainSize,
          fontWeight: 900,
          letterSpacing: '-0.04em',
          color: colors.text,
          lineHeight: 1,
        }}
      >
        Beyond Births.
      </div>
      <div
        style={{
          alignSelf: 'flex-end',
          fontSize: sizes.subSize,
          fontWeight: 600,
          letterSpacing: '0.22em',
          color: colors.sub,
          marginTop: sizes.gap,
          textTransform: 'uppercase',
          paddingRight: '1px',
        }}
      >
        By Alia Khalil
      </div>
    </div>
  );
};

export default BeyondBirthsLogo;
