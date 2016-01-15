/** @jsx dom */
import dom from 'magic-virtual-element';
import objectAssign from 'object-assign';
import objectOmit from 'object-omit';

const propTypes = {
	children: {
		type: 'array'
	},
	class: {
		type: 'string'
	},
	component: {
		type: 'string'
	},
	content: {
		type: 'string'
	}
};

const defaultProps = {
	component: 'span'
};

const render = ({props, state}, setState) => {
	const {children, component, content} = props;
	const {open} = state;
	const style = {display: open ? 'block' : 'none'};

	return dom(component, objectAssign(objectOmit(props, Object.keys(propTypes)), {
		onMouseOver: () => setState({open: true}),
		onMouseOut: () => setState({open: false})
	}), [
		...children,
		<div class={['Tooltip', props.class]} style={style}>{content}</div>
	]);
};

export default {defaultProps, propTypes, render};
