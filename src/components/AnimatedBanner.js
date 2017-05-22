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

/**
 * Animated banner using PIXI.js
 */
export default class AnimatedBanner extends Component {
	// Interval between icon changes
	changeIconInterval = 90;

	// Create VH units to use calculate icon's Y position
	iconY = window.innerWidth / 100 * 10;
	
	state = {
		step: 0,
		// TODO: Im Give some time to load the textures
		timer: this.changeIconInterval - 10,
	}


	noiseRects = [];


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
		this.gridLayer1 = this.stage.addChild(this.drawDotGrid(35, 0.3));
		this.gridLayer2 = this.stage.addChild(this.drawDotGrid(15, 0.15));
		this.gridLayer3 = this.stage.addChild(this.drawDotGrid(10, 0.1));
		
		this.animate();

		// TODO: Cool interactions
		this.renderer.view.addEventListener('mousemove', (e) => {
			this.gridLayer1.position.x = e.x - window.innerWidth / 2;
			this.gridLayer2.position.x = e.x * 2 - window.innerWidth / 2;
			this.gridLayer3.position.x = e.x * 3 - window.innerWidth / 2;

			this.gridLayer1.position.y = e.y - window.innerHeight / 2;
			this.gridLayer2.position.y = e.y * 2 - window.innerHeight / 2;
			this.gridLayer3.position.y = e.y * 3 - window.innerHeight / 2;
		});
	}


	/**
	 * Function called per frame, handle timer and icons
	 */
	animate() {
		const { changeIconInterval } = this;
		this.setState((state) => {
			// Glitch before change the logo icon
			// Animating 7 frames before the changeIconInterval
			if(state.timer > changeIconInterval - 20 && state.timer % 3 == 0) {
				let x = (window.innerWidth / 2) - (this.icon.width / 2);
				this.glitchElement(this.icon, x, this.iconY);
			} 

			if(state.timer > changeIconInterval - 20 && state.timer % 2 == 0) {
				this.drawNoiseRect();
			}
			
			if(this.noiseRects.length > 0 && state.timer < changeIconInterval - 20) {
				this.noiseRects = this.noiseRects.filter((rect) => {
					rect.destroy();
					return false;
				});
			}

			/**
			 *  Wait for ~90 milliseconds 
			 * @see changeIconInterval
			 */
			if(state.timer % changeIconInterval === 0) {
				let step = (state.step + 1) % this.icons.length;

				// Draw the logo icon
				this.drawIcon();

				// Update the step and reset timer
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
		const x = (window.innerWidth / 2) - (this.icon.width / 2);

		this.icon.position.x = x;
		this.icon.position.y = this.iconY;

		// Swap texture
		this.icon.texture = this.icons[this.state.step];
		// Remove all glitches filters from the icon
		this.icon.filters = null;

		// TODO: Don't need to addChild every time, just change the texture
		this.stage.addChild(this.icon);
	}
	
	drawNoiseRect() {
		const rect = new PIXI.Graphics();
		rect.filters = [new PIXI.filters.NoiseFilter()];
		const x = Math.floor(Math.random() * window.innerWidth);
		const y = Math.floor(Math.random() * window.innerHeight);
		const width = Math.floor(Math.random() * 700);
		const height = Math.floor(Math.random() * (width / 3));
		rect.drawRect(x, y, width, height);

		this.stage.addChild(rect);
		this.noiseRects = this.noiseRects.concat(rect);
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
		const dotsX = Math.floor(width / dotDistance);
		const dotsY = Math.floor(height / dotDistance);

		const graphics = new PIXI.Graphics();
		for (let i = 0; i < dotsX; i++) {
			for (let j = 0; j < dotsY; j++) {
				var circle = this.drawCircle(graphics, dotDistance * i, dotDistance * j, 1, color, opacity);
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
		graphics.drawCircle(x, y, radius);
		return graphics;
	}


	render() {
		const style = {
			width: '100%',
			height: '81vh',
			background: '#000',
			position: 'absolute',
			top: 0,
			left: 0,
			overflow: 'hidden',
		};
		return (
			<div id="AnimatedBanner" ref="canvasBg" style={style}>
			</div>
		);
	}
}