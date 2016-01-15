import assertElement from 'assert-element';
import componentMock from 'component-mock';
import test from 'ava';
import m from './dist';

test(() => {
	const mock = componentMock(m);
	const el = mock.render();

	assertElement.isNode(el, 'span');
});
