import React, { Component } from 'react';
import Globals from '../utils/Globals';

export default class AnimatedBackground extends Component {
	componentDidMount() {
		const { canvas } = this.refs;
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		this.ctx = this.refs.canvas.getContext('2d');

		// FIll a rect with the background color
		this.ctx.fillStyle = Globals.colors.background;
		this.ctx.fillRect(0,0,canvas.width,canvas.height);

		setInterval(() => {
			this.generateNoise(350, 150, 200, 250);
		}, 900);
	}



	/**
	 * Generate a random noise area
	 * @param  {int} width  Noise width
	 * @param  {int} height Noise height
	 */
	generateNoise(width, height, x, y) {
		const imageData = this.ctx.createImageData(width, height);
		const buffer32 = new Uint32Array(imageData.data.buffer);

		// Generate the color bits
		for(let i = 0; i < buffer32.length;i++) {
			buffer32[i] = ((255 * Math.random()) | 0) << 24;
		}

		// Draw image on canvas
		this.ctx.putImageData(imageData, x, y);

		setTimeout(() => {
			this.ctx.fillRect(x, y, width, height);
		}, 200)
	}

	render() {
		const style = {
			background: '#96b6bf',
			position: 'fixed',
			top: 0,
			left: 0,
			zIndex: -1,
			pointerEvents: 'none',
		};

		return (
			<canvas id="AnimatedBackground" ref="canvas" style={style}>

			</canvas>
		);
	}
}