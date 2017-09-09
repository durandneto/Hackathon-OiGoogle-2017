import React from 'react'
import styled from 'styled-components'

import Title from  './../../atoms/title'
import Description from  './../../atoms/description'
import Input from  './../../atoms/input'
import Button from  './../../atoms/button'
import ContainerRow from  './../../atoms/container/row'
import ContainerColumn from  './../../atoms/container/column'
 

const Column = (props) => (
	 <ContainerColumn  {...props} >
	   {
		 		Array.isArray(props.Text) ?
			 		props.Text.map( ( Text, index ) => {
			 			return <Description size={2} centered key={ index }>{ Text}</Description>			 		
			 	})
			 	: <Input placeholder={props.TextTitle} onChange={ props.handleChange } name='title'  />
			 }
	   <Input placeholder={props.TextDescription} onChange={ props.handleChange } name='description'  />
	   <Input placeholder={props.TextDescription} onChange={ props.handleChange } name='description'  />
	   <Button primary onClick= { props.onSave   }>Save primary</Button>
	 </ContainerColumn>
);

const Row = (props) => (
		<ContainerRow {...props}>
			<ContainerColumn>
			{
		 		Array.isArray(props.Text) ?
			 		props.Text.map( ( Text, index ) => {
			 			return <Description size={2} centered key={ index }>{ Text}</Description>			 		
			 	})
			 	: <Description size={2} centered key={ index }>{ pros.Text}</Description>			 		
		 	}
			</ContainerColumn>
			<ContainerRow>
				<Input placeholder={props.TextTitle}  onChange={ props.handleChange } name='title' />
				<Input placeholder={props.TextDescription}  onChange={ props.handleChange } name='description' />
				<Input placeholder={props.TextDescription}  onChange={ props.handleChange } name='description' />
			</ContainerRow>
			<ContainerRow>
				<Button primary full onClick= { props.onSave   }>Save</Button>
			</ContainerRow>
		</ContainerRow>
);

export default Column;
export { Column, Row };
