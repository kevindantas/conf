import React, { Component } from 'react';
import Globals from '../utils/Globals';

export default class AnimatedBackground extends Component {

	state = {
		currentStep: 0,
	}

	steps = [
		[
			{
				width: 900,
				height: 15,
				x: 100,
				y: 150
			}, {
				width: 800,
				height: 10,
				x: 800,
				y: 450
			}, {
				width: 400,
				height: 50,
				x: 1200,
				y: 300
			}, {
				width: 400,
				height: 50,
				x: 0,
				y: 350
			}
		], [
			{
				width: 700,
				height: 15,
				x: 130,
				y: 180
			}, {
				width: 600,
				height: 30,
				x: 500,
				y: 250
			}, {
				width: 300,
				height: 35,
				x: 1000,
				y: 230,
			}, {
				width: 2000,
				height: 15,
				x: 0,
				y: 265,
			}
		]
	];

	componentDidMount() {
		const { canvas } = this.refs;
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		this.ctx = this.refs.canvas.getContext('2d');

		// FIll a rect with the background color
		this.fillCanvasBg();

		setInterval(() => this.drawStep(), 110);

		setInterval(() => {
			this.fillCanvasBg();
			
			this.setState((state) => {
				let currentStep = state.currentStep+1;
				currentStep = currentStep > this.steps.length - 1 ? 0 : currentStep;
				return { currentStep }
			});
		}, 2000);
	}


	/**
	 * Fill canvas background with the global color 
	 */
	fillCanvasBg() {
		const { canvas } = this.refs;
		
		this.ctx.fillStyle = Globals.colors.background;
		this.ctx.fillRect(0,0,canvas.width,canvas.height);
	}


	/**
	 * Draw all glitches from each step
	 */
	drawStep() {
		const stepGlitches = this.steps[this.state.currentStep];
		stepGlitches.forEach((glitch) => {
			this.generateNoise(
				glitch.width,
				glitch.height,
				glitch.x,
				glitch.y,
			);
		})
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