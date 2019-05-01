import { eCardType } from "./enums"

export class Card {
    word: string;
    CardType: eCardType;
    Cardrender: HTMLElement;

    constructor(pword: string, cardType: eCardType)
    {
        this.word = pword;
        this.CardType = cardType;
    }

    Click()
    {
        this.Cardrender.style.color = "#FFF";
        this.Cardrender.style.backgroundColor = this.ToggledColor();
        return true;
    }

    ToggledColor()
    {
        let color: string;
        switch (this.CardType)
        {
            case eCardType.Assassin: color = "Black"; break;
            case eCardType.Neutral: color = "Gray"; break;
            case eCardType.RedSpy: color = "Red"; break;
            case eCardType.BlueSpy: color = "Blue"; break;
        }
        return color;
    }

    htmlToElement(html : string) : HTMLElement{
        let template = document.createElement('template'); 
        template.innerHTML = html.trim();
        return <HTMLElement>template.content.firstChild;
    }

    Render(outputElement: HTMLElement)
    {
        let html :string = `<div class="Card"><div>${this.word}</div><div>${this.word}</div></div>`;

        this.Cardrender = this.htmlToElement(html);
        this.Cardrender.addEventListener('click', (e:Event) => this.Click());
        outputElement.appendChild(this.Cardrender);
    }
}