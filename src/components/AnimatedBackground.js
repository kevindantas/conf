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

	state = {
		step: 4,
		timer: 0,
	}

	componentDidMount() {
		const { canvasBg } = this.refs;
		this.renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
		canvasBg.appendChild(this.renderer.view);

		this.icons = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6];

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
			if(state.timer % 180 === 0) {
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
		const iconTexture = new PIXI.Texture.fromImage(this.icons[this.state.step]);
		const icon = new PIXI.Sprite(iconTexture);

		// Icon position
		let x = (window.innerWidth / 2) - (icon.width / 2);
		let y = 90;

		const rect = new PIXI.Graphics();
		rect.beginFill(0x000000, 1);
		rect.drawRect(x, y, this.stage.width, this.stage.height);
		// iconTexture.addChild(rect);
		this.stage.addChild(rect);
		icon.position.x = x;
		icon.position.y = y;
		this.stage.addChild(icon);
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
			<div>
				<div id="AnimatedBackground" ref="canvasBg" style={style}>

				</div>
			</div>
		);
	}
}