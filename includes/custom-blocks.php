<?php
/* Register our custom category so its easy to find our blocks
================================================== 
function cp_block_categories( $categories ) {
	$category_slugs = wp_list_pluck( $categories, 'slug' );
	return in_array( 'nstp', $category_slugs, true ) ? $categories : array_merge(
			$categories,
			array(
					array(
							'slug'  => 'nstp',
							'title' => __( 'Nonstop Page Blocks', 'nstp' ),
							'icon'  => null,
					),
			)
	);
}
add_filter( 'block_categories', 'cp_block_categories' );

*/

add_filter( 'block_categories_all' , function( $categories ) {

  // Adding a new category.
  $categories[] = array(
    'slug'  => 'nstp',
    'title' => 'Nonstop Page Blocks'
  );

  // Adding a new category.
  $categories[] = array(
    'slug'  => 'nstp-home',
    'title' => 'Nonstop Homepage Blocks'
  );

return $categories;
} );

/**
 * ACF Blocks
 */
add_action('acf/init', 'my_acf_init_block_types');
function my_acf_init_block_types() {

    // Check function exists.
    if( function_exists('acf_register_block_type') ) {

      //register page benefits grid
      acf_register_block_type(array(
        'name'              => 'page-benefits-grid',
        'title'             => __('Page Benefits Grid'),
        'description'       => __('Two column grid that holds icon + text'),
        'render_template'   => 'template-parts/blocks/page-benefits-grid.php',
        'category'          => 'nstp',
        'icon'              => 'screenoptions',
        'keywords'          => array( 'page', 'grid', 'benefits', 'icon' ),
      ));

      //register block meant to go above footer
      acf_register_block_type(array(
        'name'              => 'page-end',
        'title'             => __('Page End Block'),
        'description'       => __('Text block meant for the end of the page'),
        'render_template'   => 'template-parts/blocks/page-end.php',
        'category'          => 'nstp',
        'icon'              => 'archive',
        'keywords'          => array( 'page', 'end', 'text' ),
      ));
      //register page hero
      acf_register_block_type(array(
        'name'              => 'page-hero',
        'title'             => __('Page Hero'),
        'description'       => __('Page hero image and text'),
        'render_template'   => 'template-parts/blocks/page-hero.php',
        'category'          => 'nstp',
        'icon'              => 'align-left',
        'keywords'          => array( 'page', 'hero', 'image' ),
      ));
      //register page hero slider
      acf_register_block_type(array(
        'name'              => 'page-hero-slider',
        'title'             => __('Page Hero Slider'),
        'description'       => __('Page hero slider'),
        'render_template'   => 'template-parts/blocks/page-hero-slider.php',
        'category'          => 'nstp',
        'icon'              => 'align-left',
        'keywords'          => array( 'page', 'hero', 'slider', 'image' ),
      ));
      //register page text
      acf_register_block_type(array(
        'name'              => 'page-text',
        'title'             => __('Page Text'),
        'description'       => __('Page text'),
        'render_template'   => 'template-parts/blocks/page-text.php',
        'category'          => 'nstp',
        'icon'              => 'editor-paragraph',
        'keywords'          => array( 'page', 'text' ),
      ));
      //register page text + image
      acf_register_block_type(array(
        'name'              => 'page-image-text',
        'title'             => __('Page Image + Text'),
        'description'       => __('Page image + text block'),
        'render_template'   => 'template-parts/blocks/page-image-text.php',
        'category'          => 'nstp',
        'icon'              => 'align-pull-left',
        'keywords'          => array( 'page', 'image', 'text' ),
      ));
      //register page tabs
      acf_register_block_type(array(
        'name'              => 'page-tabs',
        'title'             => __('Page Tabs'),
        'description'       => __('Tab section for page'),
        'render_template'   => 'template-parts/blocks/page-tabs.php',
        'category'          => 'nstp',
        'icon'              => 'archive',
        'keywords'          => array( 'page', 'tabs' ),
      ));
      //register page form select
      acf_register_block_type(array(
        'name'              => 'page-form-select',
        'title'             => __('Page form select'),
        'description'       => __('Form select for contact pages'),
        'render_template'   => 'template-parts/blocks/page-form-select.php',
        'category'          => 'nstp',
        'icon'              => 'feedback',
        'keywords'          => array( 'page', 'tabs' ),
      ));
      //register page row - two column
      acf_register_block_type(array(
        'name'              => 'page-row-two-column',
        'title'             => __('Page row, two column'),
        'description'       => __('Two column row for pages'),
        'render_template'   => 'template-parts/blocks/page-row-two-column.php',
        'category'          => 'nstp',
        'icon'              => 'layout',
        'keywords'          => array( 'page', 'row', 'two', 'columns', 'column' ),
      ));
      //register page watermark row
      acf_register_block_type(array(
        'name'              => 'page-watermark-row',
        'title'             => __('Page Watermark Row'),
        'description'       => __('Two column grid that holds image + text with watermark logo watermark background'),
        'render_template'   => 'template-parts/blocks/page-watermark-row.php',
        'category'          => 'nstp',
        'icon'              => 'screenoptions',
        'keywords'          => array( 'page', 'grid', 'row', 'watermark' ),
      ));

      //register homepage zone1
      acf_register_block_type(array(
        'name'              => 'homepage-zone1',
        'title'             => __('Homepage Zone 1'),
        'description'       => __('For use under the hero on the homepage'),
        'render_template'   => 'template-parts/blocks/home/homepage-zone1.php',
        'category'          => 'nstp-home',
        'icon'              => 'layout',
        'keywords'          => array( 'page', 'row', 'two', 'columns', 'column', 'watermark' ),
      ));
    }
}