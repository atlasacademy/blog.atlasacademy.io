import axios from 'axios';
import showdown from 'showdown';

export default class App {
    getLayoutPath() {
        return window.location.pathname + '.layout';
    }

    render() {
        Promise
            .resolve()
            .then(() => {
                return axios.get(this.getLayoutPath());
            })
            .then((response) => {
                let converter = new showdown.Converter(),
                    layout = response.data,
                    html = converter.makeHtml(layout);

                document.getElementById('app').innerHTML = html;
            });
    }
}
