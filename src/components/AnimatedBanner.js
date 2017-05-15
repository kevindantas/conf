import React, { Component } from 'react';
import * as PIXI from 'pixi.js';
// Icons
import Icon1 from '../media/logo/Icon1.svg';
import Icon2 from '../media/logo/Icon2.svg';
import Icon3 from '../media/logo/Icon3.svg';
import Icon4 from '../media/logo/Icon4.svg';
import Icon5 from '../media/logo/Icon5.svg';
import Icon6 from '../media/logo/Icon6.svg';
import RGBSlitFilter from '../utils/RGBSlitFilter';


export default class AnimatedBanner extends Component {
	// Interval between icon changes
	changeIconInterval = 90;

	state = {
		step: 0,
		// TODO: Give some time to load the textures
		timer: this.changeIconInterval - 10,
	}


	componentDidMount() {
		const { canvasBg } = this.refs;
		this.renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
		canvasBg.appendChild(this.renderer.view);

		// Create all icon textures and sprites
		let icons = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6];
		this.icons = icons.map((icon) => {
			return new PIXI.Texture.fromImage(icon);
		});

		// Create a sprite for the icon
		this.icon = new PIXI.Sprite(this.icons[this.state.step]);

		// Create a new container
		this.stage = new PIXI.Container();
		this.stage.width = window.innerWidth;
		this.stage.height = window.innerHeight;
		// FIll background with pattern 
		this.stage.addChild(this.drawDotGrid(35, 0.3));
		this.stage.addChild(this.drawDotGrid(15, 0.15));
		this.stage.addChild(this.drawDotGrid(10, 0.1));
		
		this.animate();
	}


	/**
	 * Fill canvas background with the global color
	 */
	animate() {
		const { changeIconInterval } = this;
		this.setState((state) => {
			// Glitch before change the logo icon
			// Animating 7 frames before the changeIconInterval
			if(state.timer > changeIconInterval - 7 && state.timer < changeIconInterval - 1) {
				let x = (window.innerWidth / 2) - (this.icon.width / 2);
				let y = 90;
				this.glitchElement(this.icon, x, y);
			}

			// Wait for ~180 seconds
			if(state.timer % changeIconInterval === 0) {
				let step = (state.step + 1) % 6;

				// Draw the logo icon
				this.drawIcon();

				// Update the step and update the timer
				return {
					timer: 1,
					step,
				}
			}

			// Update the timer
			return { timer: state.timer + 1, }
		});

		this.renderer.render(this.stage);
		requestAnimationFrame(this.animate.bind(this))
	}


	/**
	 * Draw the logo icon
	 */
	drawIcon() {
		// Icon position
		let x = (window.innerWidth / 2) - (this.icon.width / 2);
		let y = 90;

		this.icon.position.x = x;
		this.icon.position.y = y;

		// Swap texture
		this.icon.texture = this.icons[this.state.step];
		// Remove all glitches filters from the icon
		this.icon.filters = null;

		this.stage.addChild(this.icon);
	}


	/**
	 * Glitch a element
	 * @param {Object} elem - Element to be glitched
	 * @param {int} x Original X position 
	 * @param {int} y Original Y position
	 */
	glitchElement(elem, x, y) {
		// Add filters for the element
		elem.filters = [new RGBSlitFilter()];
		// Generate a random X,Y position for the elment
		let randomTranslateX = Math.floor(Math.random() * 100) - 50;
		let randomTranslateY = Math.floor(Math.random() * 100) - 50;

		elem.position.x = x + randomTranslateX;
		elem.position.y = y - randomTranslateY;

		return elem
	}


	/**
	 * Draw a dot grid
	 * @param {int} dotDistance Distance between the dots
	 * @param {float} opacity Dot opacity
	 * @param {hex} color Dot color
	 * 
	 * @returns {Graphics} 
	 */
	drawDotGrid(dotDistance = 35, opacity = 0.2, color = 0xffffff) {
		const width = window.innerWidth;
		const height = window.innerHeight;
		let dotsX = Math.floor(width / dotDistance);
		let dotsY = Math.floor(height / dotDistance);

		const graphics = new PIXI.Graphics();
		for (let i = 0; i < dotsX; i++) {
			for (let j = 0; j < dotsY; j++) {
				var circle = this.drawCircle(graphics, dotDistance * i, dotDistance * j, 1, color, opacity)
			}
		}

		return graphics;
	}
	

	/**
	 * Draw a circle using PIXI.js
	 * @param {Graphics} graphics Instance to draw the graphics
	 * @param {int} x
	 * @param {int} y
	 * @param {int} radius Circle size (default = 5)
	 * @param {hex} color Circle color (default = 0xffffff)
	 * @param {float} opacity Circle opacity
	 * 
	 * @return Circle drawed
	 */
	drawCircle(graphics, x, y, radius = 1, color = 0xffffff, opacity = 0.3) {
		graphics.beginFill(color, opacity);
		graphics.drawCircle(x, y, radius)
		return graphics;
	}


	render() {
		const style = {
			width: '100%',
			height: '100%',
			background: '#000',
			position: 'fixed',
			top: 0,
			left: 0,
			zIndex: -1,
			pointerEvents: 'none',
		};
		return (
			<div id="AnimatedBanner" ref="canvasBg" style={style}>
			</div>
		);
	}
}