import { FaPhone, FaMap } from "react-icons/fa";

export default function LocationMap() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold mb-4 text-bethanyBrown">Find Our Sweet Spot</h2>
          <p className="max-w-2xl mx-auto text-gray-600 md:text-xl">Visit us at our cozy bakery or give us a call!</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-start">
            <h3 className="text-2xl font-semibold text-bethanyBrown mb-4">Our Location</h3>
            <div className="space-y-4 w-full">
              <div className="flex items-center gap-3">
                <FaMap className="w-5 h-5 text-bethanyBrown" />
                <span className="text-gray-700">123 Pie Lane, Sweetville, PS 90210</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="w-5 h-5 text-bethanyBrown" />
                <span className="text-gray-700">(123) 456-7890</span>
              </div>
              <div className="text-gray-600">
                Monday - Saturday: 9:00 AM - 6:00 PM<br />
                Sunday: 10:00 AM - 4:00 PM
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full max-w-xl mx-auto">
            <iframe
              title="Bakery Location Map"
              src="https://www.google.com/maps?q=123+Pie+Lane,+Sweetville,+PS+90210&output=embed"
              width={600}
              height={400}
              style={{ border: 0, borderRadius: '0.75rem', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl shadow-lg object-cover object-center w-full max-w-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
