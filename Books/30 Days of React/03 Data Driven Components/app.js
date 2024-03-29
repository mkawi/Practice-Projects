class App extends React.Component {
	render() {
		return (
			<div className="notificationsFrame">
				<div className="panel">
					<Header title="Timeline" />
					<Content activities={activities} />,
				</div>
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<div className="menuIcon">
					<div className="dashTop" />
					<div className="dashBottom" />
					<div className="circle" />
				</div>

				<span className="title">{this.props.title}</span>

				<input type="text" className="searchInput" placeholder="Search ..." />

				<div className="fa fa-search searchIcon" />
			</div>
		);
	}
}
class Content extends React.Component {
	render() {
		const { activities } = this.props; // ES6 destructuring

		return (
			<div className="content">
				<div className="line" />

				{/* Timeline item */}
				{activities.map((activity) => <ActivityItem activity={activity} />)}
			</div>
		);
	}
}

class ActivityItem extends React.Component {
	render() {
		const { activity } = this.props; // ES6 destructuring

		return (
			<div className="item">
				<div className="avatar">
					<img alt={activity.text} src={activity.user.avatar} />
					{activity.user.name}
				</div>

				<span className="time">{activity.timestamp}</span>
				<p>{activity.text}</p>
				<div className="commentCount">{activity.comments.length}</div>
			</div>
		);
	}
}

const activities = [
	{
		timestamp: new Date().getTime(),
		text: 'Ate lunch',
		user: {
			id: 1,
			name: 'Nate',
			avatar: 'http://www.croop.cl/UI/twitter/images/doug.jpg'
		},
		comments: [ { from: 'Ari', text: 'Me too!' } ]
	},
	{
		timestamp: new Date().getTime(),
		text: 'Woke up early for a beautiful run',
		user: {
			id: 2,
			name: 'Ari',
			avatar: 'http://www.croop.cl/UI/twitter/images/doug.jpg'
		},
		comments: [ { from: 'Nate', text: 'I am so jealous' } ]
	},
	{
		timestamp: new Date().getTime(),
		text: 'Read a few pages of fullstack React',
		user: {
			id: 3,
			name: 'Moudi',
			avatar: 'http://www.croop.cl/UI/twitter/images/doug.jpg'
		},
		comments: [ { from: 'Nate', text: 'Nice one!' } ]
	}
];

ReactDOM.render(<App />, document.querySelector('#app'));
