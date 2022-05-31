<?php 
/*
Template Name: Archives
*/

get_header(); ?>

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

</div>

<?php
get_footer();
