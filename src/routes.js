import React from 'react';
import { Route } from 'react-router-dom'
import HouseList from './containers/HouseListView';
import HouseDetail from './containers/HouseDetailView';

const BaseRouter = () => (
	<div>
		<Route exact path='/' component={HouseList} />
		<Route exact path='/:houseID' component={HouseDetail} />
	</div>
);

export default BaseRouter;