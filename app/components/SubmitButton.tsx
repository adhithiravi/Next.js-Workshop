// components/SubmitButton.tsx
'use client';

import { useFormStatus } from 'react-dom';

interface SubmitButtonProps {
  total: number;
}

export default function SubmitButton({ total }: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="btn-primary w-full py-3"
    >
      {pending ? 'Processing…' : `Place Order - $${total.toFixed(2)}`}
    </button>
  );
}
