import arrayUnique from "array-unique";
import escapeStringRegexp from "escape-string-regexp";

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
    startSequence: '{{',
    endSequence: '}}',
    parameterSeparator: ',',
};

export default class BaseExtension {

    constructor(props) {
        this.settings = {
            ...defaults,
            ...props,
        };
    }



    getShowdownConfigs() {
        return {
            type: 'lang',
            filter: (text) => {
                return text.replace(this.regex(), this.settings.replacer);
            }
        };
    }

    getTitle() {
        return this.settings.title;
    }

    regex() {
        let characters = this.settings.startSequence + this.settings.endSequence + this.settings.parameterSeparator;

        characters = characters.split('');
        characters = arrayUnique(characters);
        characters = characters.join('');

        let parameterRegex =
            `:([^${escapeStringRegexp(characters)}]+)`
            + `(?:([^${escapeStringRegexp(characters)}]+))*`;

        let regex =
            escapeStringRegexp(this.settings.startSequence)
            + escapeStringRegexp(this.settings.keyword)
            + (this.settings.hasParameters ? parameterRegex : '')
            + escapeStringRegexp(this.settings.endSequence);

        return new RegExp(regex, 'g');
    }

}
