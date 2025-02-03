export default function OmOss() {
    return (
        <div className="flex flex-col items-center bg-stone-100">
            {/* Widen the main content */}
            <div className="w-full p-6 lg:px-12">
                
                {/* Blue Section */}
                <div className="flex flex-col justify-center items-center w-full max-w-6xl mx-auto h-auto lg:h-auto p-12 text-white text-center rounded-lg"
                    style={{ backgroundColor: "#4682B4" }}>
                    <h3 className="text-3xl py-4">
                        Om EMIL Link
                    </h3>
                    <p className="text-lg leading-relaxed">
                        Hovedsakelig arrangerer vi bedriftspresentasjoner, hvor bedrifter som er aktuelle for studiet besøker oss i Trondheim, holder en kort presentasjon, og mingler med oss studentene under servering. Bedriftspresentasjonene er et tilbud åpent for alle Energi og Miljø-studenter, og vi anbefaler på det sterkeste å melde seg på ulike bedrifter sine presentasjoner for å få innsikt i en spennende hverdag og en potensiell arbeidsgiver.

                        EMIL-Link ble stiftet av Energi og Miljø-studiets aller første kull for å skaffe sponsorer til hovedekskursjonen og har utviklet seg til den Link vi kjenner i dag. I tillegg til å arrangere bedriftspresentasjoner og ulike fagdager holder vi også en rekke sosiale arrangementer. Inntekter til Link går direkte til linjeforeningen som hjelper alle EMIL studenter med å få en bedre studietid.
                    </p>
                </div>


                {/* Grid Section for Styret, Bedrift, etc. */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12" >
                    {/* Styret */}
                    <div>
                        <div><img className='rounded-xl' src="/src/assets/bilder/styret-kopi.png"/></div>
                    </div>
                    <div className="py-8 flex flex-col mt-6 text-gray-600 text-xl">
                        <h3 className="text-4xl font-semibold flex justify-center py-4 ">Styret</h3>
                        <p className="flex justify-center py-2">Styret leder EMIL-Link og tar avgjørelser på vegne av komiteen</p>
                        <p className="flex justify-center py-2">Nestleder | Sanna Nerhus Lewin</p>
                        <p className="flex justify-center py-2">Økonomi ansvarlig | August Pedersen Hovland</p>
                        <p className="flex justify-center py-2">FA teamleder | Sondre Fanebust</p>
                        <p className="flex justify-center py-2">Logistikk teamleder |  Celine Solberg Jensen</p>
                        <p className="flex justify-center py-2">Bedrift teamleder | Erik Herman Bull</p>
                        <p className="flex justify-center py-2">Markedsføring teamleder & IT | Birk J Ramstad</p>
                    </div>

                    {/* Bedrift */}
                    <div>
                        <div><img className='rounded-xl' src="/src/assets/bilder/bedrift.png"/></div>
                    </div>
                    <div className="py-8 flex flex-col mt-6 text-gray-600 text-xl max-w-lg mx-auto text-center">
                        <h3 className="text-4xl font-semibold py-4">Bedrift</h3>
                        <p className="py-2">
                        Bedriftsgruppen har direkte kontakt med forskjellige bedrifter, og ansvaret med å sikre bedriftspresentasjoner m.m. Bedriftsundergruppen er EMIL-studentens ansikt mot bedriftene. De opprettholder kontakten med samarbeidspartnere gjennom året, og da spesielt frem mot et arrangement. 
                        </p>
                    </div>

                    {/* Marked */}
                    <div>
                        <div><img className='rounded-xl' src="/src/assets/bilder/marked.png"/></div>
                    </div>
                    <div className="py-8 flex flex-col mt-6 text-gray-600 text-xl max-w-lg mx-auto text-center">
                        <h3 className="text-4xl font-semibold py-4">Marked</h3>
                        <p className="py-2">
                            Markedsføringsgruppen har ansvaret for å informere om bedriftspresentasjoner. Markedsføring har også i oppgave å skaffe samarbeidspartnere som sponser linjeforeningen. Undergruppen jobber også med å skaffe og publisere jobbannonser spesielt for EMIL studenter.
                        </p>
                    </div>


                    {/* Logistikk */}
                    <div>
                        <div><img className='rounded-xl' src="/src/assets/bilder/logistikk-kopi.png"/></div>
                    </div>
                    <div className="py-8 flex flex-col mt-6 text-gray-600 text-xl max-w-lg mx-auto text-center">
                        <h3 className="text-4xl font-semibold py-4">Logistikk</h3>
                        <p className="py-2">
                        Logistikkgruppen tar seg av alt det praktiske når det gjelder bedriftspresentasjoner. De tar seg av bestilling av restaurantlokalet og auditorium, samt at de er til stede på selve arrangementet og passer på at alt annet går som det skal.
                        </p>
                    </div>

                    {/* FA */}
                    <div>
                        <div><img className='rounded-xl' src="/src/assets/bilder/fa-kopi.png"/></div>
                    </div>
                    <div className="py-8 flex flex-col mt-6 text-gray-600 text-xl max-w-lg mx-auto text-center">
                        <h3 className="text-4xl font-semibold py-4">FA</h3>
                        <p className="py-2">
                        FA-gruppen er de som setter opp alle arrangementer Emil link har, som ikke er i kategorien bedriftspresentasjoner. Det vil si alt av foredrag, arrangementer og kurs der fokuset ligger på det faglige innholdet. Arrangementer som FA setter opp er blant annet Motivasjonsdagen, eksamenskurs og Masterfrokost.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
