<?php 
/*
Template Name: Archives
*/



get_header(); ?>

<?php 
		get_template_part( 'template-parts/blocks/page-hero-test', null, array(
				'image'	=> 209,
				'bg_color' => 'green',
				'headline'	=> 'Blog',
				'button'	=> true,
				'button_title' => 'CTA'
			)
	 	); ?>

<div class="container px-8 lg:px-4 mx-auto my-8 archive">

	<?php if ( have_posts() ) : ?>
    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
		<?php
		while ( have_posts() ) :
			the_post();
			?>

			<?php get_template_part( 'template-parts/content', get_post_format() ); ?>

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
get_footer();
