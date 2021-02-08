import { format } from "prettier";
import { createElement } from "../../utils/createelement";

export function createCard({img, name, species, origin}){
return createElement("div"),{
    children:[
        createElement("img",{
            className:"portrait",
            scr: img,
        }),
        createElement("h2",{
            className:"name",
            innerText: name,
        }),
        createElement("p",{
            className:"species",
            innerText: species,
        }),
        createElement("p",{
            className:"origin",
            innerText: origin,
        }),
    ],
};
}