import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
// Supabase Storage URL for images
const supabaseStorageUrl = "https://iglqmuqbolugyifhsrfh.supabase.co/storage/v1/object/public/bilder/";



type Styret = {
    id: number;
    stilling: string;
    name: string;
    telefon: string;
    mail: string;
    bilde: string | null;
};

export default function ContactUs() {
    const [leder, setLeder] = useState<Styret | null>(null);
    const [nestleder, setNestleder] = useState<Styret | null>(null);
    const [hr, setHr] = useState<Styret | null>(null);
    const [økonomi, setØkonomi] = useState<Styret | null>(null);
    const [marked, setMarked] = useState<Styret | null>(null);
    const [bedrift, setBedrift] = useState<Styret | null>(null);
    const [logistikk, setLogistikk] = useState<Styret | null>(null);
    const [fa, setFa] = useState<Styret | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStyret = async () => {
            const { data, error } = await supabase.from("styret").select("*");

            if (error) {
                console.error("Error fetching styret:", error);
            } else {
                // Separate the fetched data based on the specific roles
                setLeder(data.find((person: Styret) => person.stilling === "Leder") || null);
                setNestleder(data.find((person: Styret) => person.stilling === "Nestleder") || null);
                setHr(data.find((person: Styret) => person.stilling === "HR ansvarlig") || null);
                setØkonomi(data.find((person: Styret) => person.stilling === "Økonomiansvarlig") || null);
                setMarked(data.find((person: Styret) => person.stilling === "Teamleder markedsføring" ) || null);
                setBedrift(data.find((person: Styret) => person.stilling === "Teamleder bedrift") || null);
                setLogistikk(data.find((person: Styret) => person.stilling === "Teamleder logistikk") || null);
                setFa(data.find((person: Styret) => person.stilling === "Teamleder FA") || null);
            }
            setLoading(false);
        };

        fetchStyret();
    }, []);

    return (
        <div className="flex flex-col items-center">
            {/* Main content */}
            <div className="w-full p-6 lg:px-12">
                {/* Blue Section */}
                <div
                    className="flex flex-col justify-center items-center w-full max-w-6xl mx-auto h-auto lg:h-auto p-6 text-white text-center rounded-lg"
                    style={{ backgroundColor: "#4682B4" }}
                >
                    <h3 className="text-3xl">Styret</h3>
                </div>

                {loading ? (
                    <p className="text-gray-500 text-center py-6">Laster inn styret...</p>
                ) : (
                    <>
                        {/* Leader Section */}
                        {leder && (
                            <div className="flex flex-col items-center justify-center my-3">
                                <img
                                    src={`${supabaseStorageUrl}${leder.name.split(" ")[0]}.JPG`}
                                    className="h-40 rounded-2xl object-cover"
                                    alt={leder.stilling}
                                />
                                <p className="font-semibold mt-2">{leder.stilling}</p>
                                <p className="text-sm">{leder.name}</p>
                                <p>Tlf: <a href={`tel:${leder.telefon}`} className="text-blue-500">{leder.telefon}</a></p>
                                <p>Mail: <a href={`mailto:${leder.mail}`} className="text-blue-500">{leder.mail}</a></p>
                            </div>
                        )}

                        {/* Nestleder, HR, Økonomiansvarlig in a row */}
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:p-0 flex-row justify-center sm:grid-cols-2">
                            {hr && (
                                <div className="text-center flex flex-col items-center justify-center my-3">
                                    <img
                                        src={`${supabaseStorageUrl}${hr.name.split(" ")[0]}.JPG`}
                                        className="h-40 rounded-2xl"
                                        alt={`${hr.stilling}`}
                                    />
                                    <p className="font-semibold mt-2">{hr.name}</p>
                                    <p className="text-sm">{hr.stilling}</p>
                                    <p> tlf: <a href={`tel:${hr.telefon}`} className="text-blue-500">{hr.telefon}</a> </p> 
                                    <p> Mail: <a href={`mailto:${hr.mail}`} className="text-blue-500">{hr.mail}</a> </p>
                                </div>
                            )}
                            {nestleder && (
                                <div className="text-center flex flex-col items-center justify-center my-3">
                                    <img
                                        src={`${supabaseStorageUrl}${nestleder.name.split(" ")[0]}.JPG`}
                                        className="h-40 rounded-2xl"
                                        alt={`${nestleder.stilling}`}
                                    />
                                    <p className="font-semibold mt-2">{nestleder.stilling}</p>
                                    <p className="text-sm">{nestleder.name}</p>
                                    <p> tlf: <a href={`tel:${nestleder.telefon}`} className="text-blue-500">{nestleder.telefon}</a> </p> 
                                    <p> Mail: <a href={`mailto:${nestleder.mail}`} className="text-blue-500">{nestleder.mail}</a> </p>
                                </div>
                            )}
                            {økonomi && (
                                <div className="text-center flex flex-col items-center justify-center my-3">
                                    <img
                                        src={`${supabaseStorageUrl}${økonomi.name.split(" ")[0]}.JPG`}
                                        className="h-40 rounded-2xl"
                                        alt={`${økonomi.stilling}`}
                                    />
                                    <p className="font-semibold mt-2">{økonomi.name}</p>
                                    <p className="text-sm">{økonomi.stilling}</p>
                                    <p> tlf: <a href={`tel:${økonomi.telefon}`} className="text-blue-500">{økonomi.telefon}</a> </p> 
                                    <p> Mail: <a href={`mailto:${økonomi.mail}`} className="text-blue-500">{økonomi.mail}</a> </p>
                                </div>
                            )}
                        </div>

                        {/* Other members */}
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:p-0 flex-row justify-center sm:grid-cols-2">
                            {marked && (
                                <div className="text-center flex flex-col items-center justify-center my-3">
                                    <img
                                        src={`${supabaseStorageUrl}${marked.name.split(" ")[0]}.JPG`}
                                        className="h-40 rounded-2xl"
                                        alt={`${marked.stilling}`}
                                    />
                                    <p className="font-semibold mt-2">{marked.name}</p>
                                    <p className="text-sm">{marked.stilling}</p>
                                    <p> tlf: <a href={`tel:${marked.telefon}`} className="text-blue-500">{marked.telefon}</a> </p> 
                                    <p> Mail: <a href={`mailto:${marked.mail}`} className="text-blue-500">{marked.mail}</a> </p>
                                </div>
                            )}
                            {bedrift && (
                                <div className="text-center flex flex-col items-center justify-center my-3">
                                    <img
                                        src={`${supabaseStorageUrl}${bedrift.name.split(" ")[0]}.JPG`}
                                        className="h-40 rounded-2xl"
                                        alt={`${bedrift.stilling}`}
                                    />
                                    <p className="font-semibold mt-2">{bedrift.name}</p>
                                    <p className="text-sm">{bedrift.stilling}</p>
                                    <p> tlf: <a href={`tel:${bedrift.telefon}`} className="text-blue-500">{bedrift.telefon}</a> </p> 
                                    <p> Mail: <a href={`mailto:${bedrift.mail}`} className="text-blue-500">{bedrift.mail}</a> </p>
                                </div>
                            )}
                            {logistikk && (
                                <div className="text-center flex flex-col items-center justify-center my-3">
                                    <img
                                        src={`${supabaseStorageUrl}${logistikk.name.split(" ")[0]}.JPG`}
                                        className="h-40 rounded-2xl"
                                        alt={`${logistikk.stilling}`}
                                    />
                                    <p className="font-semibold mt-2">{logistikk.name}</p>
                                    <p className="text-sm">{logistikk.stilling}</p>
                                    <p> tlf: <a href={`tel:${logistikk.telefon}`} className="text-blue-500">{logistikk.telefon}</a> </p> 
                                    <p> Mail: <a href={`mailto:${logistikk.mail}`} className="text-blue-500">{logistikk.mail}</a> </p>
                                </div>
                            )}
                            {fa && (
                                <div className="text-center flex flex-col items-center justify-center my-3">
                                    <img
                                        src={`${supabaseStorageUrl}${fa.name.split(" ")[0]}.JPG`}
                                        className="h-40 rounded-2xl"
                                        alt={`${fa.stilling}`}
                                    />
                                    <p className="font-semibold mt-2">{fa.name}</p>
                                    <p className="text-sm">{fa.stilling}</p>
                                    <p> tlf: <a href={`tel:${fa.telefon}`} className="text-blue-500">{fa.telefon}</a> </p> 
                                    <p> Mail: <a href={`mailto:${fa.mail}`} className="text-blue-500">{fa.mail}</a> </p>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
