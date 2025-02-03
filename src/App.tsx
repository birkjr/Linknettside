import Arrangementer from "./components/Arrangementer";
import Nyheter from "./components/Nyheter";

const supabaseStorageUrl = "https://iglqmuqbolugyifhsrfh.supabase.co/storage/v1/object/public/bilder/";

function App() {
  
  return (
    <>
      {/* Container for everything */}
      <div className="flex flex-col w-full px-6 space-y-6">
        
        {/* Arrangementer Section - Always on Top */}
        <Arrangementer />

        {/* Info & Nyheter Section - Side by Side on PC, Stacked on Mobile */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full space-y-6 lg:space-y-0 lg:space-x-6">
          
          {/* Info Box */}
          <div className="flex flex-col justify-center items-center border border-gray-200 rounded-xl p-6 text-serif w-full lg:w-1/2 text-center">
              <img 
                  className="h-24 w-28 rounded-xl my-6" 
                  src={`${supabaseStorageUrl}logo_transparent.JPG`} 
                  alt="EMIL-Link Logo"
              />
              <p className="text-sm sm:text-base">EMIL-Link er Energi og Miljø</p>
              <p className="text-sm sm:text-base">studiets næringslivskontakt.</p>
              <p className="text-sm sm:text-base">Kort sagt betyr det at</p>
              <p className="text-sm sm:text-base">komiteens hovedformål er å</p>
              <p className="text-sm sm:text-base">opprette kontakt mellom</p>
              <p className="text-sm sm:text-base">studenter og bedrifter under</p>
              <p className="text-sm sm:text-base">studieløpet.</p>
          </div>

          {/* Nyheter Box */}
          <div className="flex flex-col justify-center items-center border border-gray-200 rounded-xl p-6 text-serif w-full lg:w-1/2 text-center text-lg sm:text-xl font-bold">
              <Nyheter />
          </div>

        </div>

      </div>
    </>
  );
}

export default App;
