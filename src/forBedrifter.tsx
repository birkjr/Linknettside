import BusinessOffer from "./components/BusinessOffer";
const supabaseStorageUrl = "https://iglqmuqbolugyifhsrfh.supabase.co/storage/v1/object/public/bilder/";

export default function ForBedrifter() {
    return (
        <div className="min-h-screen flex flex-col w-full p-6 lg:px-12">
            {/* For bedrifter Header */}
            <div className="w-full max-w-6xl mx-auto p-12 text-white text-center rounded-xl" 
                style={{ backgroundColor: "#4682B4" }}>
                <h1 className="text-white text-3xl my-4">
                    For bedrifter
                </h1>
                <p> Ønsker din bedrift å promotere stillingsannonser, internships eller gi et generelt innblikk i hva din bedrift driver med? </p>
                <p> Emil-Link tilbyr flere ulike tjenester hvor bedrifter har mulighet til å komme i kontakt med våre studenter og gjøre nettopp dette. </p>
                <p> EMIL-Link er Energi- og miljøingeniørenes bedriftskontakt, en komite underlagt linjeforeningen. </p>
                <p> Våre medlemmer jobber hardt for å gi det beste tilbudet til studentene, og være deres link til arbeidslivet!</p>
            </div>

            {/* Business Offers Section */}
            <div className="flex flex-col md:flex-row justify-center items-start gap-12 max-w-6xl mx-auto mt-12">
                <BusinessOffer 
                    image={`${supabaseStorageUrl}bedriftsbilde.png`}
                    title="Bedriftspresentasjoner"
                    description="Bedriftspresentasjon er en promoteringsform hvor representanter fra din bedrift kommer i direkte kontakt med EMIL-studentene, og er den mest brukte rekruteringsarenaen. Det starter som regel med en presentasjon av bedriften, enten på Gløshaugen eller i byen, etterfulgt av bespisning og mingling mellom studentene og bedriftsrepresentantene. Det er mange måter å gjennomføre en «bedpres» på, og bedriftskontaktene i EMIL-Link er svært behjelpelige i planleggingen av arrangementet for å promotere din bedrift best mulig."
                />
                <BusinessOffer 
                    image={`${supabaseStorageUrl}logo_sirkel.png`}
                    title="Jobbtorget"
                    description="Jobbtorget er EMIL-Link sin egen side for relevante stillingsannonser hvor vi publiserer ledige stillinger, sommerjobber, internships og oppgaver. I tillegg legges det ut på vår instagram-konto som «nye stillingsannonser». Hvis dette er interessant for din bedrift, send en mail med link til den aktuelle annonsen!"
                />
                <BusinessOffer 
                    image={`${supabaseStorageUrl}instagram.png`}
                    title="Insta take-over og annen promotering"
                    description="Få muligheten til å nå ut til energi- og miljøstudentene via EMIL-Link sin egen instagramkonto! Representanter fra din bedrift kan styre instagram-kontoen og promotere ønsket innhold selv, for en hel dag. Det er også mulighet for at EMIL-Link kan markedsføre eksterne arrangementer, så lenge det ikke kommer i veien for eget opplegg."
                />
            </div>
        </div>
    );
}
