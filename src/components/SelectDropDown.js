import React, { Component } from 'react';


class SelectDropDown extends Component {

	generateOptions(options) {
		return options.map((val, index) => {
			return (
				<option
					key={index}
					value={val}
				>
					{val}
				</option>
			);
		});
	}
	
	render() {
		const title = this.props.title,
			options = this.generateOptions(this.props.options),
			onChange = this.props.onChange,
			selectedValue = this.props.selectedValue;

		return (
			<span>
				<h3>{title}</h3>
				<select 
					onChange={(e) => onChange(e)}
					value={selectedValue}
				>
					{options}
				</select>
			</span>
		);
	}
}

export default SelectDropDown;