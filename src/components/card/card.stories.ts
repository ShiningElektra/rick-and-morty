import "./card.css";
import { createCard } from "./card";
import { createElement } from "../../utils/createelement";

export default {
    title: "Components/Card",
    parameters: { layout: "centered" },
};

export const Rick = () =>
    createCard({
        imgSrc: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        name: "Rick Sanchenz",
        status: "Alive",
        species: "Human",
        origin: { name: "Earth (C-137)" },
    })

export const Multiple = () => {
    const characters = [
        {
            imgSrc: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            name: "Rick Sanchenz",
            status: "Alive",
            species: "Human",
            origin: { name: "Earth (C-137)" },
        },
        {
            imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
            name: "Morty Smith",
            status: "Dead",
            species: "Human",
            origin: { name: "Earth (C-137)" },
        },
        {}
    ];

    const container = createElement("article", {
        className: "container",
        childs: characters.map((character) => createCard(character)),
    });

    return container;
};