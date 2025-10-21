
import Report from "@/components/Report";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-2xl border border-green-200 p-8">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-green-800 tracking-tight">
            Fizofy Report
          </h1>
          <p className="text-gray-600 mt-3 text-base leading-relaxed">
            India’s most optimized wellness platform offering specialized physiotherapy services like aquatic
            therapy, sports injury rehabilitation, and personalized treatment plans. We aim to revolutionize
            physiotherapy by fostering collaboration between patients, doctors, and hospitals while promoting
            awareness about healthy living. With pocket-friendly, accessible, and patient-centric care, we help
            individuals unlock their full potential and build lasting trust in healthcare.
          </p>
        </header>

        <Report />
      </div>
    </main>
  );
}
