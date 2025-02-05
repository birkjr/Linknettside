import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

type SupportMessage = {
    id: number;
    firstname: string;
    surname: string;
    email: string;
    message: string;
    helped: boolean;
};

export default function SupportManager() {
    const [messages, setMessages] = useState<SupportMessage[]>([]);
    const [reply, setReply] = useState("");
    const [adminEmail, setAdminEmail] = useState(""); // Admin's email input
    const [loading, setLoading] = useState(true);

    // Fetch the next support message
    useEffect(() => {
        const fetchMessages = async () => {
            const { data, error } = await supabase.from("support").select("*").order("id", { ascending: true }).limit(1);
            if (error) {
                console.error("Error fetching support messages:", error);
            } else {
                setMessages(data);
            }
            setLoading(false);
        };

        fetchMessages();
    }, []);

    // Handle sending a reply
    const sendReply = async (id: number, recipientEmail: string, replyText: string) => {
        if (!replyText.trim()) {
            alert("Svarfeltet kan ikke være tomt.");
            return;
        }
        if (!adminEmail.trim()) {
            alert("Du må oppgi din e-post for å sende svar.");
            return;
        }

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    from: adminEmail, // Admin’s email
                    to: recipientEmail,
                    subject: "Svar på din forespørsel",
                    message: replyText,
                }),
            });

            if (response.ok) {
                alert("Svar sendt!");
                
                // Delete the answered message from Supabase
                await supabase.from("support").delete().eq("id", id);
                
                // Fetch the next support message
                const { data, error } = await supabase.from("support").select("*").order("id", { ascending: true }).limit(1);
                if (error) {
                    console.error("Error fetching next message:", error);
                    setMessages([]); // No more messages
                } else {
                    setMessages(data);
                }

                setReply(""); // Clear reply box
            } else {
                alert("Kunne ikke sende e-posten. Prøv igjen.");
            }
        } catch (error) {
            console.error("Error sending email:", error);
            alert("Feil ved sending av e-post.");
        }
    };

    // Handle deleting a message without replying
    const deleteMessage = async (id: number) => {
        //if (!window.confirm("Er du sikker på at du vil slette denne supportmeldingen?")) return;

        try {
            await supabase.from("support").delete().eq("id", id);

            // Fetch the next support message
            const { data, error } = await supabase.from("support").select("*").order("id", { ascending: true }).limit(1);
            if (error) {
                console.error("Error fetching next message:", error);
                setMessages([]); // No more messages
            } else {
                setMessages(data);
            }
        } catch (error) {
            console.error("Error deleting message:", error);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Support</h2>

            {loading ? (
                <p className="text-center text-gray-600">Laster inn meldinger...</p>
            ) : messages.length === 0 ? (
                <p className="text-center text-gray-600">Ingen supportmeldinger funnet.</p>
            ) : (
                <div className="border p-4 rounded-lg shadow-sm">
                    {/* Delete Message Button */}
                    <button
                        className="text-red-600 hover:scale-125 text-xl"
                        onClick={() => deleteMessage(messages[0].id)}
                    >
                        ✕
                    </button>

                    {/* Support Message */}
                    <p className="text-lg font-semibold">{messages[0].firstname} {messages[0].surname}</p>
                    <p className="text-sm text-gray-500">E-post: {messages[0].email}</p>
                    <p className="text-gray-700 italic">"{messages[0].message}"</p>

                    {/* Admin Email Input */}
                    <div className="mt-4">
                        <label className="block text-gray-700">Din e-post (svar fra):</label>
                        <input
                            type="email"
                            value={adminEmail}
                            onChange={(e) => setAdminEmail(e.target.value)}
                            placeholder="Skriv inn din e-post"
                            className="w-full border p-2 rounded-md"
                        />
                    </div>

                    {/* Reply Section */}
                    <div className="mt-4">
                        <label className="block text-gray-700">Skriv svar:</label>
                        <textarea
                            value={reply}
                            onChange={(e) => setReply(e.target.value)}
                            placeholder="Skriv svar her..."
                            className="w-full border p-2 rounded-md"
                        />
                        <button
                            onClick={() => sendReply(messages[0].id, messages[0].email, reply)}
                            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 mt-2"
                        >
                            Send Svar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
