import React, { Component } from 'react';
import * as PIXI from 'pixi.js';
import Globals from '../utils/Globals';
// Icons
import Icon1 from '../media/logo/Icon1.svg';
import Icon2 from '../media/logo/Icon2.svg';
import Icon3 from '../media/logo/Icon3.svg';
import Icon4 from '../media/logo/Icon4.svg';
import Icon5 from '../media/logo/Icon5.svg';
import Icon6 from '../media/logo/Icon6.svg';


export default class AnimatedBackground extends Component {
	// Interval between icon changes
	changeIconInterval = 45;

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
		// FIll a rect with the background color
		this.animate();
	}


	/**
	 * Fill canvas background with the global color
	 */
	animate() {
		this.setState((state) => {
			// Wait for ~180 seconds
			if(state.timer % this.changeIconInterval === 0) {
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
		this.stage.addChild(this.icon);
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
			<div id="AnimatedBackground" ref="canvasBg" style={style}>
			</div>
		);
	}
}