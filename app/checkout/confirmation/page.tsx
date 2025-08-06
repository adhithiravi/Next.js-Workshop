'use client';

import { useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import Link from 'next/link';
import Navigation from '../../components/Navigation';

export default function ConfirmationPage() {
	const { clearCart } = useCart();

	// Clear the cart once when this page mounts
	useEffect(() => {
		clearCart()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<>
			<Navigation />
			<div className="max-w-md mx-auto px-4 py-16 text-center">
				<h1 className="text-4xl font-bold 600 mb-4">
					🎉 Thank you for your order!
				</h1>
				<p className="text-lg text-gray-700 mb-8">
					Your pies are baking and will be on their way soon.
				</p>
				<p className="text-md font-semibold text-gray-700">
					Order Number: <span className="font-normal">#BPS123456789</span>
				</p>
				<p className="text-md text-gray-600">
					You will receive an email confirmation with details of your order.
				</p>
				<p className="mt-8">
					<Link href="/shop" className="btn-primary">
						Continue Shopping
					</Link>
				</p>
			</div >
		</>
	);
}
