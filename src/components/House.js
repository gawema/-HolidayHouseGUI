import React from 'react';

import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';


const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);



const House = (props) =>{
	return (
		<List
			itemLayout="vertical"
			size="large"
			pagination={{
			onChange: page => {
				console.log(page);
			},
			pageSize: 3,
			}}
			dataSource={props.data}

			renderItem={item => (
			<List.Item
				key={item.title}
				extra={
				<img
					width={272}
					alt="logo"
					src="https://media.villagetaways.com/villas-src/bali/2252/3830a89c8a577589c791d5b28f03d1e5_full.jpg"
				/>
				}
			>
				<List.Item.Meta
				// avatar={<Avatar src={item.avatar} />}
				title={<a href={`/${item.id}`}>{item.name}</a>}
				description={item.description}
				/>
				{item.content}
			</List.Item>
			)}
		/>
	);
}

export default House