import FAQCard from "./components/FAQcard";
import ContactForm from "./components/ContactForm"; // ✅ Import Contact Form

export default function FAQ() {
    return (
        <div className="min-h-screen flex flex-col w-full p-6 lg:px-12 bg-stone-100">
            {/* FAQ Header */}
            <div className="w-full max-w-6xl mx-auto p-12 text-white text-center rounded-xl" 
                style={{ backgroundColor: "#4682B4" }}>
                <h1 className="text-white text-3xl my-4">
                    FAQ
                </h1>
                <p>Her er svar på ofte stilte spørsmål.</p>
                <p>Bare å ta kontakt hvis det er noe annet du lurer på!</p>
            </div>

            {/* FAQ Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
                <FAQCard 
                    number={1}
                    title="Oppmelding bedpress"
                    description="Påmelding til bedpress gjøres på Teknologiporten sin nettside. Trykk på «Arrangementer» på denne nettsiden..."
                />
                <FAQCard 
                    number={2}
                    title="Regler og utestengelse"
                    description="Teknologiporten har et prikkesystem. Prikker får du ved å ikke møte opp, eller melde deg av for sent..."
                />
                <FAQCard 
                    number={3}
                    title="Venteliste"
                    description="Om du er på venteliste vil du inntil midnatt samme dag som arrangementet automatisk bli påmeldt dersom det blir ledig plass..."
                />
            </div>

            {/* Contact Form Section */}
            <ContactForm /> {/* ✅ Added Contact Form Below FAQ Cards */}
        </div>
    );
}
