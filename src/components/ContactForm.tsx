import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        question: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Replace with your EmailJS Service ID, Template ID, and User ID
        emailjs.send(
            "YOUR_SERVICE_ID",
            "YOUR_TEMPLATE_ID",
            {
                from_name: `${formData.firstName} ${formData.lastName}`,
                from_email: formData.email,
                message: formData.question,
            },
            "YOUR_PUBLIC_KEY"
        )
        .then((response) => {
            console.log("Email sent successfully!", response);
            setMessage("E-posten er sendt! Vi vil svare så snart som mulig.");
            setFormData({ firstName: "", lastName: "", email: "", question: "" }); // Reset form
        })
        .catch((error) => {
            console.error("Error sending email:", error);
            setMessage("Noe gikk galt. Prøv igjen.");
        });
    };

    return (
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg mt-12">
            <h2 className="text-2xl font-bold mb-6">Still spørsmål her:</h2>

            {message && <p className="text-green-600 text-center font-semibold">{message}</p>}

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
