<?php
/* Register our custom category so its easy to find our blocks
================================================== */
function cp_block_categories( $categories ) {
	$category_slugs = wp_list_pluck( $categories, 'slug' );
	return in_array( 'nstp', $category_slugs, true ) ? $categories : array_merge(
			$categories,
			array(
					array(
							'slug'  => 'nstp',
							'title' => __( 'Nonstop Blocks', 'nstp' ),
							'icon'  => null,
					),
			)
	);
}
add_filter( 'block_categories', 'cp_block_categories' );
/**
 * ACF Blocks
 */
add_action('acf/init', 'my_acf_init_block_types');
function my_acf_init_block_types() {

    // Check function exists.
    if( function_exists('acf_register_block_type') ) {

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
    }
}