import axios from 'axios';
import showdown from 'showdown';

export default class App {
    constructor() {
        this.extensions = [];
    }


    getLayoutPath() {
        return window.location.pathname + '.layout';
    }

    registerExtension(extension) {
        this.extensions.push(extension);
    }

    render() {
        Promise
            .resolve()
            .then(() => {
                return axios.get(this.getLayoutPath(), {
                    params: {
                        nocache: Date.now()
                    }
                });
            })
            .then((response) => {
                let converter = new showdown.Converter({
                        extensions: this.extensions.map(extension => extension.getShowdownConfigs()),
                    }),
                    layout = response.data;

                document.getElementById('app').innerHTML = converter.makeHtml(layout);
            });
    }
}
