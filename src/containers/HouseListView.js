import React from 'react';
import axios from 'axios'
import House from '../components/House'


class HouseList extends React.Component {

	state = {
		houses: []
	}

	componentDidMount() {
		axios.get('http://127.0.0.1:8000/api/')
		.then(res => {
			this.setState({
				houses: res.data
			});
		}
		)
	}

	render() {
		return(
			<House data={this.state.houses}/>
		)
	}
}

export default HouseList;