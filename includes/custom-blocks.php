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
        'title'             => __('Page Block: Benefits Grid'),
        'description'       => __('Two column grid that holds icon + text'),
        'render_template'   => 'template-parts/blocks/page-benefits-grid.php',
        'category'          => 'nstp',
        'icon'              => 'screenoptions',
        'keywords'          => array( 'page', 'grid', 'benefits', 'icon' ),
      ));

      //register block meant to go above footer
      acf_register_block_type(array(
        'name'              => 'page-end',
        'title'             => __('Page Block: End Block'),
        'description'       => __('Text block meant for the end of the page'),
        'render_template'   => 'template-parts/blocks/page-end.php',
        'category'          => 'nstp',
        'icon'              => 'archive',
        'keywords'          => array( 'page', 'end', 'text' ),
      ));
      //register page hero
      acf_register_block_type(array(
        'name'              => 'page-hero',
        'title'             => __('Page Block: Hero'),
        'description'       => __('Page hero image and text'),
        'render_template'   => 'template-parts/blocks/page-hero.php',
        'category'          => 'nstp',
        'icon'              => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128z"/></svg>',
        'keywords'          => array( 'page', 'hero', 'image' ),
      ));
      //register page hero slider
      acf_register_block_type(array(
        'name'              => 'page-hero-slider',
        'title'             => __('Page Block: Hero Slider'),
        'description'       => __('Page hero slider'),
        'render_template'   => 'template-parts/blocks/page-hero-slider.php',
        'category'          => 'nstp',
        'icon'              => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 96C0 60.65 28.65 32 64 32H448C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96zM102.3 151.8C93.35 161.6 94.01 176.7 103.8 185.7L180.5 256L103.8 326.3C94.01 335.3 93.35 350.4 102.3 360.2C111.3 369.1 126.4 370.6 136.2 361.7L232.2 273.7C237.2 269.1 240 262.7 240 255.1C240 249.3 237.2 242.9 232.2 238.3L136.2 150.3C126.4 141.4 111.3 142 102.3 151.8V151.8zM248 336C234.7 336 224 346.7 224 360C224 373.3 234.7 384 248 384H392C405.3 384 416 373.3 416 360C416 346.7 405.3 336 392 336H248z"/></svg>',
        'keywords'          => array( 'page', 'hero', 'slider', 'image' ),
      ));
      //register page hero text
      acf_register_block_type(array(
        'name'              => 'page-hero-text',
        'title'             => __('Page Block: Hero Text'),
        'description'       => __('Page hero text'),
        'render_template'   => 'template-parts/blocks/page-hero-text.php',
        'category'          => 'nstp',
        'icon'              => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 96C0 60.65 28.65 32 64 32H512C547.3 32 576 60.65 576 96V416C576 451.3 547.3 480 512 480H64C28.65 480 0 451.3 0 416V96zM160 256C160 238.3 145.7 224 128 224C110.3 224 96 238.3 96 256C96 273.7 110.3 288 128 288C145.7 288 160 273.7 160 256zM160 160C160 142.3 145.7 128 128 128C110.3 128 96 142.3 96 160C96 177.7 110.3 192 128 192C145.7 192 160 177.7 160 160zM160 352C160 334.3 145.7 320 128 320C110.3 320 96 334.3 96 352C96 369.7 110.3 384 128 384C145.7 384 160 369.7 160 352zM224 136C210.7 136 200 146.7 200 160C200 173.3 210.7 184 224 184H448C461.3 184 472 173.3 472 160C472 146.7 461.3 136 448 136H224zM224 232C210.7 232 200 242.7 200 256C200 269.3 210.7 280 224 280H448C461.3 280 472 269.3 472 256C472 242.7 461.3 232 448 232H224zM224 328C210.7 328 200 338.7 200 352C200 365.3 210.7 376 224 376H448C461.3 376 472 365.3 472 352C472 338.7 461.3 328 448 328H224z"/></svg>',
        'keywords'          => array( 'page', 'hero', 'text' ),
      ));
      //register page text
      acf_register_block_type(array(
        'name'              => 'page-text',
        'title'             => __('Page Block: Text'),
        'description'       => __('Page text'),
        'render_template'   => 'template-parts/blocks/page-text.php',
        'category'          => 'nstp',
        'icon'              => 'editor-paragraph',
        'keywords'          => array( 'page', 'text' ),
      ));
      //register page text + image
      acf_register_block_type(array(
        'name'              => 'page-image-text',
        'title'             => __('Page Block: Image + Text'),
        'description'       => __('Page image + text block'),
        'render_template'   => 'template-parts/blocks/page-image-text.php',
        'category'          => 'nstp',
        'icon'              => 'align-pull-left',
        'keywords'          => array( 'page', 'image', 'text' ),
      ));
      //register page tabs
      acf_register_block_type(array(
        'name'              => 'page-tabs',
        'title'             => __('Page Block: Tabs'),
        'description'       => __('Tab section for page'),
        'render_template'   => 'template-parts/blocks/page-tabs.php',
        'category'          => 'nstp',
        'icon'              => 'archive',
        'keywords'          => array( 'page', 'tabs' ),
      ));
      //register page form select
      acf_register_block_type(array(
        'name'              => 'page-form-select',
        'title'             => __('Page Block: Form select'),
        'description'       => __('Form select for contact pages'),
        'render_template'   => 'template-parts/blocks/page-form-select.php',
        'category'          => 'nstp',
        'icon'              => 'feedback',
        'keywords'          => array( 'page', 'tabs' ),
      ));
      //register page row - two column
      acf_register_block_type(array(
        'name'              => 'page-row-two-column',
        'title'             => __('Page Block: Two Col Row'),
        'description'       => __('Two column row for pages'),
        'render_template'   => 'template-parts/blocks/page-row-two-column.php',
        'category'          => 'nstp',
        'icon'              => 'layout',
        'keywords'          => array( 'page', 'row', 'two', 'columns', 'column' ),
      ));
      //register page watermark row
      acf_register_block_type(array(
        'name'              => 'page-watermark-row',
        'title'             => __('Page Block: Watermark Row'),
        'description'       => __('Two column grid that holds image + text with watermark logo watermark background'),
        'render_template'   => 'template-parts/blocks/page-watermark-row.php',
        'category'          => 'nstp',
        'icon'              => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 96C0 60.65 28.65 32 64 32H448C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96zM294.2 167.9C285.3 177.8 286.1 192.1 295.9 201.8L356.1 256L295.9 310.2C286.1 319 285.3 334.2 294.2 344.1C303 353.9 318.2 354.7 328.1 345.8L408.1 273.8C413.1 269.3 416 262.8 416 256C416 249.2 413.1 242.7 408.1 238.2L328.1 166.2C318.2 157.3 303 158.1 294.2 167.9V167.9zM216.1 201.8C225.9 192.1 226.7 177.8 217.8 167.9C208.1 158.1 193.8 157.3 183.9 166.2L103.9 238.2C98.89 242.7 96 249.2 96 256C96 262.8 98.89 269.3 103.9 273.8L183.9 345.8C193.8 354.7 208.1 353.9 217.8 344.1C226.7 334.2 225.9 319 216.1 310.2L155.9 256L216.1 201.8z"/></svg>',
        'keywords'          => array( 'page', 'grid', 'row', 'watermark' ),
      ));
      //register page block testimonial slider
      acf_register_block_type(array(
        'name'              => 'page-testimonial-slider',
        'title'             => __('Page Block: Testimonial Slider'),
        'description'       => __('Testimonial / Card slider. Holds a small image + text'),
        'render_template'   => 'template-parts/blocks/page-testimonial-slider.php',
        'category'          => 'nstp',
        'icon'              => 'format-quote',
        'keywords'          => array( 'page', 'slider', 'testimonial', 'card' ),
      ));
      //register nonstop toolbox feed
      acf_register_block_type(array(
        'name'              => 'page-toolbox-feed',
        'title'             => __('Page Block: Toolbox Feed'),
        'description'       => __('Toolbax page feed'),
        'render_template'   => 'template-parts/blocks/page-toolbox-feed.php',
        'category'          => 'nstp',
        'icon'              => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M512 0C547.3 0 576 28.65 576 64V448C576 483.3 547.3 512 512 512H256C220.7 512 192 483.3 192 448V64C192 28.65 220.7 0 256 0H512zM96 72C96 58.75 106.7 48 120 48C133.3 48 144 58.75 144 72V440C144 453.3 133.3 464 120 464C106.7 464 96 453.3 96 440V72zM0 120C0 106.7 10.75 96 24 96C37.25 96 48 106.7 48 120V392C48 405.3 37.25 416 24 416C10.75 416 0 405.3 0 392V120z"/></svg>',
        'keywords'          => array( 'page', 'toolbox', 'feed', 'slider' ),
      ));
      //register nonstop case studies feed
      acf_register_block_type(array(
        'name'              => 'page-case-studies-feed',
        'title'             => __('Page Block: Case Studies Feed'),
        'description'       => __('Case studies page feed'),
        'render_template'   => 'template-parts/blocks/page-case-study-feed.php',
        'category'          => 'nstp',
        'icon'              => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M512 0C547.3 0 576 28.65 576 64V448C576 483.3 547.3 512 512 512H256C220.7 512 192 483.3 192 448V64C192 28.65 220.7 0 256 0H512zM96 72C96 58.75 106.7 48 120 48C133.3 48 144 58.75 144 72V440C144 453.3 133.3 464 120 464C106.7 464 96 453.3 96 440V72zM0 120C0 106.7 10.75 96 24 96C37.25 96 48 106.7 48 120V392C48 405.3 37.25 416 24 416C10.75 416 0 405.3 0 392V120z"/></svg>',
        'keywords'          => array( 'page', 'case', 'study', 'feed', 'slider' ),
      ));
      //register partner list
      acf_register_block_type(array(
        'name'              => 'page-partner-list',
        'title'             => __('Page Block: Partner List'),
        'description'       => __('List of partner images'),
        'render_template'   => 'template-parts/blocks/page-partner-list.php',
        'category'          => 'nstp',
        'icon'              => 'format-quote',
        'keywords'          => array( 'page', 'partner', 'list', 'logos' ),
      ));
      //register partner list
      acf_register_block_type(array(
        'name'              => 'page-custom-html',
        'title'             => __('Page Block: Custom HTML'),
        'description'       => __('Blank slate for custom html'),
        'render_template'   => 'template-parts/blocks/page-custom-html.php',
        'category'          => 'nstp',
        'icon'              => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M415.2 21.06L255.2 501.1C252.4 509.4 243.3 513.1 234.9 511.2C226.6 508.4 222 499.3 224.8 490.9L384.8 10.94C387.6 2.554 396.7-1.977 405.1 .8175C413.4 3.612 417.1 12.67 415.2 21.06L415.2 21.06zM170.6 139.9L40.08 256L170.6 372C177.2 377.9 177.8 388 171.1 394.6C166.1 401.2 155.1 401.8 149.4 395.9L5.371 267.1C1.955 264.9 .0003 260.6 0 256C-.0003 251.4 1.954 247.1 5.37 244L149.4 116C155.1 110.2 166.1 110.8 171.1 117.4C177.8 123.1 177.2 134.1 170.6 139.9L170.6 139.9zM490.6 116L634.6 244C638 247.1 640 251.4 640 255.1C640 260.6 638 264.9 634.6 267.1L490.6 395.9C484 401.8 473.9 401.2 468 394.6C462.2 388 462.8 377.9 469.4 372L599.9 255.1L469.4 139.9C462.8 134.1 462.2 123.1 468 117.4C473.9 110.8 484 110.2 490.6 116H490.6z"/></svg>',
        'keywords'          => array( 'page', 'custom', 'html' ),
      ));
      //register card grid
      acf_register_block_type(array(
        'name'              => 'page-card-grid',
        'title'             => __('Page Block: Card grid'),
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