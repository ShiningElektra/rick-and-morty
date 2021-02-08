import "./card.css";
import { createCard } from "./card.js";

export default {
    title: "Components/Card",
    parameters:{ layout: "centered" },
};

export const Rick = () =>
createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    name: "Rick Sanchenz",
    status:"Alive",
    species: "Human",
    origin: { name: "Earth (C-137)"},
})
