import "./card.css";
import { createCard } from "./card.js";

export default {
    title: "Components/Card",
    parameters:{ layout: "centered" },
};

export const Rick = () =>
createCard({
    img: "https://https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    name: "Rick Sanchenz",
    species: "Human",
    origin: "Earth (C-137)",
})
