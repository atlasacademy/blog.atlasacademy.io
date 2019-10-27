import BaseExtension from "../baseExtension";

export default class PartyStartExtension extends BaseExtension {

    constructor() {
        super({
            title: 'Party End',
            description: 'Ends party servant/ce layout',
            keyword: 'party-end',
            hasParameters: false,
            replacer: () => {
                return '</div></div>';
            },
            showTutorial: false,
        });
    }

}
