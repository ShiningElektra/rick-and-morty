import { format } from "prettier";
import { createElement } from "../../utils/createelement";

export function createCard({imgSrc, name, status, species, origin}){
return createElement("div",{
    className:"card",
    children:[
        createElement("img",{
            className:"card__portrait",
            src: imgSrc,
        }),
        createElement("h2",{
            className:"card__name",
            innerText: name,
        }),
        createElement("p",{
        innerText:`${status === "Alive"? "😎" : "💀"} - ${status}`,
        }),
        createElement("p",{
            className:"info__species",
            innerText: species,
        }),
        createElement("p",{
            className:"info__origin",
            innerText: origin.name,
        }),
    ],
});
}