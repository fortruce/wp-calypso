import React from 'react';
import ReactDom from 'react-dom';

export default React.createClass( {
	propTypes: {
		html: React.PropTypes.string.isRequired,
		tag: React.PropTypes.string,
		className: React.PropTypes.string,
	},

	getDefaultProps() {
		return {
			tag: 'div'
		}
	},

	componentDidMount() {
		ReactDom.findDOMNode( this ).innerHTML = this.props.html;
	},

	componentDidUpdate( prevProps ) {
		if ( prevProps.html !== this.props.html ) {
			this.componentDidMount();
		}
	},

	render() {
		var tag = this.props.tag;
		var props = {
			className: this.props.className
		};
		return React.createElement( tag, props );
	}
} );