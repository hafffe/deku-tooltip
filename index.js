/** @jsx dom */
import dom from 'magic-virtual-element';
import {render as r, tree} from 'deku';
import Tooltip from '../';

const render = () => {
	return (
		<Tooltip class='TooltipTrigger' content='Hello world!'>
			Hover me!
		</Tooltip>
	);
};

const App = {render};
const app = tree(<App/>);

r(app, document.body);
