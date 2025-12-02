<?php
/**
 * Server-side rendering for the Curvy block
 * 
 * @param array    $attributes Block attributes
 * @param string   $content    Inner block content
 * @param WP_Block $block      Block instance
 */

// Get block wrapper attributes
$block_wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'alignfull',
]);

// Normal wave path - curves downward from left to right
$normalPath = "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z";

// Inverted wave path - curves upward from left to right
$invertedPath = "M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z";

// Extract attributes with defaults
$enableTopCurve = isset($attributes['enableTopCurve']) ? $attributes['enableTopCurve'] : true;
$topHeight = isset($attributes['topHeight']) ? (int)$attributes['topHeight'] : 100;
$topWidth = isset($attributes['topWidth']) ? (int)$attributes['topWidth'] : 100;
$topColor = isset($attributes['topColor']) ? esc_attr($attributes['topColor']) : '#FFFFFF';
$topFlipX = isset($attributes['topFlipX']) ? $attributes['topFlipX'] : false;
$topFlipY = isset($attributes['topFlipY']) ? $attributes['topFlipY'] : false;

$enableBottomCurve = isset($attributes['enableBottomCurve']) ? $attributes['enableBottomCurve'] : true;
$bottomHeight = isset($attributes['bottomHeight']) ? (int)$attributes['bottomHeight'] : 100;
$bottomWidth = isset($attributes['bottomWidth']) ? (int)$attributes['bottomWidth'] : 100;
$bottomColor = isset($attributes['bottomColor']) ? esc_attr($attributes['bottomColor']) : '#FFFFFF';
$bottomFlipX = isset($attributes['bottomFlipX']) ? $attributes['bottomFlipX'] : false;
$bottomFlipY = isset($attributes['bottomFlipY']) ? $attributes['bottomFlipY'] : false;

// Calculate transforms
$topScaleX = $topFlipX ? -1 : 1;
$topRotate = $topFlipY ? '180deg' : '0';
$topPath = $topFlipY ? $invertedPath : $normalPath;

$bottomScaleX = $bottomFlipX ? -1 : 1;
$bottomRotate = $bottomFlipY ? '180deg' : '0';
$bottomPath = $bottomFlipY ? $invertedPath : $normalPath;
?>

<section <?php echo $block_wrapper_attributes; ?>>
    <?php if ($enableTopCurve): ?>
        <div class="curve top-curve" style="position: absolute; top: 0; left: 0; width: 100%; overflow: hidden; height: <?php echo $topHeight; ?>px; transform: scaleX(<?php echo $topScaleX; ?>) rotate(<?php echo $topRotate; ?>) scaleY(-1);">
            <svg style="position: absolute; top: 0; left: 0; height: <?php echo $topHeight; ?>px; width: <?php echo $topWidth; ?>%;" preserveAspectRatio="none" viewBox="0 0 1200 120">
                <path fill="<?php echo $topColor; ?>" d="<?php echo $topPath; ?>"></path>
            </svg>
        </div>
    <?php endif; ?>
    
    <?php echo $content; ?>
    
    <?php if ($enableBottomCurve): ?>
        <div class="curve bottom-curve" style="position: absolute; bottom: 0; left: 0; width: 100%; overflow: hidden; height: <?php echo $bottomHeight; ?>px; transform: scaleX(<?php echo $bottomScaleX; ?>) rotate(<?php echo $bottomRotate; ?>) scaleY(-1);">
            <svg style="position: absolute; top: 0; left: 0; height: <?php echo $bottomHeight; ?>px; width: <?php echo $bottomWidth; ?>%;" preserveAspectRatio="none" viewBox="0 0 1200 120">
                <path fill="<?php echo $bottomColor; ?>" d="<?php echo $bottomPath; ?>"></path>
            </svg>
        </div>
    <?php endif; ?>
</section>