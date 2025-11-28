<?php
// This file is generated. Do not modify it manually.
return array(
	'curvy' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockylicious/curvy',
		'version' => '0.1.0',
		'title' => 'Curvy',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Curvy Shape Divider for WordPress.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'color' => array(
				'background' => true,
				'link' => true,
				'text' => true
			),
			'spacing' => array(
				'padding' => true
			)
		),
		'attributes' => array(
			'style' => array(
				'type' => 'object',
				'default' => array(
					'color' => array(
						'background' => '#ec4899'
					),
					'spacing' => array(
						'padding' => array(
							'top' => '80px',
							'bottom' => '80px',
							'left' => '50px',
							'right' => '50px'
						)
					)
				)
			),
			'enableTopCurve' => array(
				'type' => 'boolean',
				'default' => true
			),
			'topWidth' => array(
				'type' => 'number',
				'default' => 100
			),
			'topHeight' => array(
				'type' => 'number',
				'default' => 100
			)
		),
		'textdomain' => 'blockylicious',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	)
);
