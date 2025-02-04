import { useState } from "react";
import { supabase } from "../supabaseClient"; // Ensure this is correctly imported

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        question: "",
    });

    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState<"success" | "error" | "">(""); // State to control message color

    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const { firstName, lastName, email, question } = formData;

        // Validate fields
        if (!firstName || !lastName || !email || !question) {
            setMessage("Vennligst fyll ut alle felt.");
            setMessageType("error"); // Set message color to red
            return;
        }

        // Insert into Supabase
        const { error } = await supabase
            .from("support")
            .insert([{ 
                firstname: firstName, 
                surname: lastName, 
                email: email, 
                message: question, 
                helped: false // Default to false
            }]);

        if (error) {
            console.error("Error inserting into support table:", error);
            setMessage("Kunne ikke sende spørsmålet. Prøv igjen.");
            setMessageType("error"); // Set message color to red
        } else {
            setMessage("Spørsmålet er sendt! Vi vil svare deg snart.");
            setMessageType("success"); // Set message color to green
            setFormData({ firstName: "", lastName: "", email: "", question: "" });
        }
    };

    return (
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg mt-12">
            <h2 className="text-2xl font-bold mb-6">Still spørsmål her:</h2>

            {message && (
                <p className={`text-center font-semibold ${messageType === "success" ? "text-green-600" : "text-red-600"}`}>
                    {message}
                </p>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-gray-700">Fornavn</label>
                        <input 
                            type="text" 
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full border border-gray-400 p-2 rounded" 
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Etternavn</label>
                        <input 
                            type="text" 
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full border border-gray-400 p-2 rounded" 
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Epost: *</label>
                        <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-400 p-2 rounded" 
                        />
                    </div>
                </div>

                {/* Question Field */}
                <div>
                    <label className="block text-gray-700">Spørsmål</label>
                    <textarea 
                        name="question"
                        value={formData.question}
                        onChange={handleChange}
                        className="w-full border border-gray-400 p-2 rounded h-28"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                    <button type="submit" className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800 transition">
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
}
