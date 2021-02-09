import { format } from "prettier";
import { createElement } from "../../utils/createelement";

// function numberButton(result) {
//     return [7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((number) =>
//       createElement("button", {
//         innerText: number,
//         className: "numberButton",
//         onclick: () => {
//           result.value += number;
//         },
//       })
//     );
//   }

export function createCard({ imgSrc, name, status, species, origin }) {
    return createElement("article", {
        className: "card",
        childs: [
            createElement("img", {
                className: "card__portrait",
                alt: "",
                src: imgSrc,
            }),
            createElement("h2", {
                className: "card__name",
                innerText: name,
            }),
            createElement("p", {
                innerText: `${status === "Alive" ? "😎" : "💀"} - ${status}`,
            }),
            createElement("p", {
                className: "info__species",
                innerText: species,
            }),
            createElement("p", {
                className: "info__origin",
                innerText: origin.name,
            }),
        ],
    });
}