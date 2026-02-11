import { NextResponse } from "next/server";

export async function GET() {
  const vcf = `BEGIN:VCARD
VERSION:3.0
FN:Mohamed Aziz Khoufi
ORG:Faderco SPA
TITLE:Directeur Exécutif
TEL;TYPE=CELL:+213770838733
EMAIL:akhoufi@faderco.com
ADR:;;Algiers;;;Algeria
URL:https://dz.linkedin.com/in/khoufiaziz
END:VCARD
`;

  return new NextResponse(vcf, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'inline; filename="khoufi.vcf"',
      "Cache-Control": "no-store",
    },
  });
}
