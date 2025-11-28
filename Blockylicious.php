<?php
/**
 * Plugin Name:       Blockylicious
 * Description:       A plugin of funky blocks.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Adam Mohammed
 * Author URI:        https://github.com/adamm13
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       curvy
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
/**
 * Registers the block using a `blocks-manifest.php` file, which improves the performance of block type registration.
 * Behind the scenes, it also registers all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
 */
function create_block_Blockylicious_block_init() {
	/**
	 * Registers the block type(s) from the blocks-manifest.php file.
	 *
	 * @see https://developer.wordpress.org/reference/functions/register_block_type/
	 */
	$manifest_path = __DIR__ . '/build/blocks-manifest.php';
	
	if ( ! file_exists( $manifest_path ) ) {
		return;
	}
	
	$manifest_data = require $manifest_path;
	
	foreach ( $manifest_data as $block_dir => $block_metadata ) {
		$block_path = __DIR__ . "/build/blocks/{$block_dir}";
		
		if ( file_exists( $block_path ) ) {
			register_block_type( $block_path );
		}
	}
}
add_action( 'init', 'create_block_Blockylicious_block_init' );
