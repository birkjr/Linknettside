import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import BoardPic from "../components/Tools/BoardPic"; // Adjust the path as necessary

const supabaseStorageUrl = "https://iglqmuqbolugyifhsrfh.supabase.co/storage/v1/object/public/bilder/board_pic/";

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
                setLeder(data.find((person: Styret) => person.stilling === "Leder") || null);
                setNestleder(data.find((person: Styret) => person.stilling === "Nestleder") || null);
                setHr(data.find((person: Styret) => person.stilling === "HR ansvarlig") || null);
                setØkonomi(data.find((person: Styret) => person.stilling === "Økonomiansvarlig") || null);
                setMarked(data.find((person: Styret) => person.stilling === "Teamleder markedsføring") || null);
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
            <div className="w-full p-6 lg:px-12">
                <div className="flex flex-col justify-center items-center w-full max-w-6xl mx-auto h-auto lg:h-auto p-6 text-white text-center rounded-lg" style={{ backgroundColor: "#4682B4" }}>
                    <h3 className="text-3xl">Styret</h3>
                </div>

                {loading ? (
                    <p className="text-gray-500 text-center py-6">Laster inn styret...</p>
                ) : (
                    <>
                        {leder && (
                            <div className="flex flex-col items-center justify-center my-3">
                                <BoardPic src={`${supabaseStorageUrl}${leder.name.split(" ")[0]}.png`} alt={leder.stilling} className="h-40 rounded-2xl object-cover" />
                                <p className="font-semibold mt-2">{leder.stilling}</p>
                                <p className="text-sm">{leder.name}</p>
                                <p>Tlf: <a href={`tel:${leder.telefon}`} className="text-blue-500">{leder.telefon}</a></p>
                                <p>Mail: <a href={`mailto:${leder.mail}`} className="text-blue-500">{leder.mail}</a></p>
                            </div>
                        )}

                        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:p-0 flex-row justify-center sm:grid-cols-2">
                            {nestleder && (
                                <div className="text-center flex flex-col items-center justify-center my-3">
                                    <BoardPic src={`${supabaseStorageUrl}${nestleder.name.split(" ")[0]}.png`} alt={`${nestleder.stilling}`} className="h-40 rounded-2xl" />
                                    <p className="font-semibold mt-2">{nestleder.name}</p>
                                    <p className="text-sm">{nestleder.stilling}</p>
                                    <p>Tlf: <a href={`tel:${nestleder.telefon}`} className="text-blue-500">{nestleder.telefon}</a></p>
                                    <p>Mail: <a href={`mailto:${nestleder.mail}`} className="text-blue-500">{nestleder.mail}</a></p>
                                </div>
                            )}
                            {hr && (
                                <div className="text-center flex flex-col items-center justify-center my-3">
                                    <BoardPic src={`${supabaseStorageUrl}${hr.name.split(" ")[0]}.png`} alt={`${hr.stilling}`} className="h-40 rounded-2xl" />
                                    <p className="font-semibold mt-2">{hr.stilling}</p>
                                    <p className="text-sm">{hr.name}</p>
                                    <p>Tlf: <a href={`tel:${hr.telefon}`} className="text-blue-500">{hr.telefon}</a></p>
                                    <p>Mail: <a href={`mailto:${hr.mail}`} className="text-blue-500">{hr.mail}</a></p>
                                </div>
                            )}
                            {økonomi && (
                                <div className="text-center flex flex-col items-center justify-center my-3">
                                    <BoardPic src={`${supabaseStorageUrl}${økonomi.name.split(" ")[0]}.png`} alt={`${økonomi.stilling}`} className="h-40 rounded-2xl" />
                                    <p className="font-semibold mt-2">{økonomi.name}</p>
                                    <p className="text-sm">{økonomi.stilling}</p>
                                    <p>Tlf: <a href={`tel:${økonomi.telefon}`} className="text-blue-500">{økonomi.telefon}</a></p>
                                    <p>Mail: <a href={`mailto:${økonomi.mail}`} className="text-blue-500">{økonomi.mail}</a></p>
                                </div>
                            )}
                        </div>

                        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:p-0 flex-row justify-center sm:grid-cols-2">
                            {marked && (
                                <div className="text-center flex flex-col items-center justify-center my-3">
                                    <BoardPic src={`${supabaseStorageUrl}${marked.name.split(" ")[0]}.png`} alt={`${marked.stilling}`} className="h-40 rounded-2xl" />
                                    <p className="font-semibold mt-2">{marked.name}</p>
                                    <p className="text-sm">{marked.stilling}</p>
                                    <p>Tlf: <a href={`tel:${marked.telefon}`} className="text-blue-500">{marked.telefon}</a></p>
                                    <p>Mail: <a href={`mailto:${marked.mail}`} className="text-blue-500">{marked.mail}</a></p>
                                </div>
                            )}
                            {bedrift && (
                                <div className="text-center flex flex-col items-center justify-center my-3">
                                    <BoardPic src={`${supabaseStorageUrl}${bedrift.name.split(" ")[0]}.png`} alt={`${bedrift.stilling}`} className="h-40 rounded-2xl" />
                                    <p className="font-semibold mt-2">{bedrift.name}</p>
                                    <p className="text-sm">{bedrift.stilling}</p>
                                    <p>Tlf: <a href={`tel:${bedrift.telefon}`} className="text-blue-500">{bedrift.telefon}</a></p>
                                    <p>Mail: <a href={`mailto:${bedrift.mail}`} className="text-blue-500">{bedrift.mail}</a></p>
                                </div>
                            )}
                            {logistikk && (
                                <div className="text-center flex flex-col items-center justify-center my-3">
                                    <BoardPic src={`${supabaseStorageUrl}${logistikk.name.split(" ")[0]}.png`} alt={`${logistikk.stilling}`} className="h-40 rounded-2xl" />
                                    <p className="font-semibold mt-2">{logistikk.name}</p>
                                    <p className="text-sm">{logistikk.stilling}</p>
                                    <p>Tlf: <a href={`tel:${logistikk.telefon}`} className="text-blue-500">{logistikk.telefon}</a></p>
                                    <p>Mail: <a href={`mailto:${logistikk.mail}`} className="text-blue-500">{logistikk.mail}</a></p>
                                </div>
                            )}
                            {fa && (
                                <div className="text-center flex flex-col items-center justify-center my-3">
                                    <BoardPic src={`${supabaseStorageUrl}${fa.name.split(" ")[0]}.png`} alt={`${fa.stilling}`} className="h-40 rounded-2xl" />
                                    <p className="font-semibold mt-2">{fa.name}</p>
                                    <p className="text-sm">{fa.stilling}</p>
                                    <p>Tlf: <a href={`tel:${fa.telefon}`} className="text-blue-500">{fa.telefon}</a></p>
                                    <p>Mail: <a href={`mailto:${fa.mail}`} className="text-blue-500">{fa.mail}</a></p>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}