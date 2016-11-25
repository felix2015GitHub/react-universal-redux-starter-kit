import React from 'react';

class Html extends React.Component {
	render () {
		const { reactHtml, initState } = this.props;
		return (
			<html>
				<head>
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				</head>
				<body>
					<div id="app" dangerouslySetInnerHTML={{ __html: reactHtml }}></div>
					<script dangerouslySetInnerHTML={{ __html: `window.__INITIAL_STATE__ = ${initState}`}}/>
					<script src="/bundle.js" charset="utf-8"></script>
				</body>
			</html>
		);
	}
}

export default Html;