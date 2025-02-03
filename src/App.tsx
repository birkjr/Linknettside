import Arrangementer from "./components/Arrangementer";
import Nyheter from "./components/Nyheter";
const supabaseStorageUrl = "https://iglqmuqbolugyifhsrfh.supabase.co/storage/v1/object/public/bilder/";

function App() {

  return (
    <>
    <div className="h-full w-full min-h-auto bg-stone-100 flex justify-center p-6">
      <Arrangementer/>
    </div>
    <div className="w-full grid grid-cols-2 bg-stone-100 p-6">
      <div className="flex flex-col justify-center items-center border border-gray-200 rounded-xl p-4 text-serif mx-6">
        <img className="flex justify-center h-24 w-28 rounded-xl my-6" src={`${supabaseStorageUrl}logo_transparent.JPG`}/>
        <p>EMIL-Link er Energi og Miljø</p>
        <p>studiets næringslivskontakt.</p>
        <p>Kort sagt betyr det at</p>
        <p>komiteens hovedformål er å</p>
        <p>opprette kontakt mellom</p>
        <p>studenter og bedrifter under</p>
        <p>studieløpet.</p>
      </div>
      <div className="flex flex-col  items-center border border-gray-200 rounded-xl m-6">
        <Nyheter/>
      </div>
    </div>
    </>
  )
}

export default App
