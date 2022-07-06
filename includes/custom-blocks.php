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
      //register page hero text
      acf_register_block_type(array(
        'name'              => 'page-hero-text',
        'title'             => __('Page Hero Text'),
        'description'       => __('Page hero text'),
        'render_template'   => 'template-parts/blocks/page-hero-text.php',
        'category'          => 'nstp',
        'icon'              => 'align-left',
        'keywords'          => array( 'page', 'hero', 'text' ),
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
      //register page block testimonial slider
      acf_register_block_type(array(
        'name'              => 'page-testimonial-slider',
        'title'             => __('Page Testimonial Slider'),
        'description'       => __('Testimonial / Card slider. Holds a small image + text'),
        'render_template'   => 'template-parts/blocks/page-testimonial-slider.php',
        'category'          => 'nstp',
        'icon'              => 'format-quote',
        'keywords'          => array( 'page', 'slider', 'testimonial', 'card' ),
      ));
      //register nonstop toolbox feed
      acf_register_block_type(array(
        'name'              => 'page-toolbox-feed',
        'title'             => __('Page Toolbox Feed'),
        'description'       => __('Toolbax page feed'),
        'render_template'   => 'template-parts/blocks/page-toolbox-feed.php',
        'category'          => 'nstp',
        'icon'              => 'format-quote',
        'keywords'          => array( 'page', 'toolbox', 'feed', 'slider' ),
      ));
      //register nonstop case studies feed
      acf_register_block_type(array(
        'name'              => 'page-case-studies-feed',
        'title'             => __('Page Case Studies Feed'),
        'description'       => __('Case studies page feed'),
        'render_template'   => 'template-parts/blocks/page-case-study-feed.php',
        'category'          => 'nstp',
        'icon'              => 'format-quote',
        'keywords'          => array( 'page', 'case', 'study', 'feed', 'slider' ),
      ));
      //register partner list
      acf_register_block_type(array(
        'name'              => 'page-partner-list',
        'title'             => __('Page Partner List'),
        'description'       => __('List of partner images'),
        'render_template'   => 'template-parts/blocks/page-partner-list.php',
        'category'          => 'nstp',
        'icon'              => 'format-quote',
        'keywords'          => array( 'page', 'partner', 'list', 'logos' ),
      ));
      //register partner list
      acf_register_block_type(array(
        'name'              => 'page-custom-html',
        'title'             => __('Page Block - Custom HTML'),
        'description'       => __('Blank slate for custom html'),
        'render_template'   => 'template-parts/blocks/page-custom-html.php',
        'category'          => 'nstp',
        'icon'              => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M415.2 21.06L255.2 501.1C252.4 509.4 243.3 513.1 234.9 511.2C226.6 508.4 222 499.3 224.8 490.9L384.8 10.94C387.6 2.554 396.7-1.977 405.1 .8175C413.4 3.612 417.1 12.67 415.2 21.06L415.2 21.06zM170.6 139.9L40.08 256L170.6 372C177.2 377.9 177.8 388 171.1 394.6C166.1 401.2 155.1 401.8 149.4 395.9L5.371 267.1C1.955 264.9 .0003 260.6 0 256C-.0003 251.4 1.954 247.1 5.37 244L149.4 116C155.1 110.2 166.1 110.8 171.1 117.4C177.8 123.1 177.2 134.1 170.6 139.9L170.6 139.9zM490.6 116L634.6 244C638 247.1 640 251.4 640 255.1C640 260.6 638 264.9 634.6 267.1L490.6 395.9C484 401.8 473.9 401.2 468 394.6C462.2 388 462.8 377.9 469.4 372L599.9 255.1L469.4 139.9C462.8 134.1 462.2 123.1 468 117.4C473.9 110.8 484 110.2 490.6 116H490.6z"/></svg>',
        'keywords'          => array( 'page', 'custom', 'html' ),
      ));
      //register card grid
      acf_register_block_type(array(
        'name'              => 'page-card-grid',
        'title'             => __('Page Block - Card grid'),
        'description'       => __('Card grid similar to posts but custom'),
        'render_template'   => 'template-parts/blocks/page-card-grid.php',
        'category'          => 'nstp',
        'icon'              => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M128 216C128 238.1 110.1 256 88 256H40C17.91 256 0 238.1 0 216V168C0 145.9 17.91 128 40 128H88C110.1 128 128 145.9 128 168V216zM128 376C128 398.1 110.1 416 88 416H40C17.91 416 0 398.1 0 376V328C0 305.9 17.91 288 40 288H88C110.1 288 128 305.9 128 328V376zM160 168C160 145.9 177.9 128 200 128H248C270.1 128 288 145.9 288 168V216C288 238.1 270.1 256 248 256H200C177.9 256 160 238.1 160 216V168zM288 376C288 398.1 270.1 416 248 416H200C177.9 416 160 398.1 160 376V328C160 305.9 177.9 288 200 288H248C270.1 288 288 305.9 288 328V376zM320 168C320 145.9 337.9 128 360 128H408C430.1 128 448 145.9 448 168V216C448 238.1 430.1 256 408 256H360C337.9 256 320 238.1 320 216V168zM448 376C448 398.1 430.1 416 408 416H360C337.9 416 320 398.1 320 376V328C320 305.9 337.9 288 360 288H408C430.1 288 448 305.9 448 328V376z"/></svg>',
        'keywords'          => array( 'page', 'card', 'grid' ),
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