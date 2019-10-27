import BaseExtension from "../baseExtension";

export default class PartyCeExtension extends BaseExtension {

    constructor() {
        super({
            title: 'Party CE',
            description: 'Adds CE to party layout',
            keyword: 'party-ce',
            hasParameters: true,
            replacer: (match, id) => {
                let paddedId = id.padStart(4, '0'),
                    filename = `CraftEssencePortrait_${paddedId}_1.png`,
                    domain = `https://assets.atlasacademy.io/Database/CraftEssencePortrait`,
                    source = `${domain}/${filename}`;

                return `<div class="party-ce"><img src="${source}" /></div>`;
            },
            showTutorial: false,
        });
    }

}