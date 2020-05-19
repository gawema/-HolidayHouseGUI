import React from 'react';
import axios from 'axios'

import { Card } from 'antd';



class HouseDetail extends React.Component {

	state = {
		house: {}
	}

	componentDidMount() {
		const houseID = this.props.match.params.houseID;
		axios.get(`http://127.0.0.1:8000/api/${houseID}`)
		.then(res => {
			this.setState({
				house: res.data
			});
		}
		)
	}

	render() {
		return(
			<Card title={this.state.house.name}>
				<p>{this.state.house.description}</p>
			</Card>
		)
	}
}

export default HouseDetail;