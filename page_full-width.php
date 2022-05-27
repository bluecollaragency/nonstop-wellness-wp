<?php 

/* Template Name: Full Width Page */

get_header(); ?>

  <div class="max-w-screen-sm mx-auto px-8 lg:px-4">
    <div x-data="{ formselect: '' }">
    	<select 
				name="" 
				id="" 
				class="w-full rounded-2xl border-none outline-none focus:ring-gray-300 mt-1 px-4 py-3"
				x-model="formselect"
				>
				<option value="" disabled>Please select a reason for contacting us</option>
	      <option>Name</option>
	      <option>Something else</option>
	      <option>Another thing</option>
	    </select>
<!-- 	
			<div>
				selected: <span x-text="formselect"></span>
			</div> -->
			<div 
				x-show="formselect === 'Name'"
				>
				name
			</div>
			<div 
				x-show="formselect === 'Something else'"
				>
				something else
			</div>
			<div 
				x-show="formselect === 'Another thing'"
				>
				another thing
			</div>

    </div>
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
