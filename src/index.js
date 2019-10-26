import App from './app';
// import 'bootstrap';
import './app.scss';
import TitleExtension from "./extensions/titleExtension";

const app = new App();

app.registerExtension(new TitleExtension());

app.render();
