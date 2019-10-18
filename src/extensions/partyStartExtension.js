import BaseExtension from "./baseExtension";

export default class PartyStartExtension extends BaseExtension {

    constructor() {
        super({
            title: 'Party Start',
            description: 'Starts party servant/ce layout',
            keyword: 'party-start',
            hasParameters: false,
            replacer: () => {
                return '<div class="fgo-party">';
            },
            showTutorial: false,
        });
    }

}
