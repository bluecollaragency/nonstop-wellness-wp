<?php 

/**
 * The template for the search results page
 * 
 */

get_header(); ?>

<div class="container mx-auto my-8">
  <div class="max-w-screen-lg mx-auto mb-16">
    <h1>
      <?php
        printf(
          /* translators: %s: query term */
          esc_html__( 'Search Results for: %s', 'tailpress' ),
          '<span class="font-bold">' . get_search_query() . '</span>'
        );
      ?>
    </h1>
  </div>
	<?php if ( have_posts() ) : ?>
		<?php
		while ( have_posts() ) :
			the_post();
			?>

			<?php get_template_part( 'template-parts/content', get_post_format() ); ?>

		<?php endwhile; ?>

	<?php endif; ?>

</div>

<?php
get_footer();
