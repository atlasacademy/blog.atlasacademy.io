const defaults = {
    title: '',
    description: '',
    keyword: '',
    hasParameters: false,
    replacer: (match, parameters) => {
        return match;
    },
    showTutorial: false,
    tutorial: '',
    priority: 0,
};

export default class BaseExtension {

    constructor(props) {
        this.settings = {
            ...defaults,
            ...props,
        };
    }

}
