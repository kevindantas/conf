import * as PIXI from 'pixi.js';

const vertex = `
attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}
`;


const frag = `
precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 red;
uniform vec2 green;
uniform vec2 blue;

void main(void)
{
   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/filterArea.xy).r;
   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/filterArea.xy).g;
   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/filterArea.xy).b;
   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;
}`;


export default class RGBSlitFilter extends PIXI.Filter {
	constructor() {
		super(
			vertex,
			frag,
		);

		this.red = [-10, 0];
	    this.green = [0, 10];
	    this.blue = [0, 0];
	}


	get red() {
		return this.uniforms.red;
	}

	set red(value) {
		return this.uniforms.red = value;
	}


	get green() {
		return this.uniforms.green;
	}

	set green(value) {
		return this.uniforms.green = value;
	}


	get blue() {
		return this.uniforms.blue;
	}

	set blue(value) {
		return this.uniforms.blue = value;
	}
}