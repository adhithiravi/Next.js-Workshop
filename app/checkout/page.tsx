// app/checkout/page.tsx
'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '../context/CartContext';
import Navigation from '../components/Navigation';

export default function CheckoutPage() {
	const { items, total, clearCart } = useCart();
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setLoading(true);
		try {
			await fetch('/api/checkout', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ items }),
			});
			clearCart();
			router.push('/checkout/confirmation');
		} catch (err) {
			console.error('Checkout failed:', err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<Navigation />
			<form onSubmit={handleSubmit} className="max-w-xl mx-auto p-8 space-y-6">
				<h1 className="text-3xl font-bold">Checkout</h1>

				<div className="space-y-4">
					{items.map(item => (
						<div key={item.id} className="flex justify-between">
							<span>{item.name} × {item.quantity}</span>
							<span>${(item.price * item.quantity).toFixed(2)}</span>
						</div>
					))}
				</div>

				<div className="flex justify-between font-semibold text-lg">
					<span>Total:</span>
					<span>${total.toFixed(2)}</span>
				</div>

				<button
					type="submit"
					disabled={loading}
					className="btn-primary w-full py-3"
				>
					{loading ? 'Processing…' : 'Proceed to Checkout'}
				</button>
			</form>
		</>
	);
}
