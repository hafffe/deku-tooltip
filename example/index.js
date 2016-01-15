/** @jsx dom */
import dom from 'magic-virtual-element';
import {render as r, tree} from 'deku';
import Tooltip from '../';

const render = () => {
	return (
		<Tooltip component='p' content='Hello world!'>
			Hover me!
		</Tooltip>
	);
};

const App = {render};
const app = tree(<App/>);

r(app, document.body);
