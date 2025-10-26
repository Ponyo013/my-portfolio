import { useState } from "react";
import { X } from "lucide-react";
import linkIc from "../../src/assets/flowbite_link-outline.svg";

export default function ComingSoonModal() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="flex space-x-2.5 bg-black w-fit p-2 rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105"
            >
                <p className="text-white font-bold font-secondary">Coming soon</p>
                <img src={linkIc} alt="hyperlinkIc" />
            </button>
            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
                    <div className="bg-white rounded-2xl shadow-lg w-[90%] max-w-md p-6 relative">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer"
                        >
                            <X size={20} />
                        </button>

                        <h2 className="text-xl font-bold text-gray-900 mb-3 font-primary">
                            Feature Under Development
                        </h2>
                        <p className="text-gray-600 mb-4 font-secondary leading-relaxed">
                            This project is currently under development.
                            We’re hoping that the development will be completed according to the estimated timeline.
                        </p>
                        <p className="text-gray-700 font-primary font-medium">
                            <span className="font-bold">Estimated completion:</span> January 2026
                        </p>

                        <div className="mt-6 flex justify-end">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="bg-black text-white font-semibold px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
