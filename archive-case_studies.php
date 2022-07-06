<?php 

get_header(); ?>

<?php 
	get_template_part( 'template-parts/blocks/page-hero', null, array(
		'img_loc' => get_field('image_location', 'option'),
		'image'	=> get_field('image', 'option') ?: 209,
		'bg_color' => get_field('background_color', 'option' ),
		'headline'	=> get_field('content_group', 'option')['header'],
		'copy'	=> get_field('content_group', 'option')['copy']
	)
); ?>

<div class="container px-8 lg:px-4 mx-auto pt-16 archive">
	<div class="flex justify-end items-end flex-wrap space-y-4">
		<div class="w-full lg:w-1/3 lg:pl-4 text-sm">
			<span class="block text-sm mb-4">Search:</span>
			<?php get_search_form(); ?>
		</div>
	</div>

	<?php if ( have_posts() ) : ?>
    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-24">
		<?php
		while ( have_posts() ) :
			the_post();
			?>

			<?php get_template_part( 'template-parts/content-archive' ); ?>

		<?php endwhile; ?>
    </div>
	<?php endif; ?>
	
	<div class="custom-archive-nav mt-24">
	<?php the_posts_pagination(array(
		'mid_size' => 2,
		'prev_text' => __('Prev', 'tailpress'),
		'next_text'	=> __('Next', 'tailpress')
	)); ?>
	</div>

</div>
<?php 
	get_template_part( 'template-parts/blocks/page-end', null, array(
		'last_block'	=> true,
		'headline'	=> 'Contact us to learn more or request a quote',
		'headline_size'	=> 'lg',
		'button'	=> true,
		'button_title'	=> 'Contact Us'
	)
); ?>
<?php
get_footer();
