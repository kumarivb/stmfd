import React from 'react';

const ExplorerEventsTable = props => (
	<tr key = {props.id}>
		<td width="20%">{props.day_of_week}, {props.month}, {props.date}</td>
		<td width="45%">{props.description}</td>
		<td width="20%">{props.eventType}</td>
		<td width="15%" className="text-center">{props.time}</td>
  </tr>
    );

 export default ExplorerEventsTable;
