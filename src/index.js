import App from './app';
// import 'bootstrap';
import './app.scss';
import PartyCeExtension from "./extensions/party/partyCeExtension";
import PartyEndExtension from "./extensions/party/partyEndExtension";
import PartyServantExtension from "./extensions/party/partyServantExtension";
import PartyStartExtension from "./extensions/party/partyStartExtension";
import TitleExtension from "./extensions/titleExtension";

const app = new App();

app.registerExtension(new TitleExtension());
app.registerExtension(new PartyStartExtension());
app.registerExtension(new PartyServantExtension());
app.registerExtension(new PartyCeExtension());
app.registerExtension(new PartyEndExtension());

app.render();
