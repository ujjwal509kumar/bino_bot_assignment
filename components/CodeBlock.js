'use client';

import CopyButton from './CopyButton';

export default function CodeBlock({ 
  children, 
  className = "", 
  language = "text",
  showCopy = true 
}) {
  const codeText = typeof children === 'string' ? children : children?.toString() || '';

  return (
    <div className="relative group">
      <pre className={`text-sm overflow-x-auto p-4 rounded-lg select-text cursor-text ${className}`}>
        {children}
      </pre>
      {showCopy && (
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <CopyButton text={codeText} />
        </div>
      )}
    </div>
  );
}