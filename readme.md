# deku-tooltip [![Build Status](https://travis-ci.org/kevva/deku-tooltip.svg?branch=master)](https://travis-ci.org/kevva/deku-tooltip)

> Tooltip component for Deku


## Install

```
$ npm install --save deku-tooltip
```


## Usage

```js
import Tooltip from 'deku-tooltip';

const render = () => {
	return (
		<Tooltip content='Hello world!'>
			Hover me!
		</Tooltip>
	);
};

export default {render};
```


## API

### class

Type: `string`

Class on the container element.

### component

Type: `string`  
Default: `span`

HTML tag on the container element.

### content

Type: `string`

Content that should appear in the tooltip.


## License

MIT © [Kevin Martensson](http://github.com/kevva)
