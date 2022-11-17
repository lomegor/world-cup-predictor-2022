import QatarPNG from "./assets/Qatar.png";
import EcuadorPNG from "./assets/Ecuador.png";
import SenegalPNG from "./assets/Senegal.png";
import MexicoPNG from "./assets/Mexico.png";
import PolandPNG from "./assets/Poland.png";
import FrancePNG from "./assets/France.png";
import AustraliaPNG from "./assets/Australia.png";
import DenmarkPNG from "./assets/Denmark.png";
import TunisiaPNG from "./assets/Tunisia.png";
import SpainPNG from "./assets/Spain.png";
import CostaRicaPNG from "./assets/CostaRica.png";
import GermanyPNG from "./assets/Germany.png";
import JapanPNG from "./assets/Japan.png";
import BelgiumPNG from "./assets/Belgium.png";
import CanadaPNG from "./assets/Canada.png";
import MoroccoPNG from "./assets/Morocco.png";
import CroatiaPNG from "./assets/Croatia.png";
import BrazilPNG from "./assets/Brazil.png";
import SerbiaPNG from "./assets/Serbia.png";
import SwitzerlandPNG from "./assets/Switzerland.png";
import CameroonPNG from "./assets/Cameroon.png";
import PortugalPNG from "./assets/Portugal.png";
import GhanaPNG from "./assets/Ghana.png";
import UruguayPNG from "./assets/Uruguay.png";
import SouthKoreaPNG from "./assets/SouthKorea.png";
import SaudiArabia from "./assets/SaudiArabia.png";
import ArgentinaPNG from "./assets/Argentina.png";
import WalesPNG from "./assets/Wales.png";
import USAPNG from "./assets/USA.png";
import IranPNG from "./assets/Iran.png";
import EnglandPNG from "./assets/England.png";
import NetherlandsPNG from "./assets/Netherlands.png";

export type Team = {
    name: string;
    image: string;
};

export const TEAMS: Team[] = [
    {
        name: "Qatar",
        image: QatarPNG,
    },
    {
        name: "Ecuador",
        image: EcuadorPNG,
    },
    {
        name: "Senegal",
        image: SenegalPNG,
    },
    {
        name: "Netherlands",
        image: NetherlandsPNG,
    },
    {
        name: "England",
        image: EnglandPNG,
    },
    {
        name: "Iran",
        image: IranPNG,
    },
    {
        name: "USA",
        image: USAPNG,
    },
    {
        name: "Wales",
        image: WalesPNG,
    },
    {
        name: "Argentina",
        image: ArgentinaPNG,
    },
    {
        name: "Saudi Arabia",
        image: SaudiArabia,
    },
    {
        name: "Mexico",
        image: MexicoPNG,
    },
    {
        name: "Poland",
        image: PolandPNG,
    },
    {
        name: "France",
        image: FrancePNG,
    },
    {
        name: "Australia",
        image: AustraliaPNG,
    },
    {
        name: "Denmark",
        image: DenmarkPNG,
    },
    {
        name: "Tunisia",
        image: TunisiaPNG,
    },
    {
        name: "Spain",
        image: SpainPNG,
    },
    {
        name: "Costa Rica",
        image: CostaRicaPNG,
    },
    {
        name: "Germany",
        image: GermanyPNG,
    },
    {
        name: "Japan",
        image: JapanPNG,
    },
    {
        name: "Belgium",
        image: BelgiumPNG,
    },
    {
        name: "Canada",
        image: CanadaPNG,
    },
    {
        name: "Morocco",
        image: MoroccoPNG,
    },
    {
        name: "Croatia",
        image: CroatiaPNG,
    },
    {
        name: "Brazil",
        image: BrazilPNG,
    },
    {
        name: "Serbia",
        image: SerbiaPNG,
    },
    {
        name: "Switzerland",
        image: SwitzerlandPNG,
    },
    {
        name: "Cameroon",
        image: CameroonPNG,
    },
    {
        name: "Portugal",
        image: PortugalPNG,
    },
    {
        name: "Ghana",
        image: GhanaPNG,
    },
    {
        name: "Uruguay",
        image: UruguayPNG,
    },
    {
        name: "South Korea",
        image: SouthKoreaPNG,
    },
];

const data = {
    groups: {
        A: [0, 1, 2, 3],
        B: [4, 5, 6, 7],
        C: [8, 9, 10, 11],
        D: [12, 13, 14, 15],
        E: [16, 17, 18, 19],
        F: [20, 21, 22, 23],
        G: [24, 25, 26, 27],
        H: [28, 29, 30, 31],
    },
    knockout: {
        sixteen: [
            ["A1", "B2"],
            ["C1", "D2"],
            ["E1", "F2"],
            ["G1", "H2"],
            ["B1", "A2"],
            ["D1", "C2"],
            ["F1", "E2"],
            ["H1", "G2"],
        ],
        quarter: [
            ["sixteen1", "sixteen2"],
            ["sixteen3", "sixteen4"],
            ["sixteen5", "sixteen6"],
            ["sixteen7", "sixteen8"],
        ],
        semifinal: [
            ["quarter1", "quarter2"],
            ["quarter3", "quarter4"],
        ],
        final: [["semifinal1", "semifinal2"]],
        playoff: [["semifinal3", "semifinal4"]],
    },
};

export default data;
