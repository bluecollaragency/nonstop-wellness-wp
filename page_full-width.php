<?php 

/* Template Name: Full Width Page */

get_header(); ?>

	<?php if ( have_posts() ) : ?>
		<?php
		while ( have_posts() ) :
			the_post();
			?>

			<?php get_template_part( 'template-parts/content-page', get_post_format() ); ?>

		<?php endwhile; ?>

	<?php endif; ?>


<?php
get_footer();
