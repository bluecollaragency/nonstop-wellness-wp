<?php 

/* Template Name: Full Width Page */

get_header(); ?>

  <div class="max-w-screen-sm mx-auto px-8 lg:px-4">
    <select name="" id="" class="w-full rounded-2xl border-none outline-none focus:ring-gray-300 mt-1 px-4 py-3">
      <option value="1">Name</option>
      <option value="2">Something else</option>
      <option value="3">Another thing</option>
    </select>
  </div>

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
