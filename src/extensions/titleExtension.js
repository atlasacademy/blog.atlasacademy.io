import BaseExtension from "./baseExtension";

export default class TitleExtension extends BaseExtension {

    constructor() {
        super({
            title: 'Page Title',
            description: 'Sets the page title in the browser window',
            keyword: 'title',
            hasParameters: true,
            replacer: (match, title) => {
                document.title = title + ' - Atlas Academy Blog';

                return '';
            },
            showTutorial: false,
        });
    }

}