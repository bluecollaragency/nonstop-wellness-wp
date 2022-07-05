<?php 
/*
Template Name: Category
*/
get_header(); ?>

<?php 
	get_template_part( 'template-parts/blocks/page-hero', null, array(
		// 'img_loc' => get_field('image_location', get_queried_object()),
		'img_loc' => false,
		'image'	=> get_field('image', get_queried_object()) ?: 209,
		'bg_color' => get_field('background_color', get_queried_object() ),
		// 'headline'	=> get_the_category()[0]->name,
		'headline'	=> 'Blog',
		// 'copy'	=> get_the_archive_description()
		'copy'	=> 'Explore expert insights, tips, tools, and articles created to help your organization navigate the healthcare landscape.'
	)
); ?>

<div class="container px-8 lg:px-4 mx-auto pt-16 archive">
	<?php if( get_the_category()[0]->cat_ID == 1 or cat_is_ancestor_of( 1, $cat ) ):
	$archive_nav = (new \Log1x\Navi\Navi())->build('archive');	
	?>
	<div class="flex justify-between items-end flex-wrap space-y-4">
		<div class="w-full lg:w-2/3 lg:pr-4">
			<span class="block text-sm">Categories:</span>
			<div class="flex flex-wrap gap-x-8 items-end mt-4 text-sm">
				<?php foreach( $archive_nav->toArray() as $anav_item ): ?>
        <a href="<?= $anav_item->url ?>" class="px-4 py-2 rounded-lg font-semibold hover:text-navy focus:text-navy hover:bg-primary/10 focus:bg-primary/10 focus:outline-none <?= $anav_item->classes; ?> <?= $anav_item->active ? 'bg-primary/10' : '' ?>"><?= $anav_item->label ?></a>
        <?php endforeach; ?>
			</div>
		</div>
		<div class="w-full lg:w-1/3 lg:pl-4 text-sm">
			<span class="block text-sm mb-4">Search:</span>
			<?php get_search_form(); ?>
		</div>
	</div>
	<?php endif; ?>
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
