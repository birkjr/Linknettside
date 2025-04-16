import FAQCard from "../components/Tools/FAQcard";
import ContactForm from "../components/Schema/ContactForm";

export default function FAQ() {
    return (
        <div className="min-h-screen flex flex-col w-full p-6 lg:px-12">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto mt-12">
                <FAQCard 
                    number={1}
                    title="Oppmelding bedpress"
                    description="Påmelding til bedpress gjøres på Teknologiporten sin nettside. Trykk på «Arrangementer» på denne nettsiden. Her vil du finne de kommende bedpressene. Ved å trykke på en bedpress, vil du automatisk bli sendt videre til påmelding på teknologiporten sin nettside."
                />
                <FAQCard 
                    number={2}
                    title="Regler og utestengelse"
                    description="Teknologiporten har et prikksystem. Prikker får du ved å ikke møte opp, eller melde deg av for sent. To prikker medfører utestengelse fra Teknologiporten sine arrangementer i fire måneder. Mer informasjon om dette kan du finne på Teknologiporten sin nettside."
                />
                <FAQCard 
                    number={3}
                    title="Venteliste"
                    description="Om du er på venteliste vil du inntil midnatt samme dag som arrangementet automatisk bli påmeldt dersom det blir ledig plass. Etter dette tidspunktet vil de første på venteliste få mail dersom det er ledig plass. Da er det førstemann til mølla for å ta plassen. Mer om venteliste finner du under «Retningslinjer for påmelding og prikker» på."
                />
            </div>

            {/* Contact Form Section */}
            <ContactForm /> {/* ✅ Added Contact Form Below FAQ Cards */}
        </div>
    );
}
