import BaseExtension from "../baseExtension";

export default class PartyServantExtension extends BaseExtension {

    constructor() {
        super({
            title: 'Party Servant',
            description: 'Adds servant card to party layout',
            keyword: 'party-servant',
            hasParameters: true,
            replacer: (match, id) => {
                let paddedId = id.padStart(3, '0'),
                    filename = `ServantPortrait_${paddedId}_1.png`,
                    domain = `https://assets.atlasacademy.io/Database/ServantPortrait`,
                    source = `${domain}/${filename}`;

                return `<div class="party-servant"><img src="${source}" /></div>`;
            },
            showTutorial: false,
        });
    }
    
}