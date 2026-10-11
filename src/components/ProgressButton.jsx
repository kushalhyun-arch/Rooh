import { useEffect, useRef, useState } from 'react';

export default function ProgressButton({ children, className = '', ...props }) {
  const [pending, setPending] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  const handleClick = (event) => {
    props.onClick?.(event);
    if (event.defaultPrevented) return;

    window.clearTimeout(timerRef.current);
    setPending(true);
    timerRef.current = window.setTimeout(() => setPending(false), 1200);
  };

  return (
    <button
      {...props}
      type={props.type ?? 'button'}
      className={`${className} btn-under-progress`}
      disabled={pending || props.disabled}
      onClick={handleClick}
    >
      {pending ? 'Under progress' : children}
    </button>
  );
}