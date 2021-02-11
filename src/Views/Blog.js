import {React} from '../Modules/React.js';
import {LoadPosts} from "../Component/LoadPosts.js";
import {Header} from "../Component/Header.js";
import {Footer} from "../Component/Footer.js";

export default [
    React.createEl(
        Header,
        undefined,
    ),
    React.createEl(
        LoadPosts,
        undefined,
    ),
    React.createEl(
        Footer,
        undefined,
    ),
]
