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
    const [loading, setLoading] = useState(true);

    // Fetch the next support message
    useEffect(() => {
        const fetchMessages = async () => {
            const { data, error } = await supabase
                .from("support")
                .select("*")
                .order("id", { ascending: true })
                .limit(1); // Get the first available message

            if (error) {
                console.error("Error fetching support messages:", error);
            } else {
                setMessages(data);
            }
            setLoading(false);
        };

        fetchMessages();
    }, []);

    // Handle deleting a message without replying
    const deleteMessage = async (id: number) => {
        try {
            await supabase.from("support").delete().eq("id", id);

            // Fetch the next support message
            const { data, error } = await supabase
                .from("support")
                .select("*")
                .order("id", { ascending: true })
                .limit(1);

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
                    <p className="text-gray-700 italic">"{messages[0].message}"</p>

                    {/* Mailto Link for Reply with Subject & Body Pre-filled */}
                    <div className="mt-4">
                        <p className="text-gray-700">Send svar til:</p>
                        <a
                            href={`mailto:${messages[0].email}?subject=Svar%20på%20din%20supportforespørsel:%20${encodeURIComponent(messages[0].message)}&body=Hei%20${encodeURIComponent(messages[0].firstname)},%0D%0A%0D%0AHer%20er%20svaret%20på%20din%20henvendelse:%0D%0A%0D%0A`}
                            className="text-blue-500 underline hover:text-blue-700"
                        >
                            {messages[0].email}
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}
