import React, { Component } from 'react';
import {
  
    
} from 'react-native'
import SvgUri from 'react-native-svg-uri';
import svgs from '../../assets/svgs.js';


export default class Mysvg extends Component {
    constructor(props){
        super(props)
    }
  render() {
    const {
      icon,
      color,
      size,
      style,
    } = this.props;
    let svgXmlData = svgs[this.props.icon];
    console.log(size,color,icon,style,svgXmlData)
    if (!svgXmlData) {
      let err_msg = `没有"${this.props.icon}"这个icon，`;
      throw new Error(err_msg);
    }
    return (
      <SvgUri
        width={size}
        height={size}
        svgXmlData={svgXmlData}
        fill={color}
        style={style}
      />
    )
  }
}