import Component from "../Modules/Component.js";
import {React} from "../Modules/React.js";

export class Blog extends Component {
    render() {
        return React.createEl(
            "h1",
            {},
            [
                "Liste des articles",
            ],
        )
    }
}