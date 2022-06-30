<?php 
/*
Template Name: Archives
*/

get_header(); ?>

<?php 
	get_template_part( 'template-parts/blocks/page-hero', null, array(
		'image'	=> 209,
		'bg_color' => get_field('background_color', get_queried_object() ),
		'headline'	=> 'Blog',
		'copy'	=> 'Explore expert insights, tips, tools, and articles created to help your organization navigate the healthcare landscape.'
	)
); ?>

<div class="container px-8 lg:px-4 mx-auto pt-16 archive">

	<div class="flex justify-between items-end flex-wrap space-y-4">
		<div class="w-full lg:w-2/3 lg:pr-4">
			<span class="block text-sm">Categories:</span>
			<div class="flex flex-wrap gap-x-8 items-end mt-4 text-sm">
				<a href="#" class="px-4 py-2 rounded-lg font-semibold hover:text-navy focus:text-navy hover:bg-primary/10 focus:bg-primary/10 focus:outline-none focus:shadow-outline bg-primary/10">All Categories</a>
				<a href="#" class="px-4 py-2 rounded-lg font-semibold hover:text-navy focus:text-navy hover:bg-primary/10 focus:bg-primary/10 focus:outline-none focus:shadow-outline">Category 1</a>
				<a href="#" class="px-4 py-2 rounded-lg font-semibold hover:text-navy focus:text-navy hover:bg-primary/10 focus:bg-primary/10 focus:outline-none focus:shadow-outline">Category 2</a>
			</div>
		</div>
		<div class="w-full lg:w-1/3 lg:pl-4 text-sm">
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

	<div class="post-archive-nav flex align-middle justify-between font-bold mt-24 text-sm">
    <div class=""><i class="far fa-long-arrow-alt-left mr-2"></i> Older posts</div>
    <div class="">Newer posts <i class="far fa-long-arrow-alt-right fill-current ml-2"></i></div>
  </div>

	<!-- <?php if( get_the_post_navigation() ): ?>
  <div class="post-archive-nav flex align-middle justify-between font-bold mt-24">
    <div class=""><?php next_posts_link( '<i class="far fa-long-arrow-alt-left mr-2"></i> Older posts' ); ?></div>
    <div class=""><?php previous_posts_link( 'Newer posts <i class="far fa-long-arrow-alt-right fill-current ml-2"></i>' ); ?></div>
  </div>
  <?php endif; ?> -->

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
