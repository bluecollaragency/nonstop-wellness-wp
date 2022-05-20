<?php 

/* Template Name: Full Width Page */

get_header(); ?>

  <!-- <div class="relative">
    <div class="relative lg:absolute w-full lg:w-1/2 lg:h-full z-10 rounded-4xl lg:rounded-l-none">
      <img src="//via.placeholder.com/708x560" alt="" class="w-full lg:h-full lg:object-cover rounded-4xl lg:rounded-l-none">
    </div>
    <div class="container mx-auto px-8 lg:px-4 overflow-visible">
      <div class="relative grid gap-x-8 lg:grid-cols-12 z-10">
        <div class="lg:col-span-5 lg:col-start-8 py-20 lg:pt-44 lg:pb-32 lg:mt-12">
          <span class="inline-block rounded-full border border-dark px-3 py-1 uppercase text-xs font-bold">Outcomes</span>
          <h1 class="text-5xl xl:text-7xl font-bold mt-2">Nonstop Benefits</h1>
          <p class="font-semibold mt-4 text-base lg:text-xl">Duis mollis, est non commodo luctus.</p>
          <a href="#" class="btn-lg bg-dark text-white mx-auto mt-8">Get a quote</a>
        </div>
      </div>
      <div class="absolute w-full lg:w-7/12 h-[80%] lg:h-full bg-primary right-0 bottom-0 lg:top-12 z-0 rounded-4xl lg:rounded-r-none"></div>
    </div>
  </div>

  <div class="relative mt-24">
    <div 
      class="
        relative 
        lg:absolute 
        w-full 
        lg:w-1/2 
        lg:h-full 
        z-10 
        rounded-4xl 
        lg:rounded-r-none 
        right-0
      "
      >
      <img 
        src="//via.placeholder.com/708x560" 
        alt="" 
        class="
          w-full 
          lg:h-full 
          lg:object-cover 
          rounded-4xl 
          lg:rounded-r-none
        "
      >
    </div>
    <div class="container mx-auto px-8 lg:px-4 overflow-visible">
      <div class="relative grid gap-x-8 lg:grid-cols-12 z-10">
        <div 
          class="
            lg:col-span-5 
            lg:col-start-2 
            py-20 
            lg:pt-44 
            lg:pb-32 lg:mt-12">
          <span class="inline-block rounded-full border border-dark px-3 py-1 uppercase text-xs font-bold">Outcomes</span>
          <h1 class="text-5xl xl:text-7xl font-bold mt-2">Nonstop Benefits</h1>
          <p class="font-semibold mt-4 text-base lg:text-xl">Duis mollis, est non commodo luctus.</p>
          <a href="#" class="btn-lg bg-dark text-white mx-auto mt-8">Get a quote</a>
        </div>
      </div>
      <div 
        class="
          absolute 
          w-full 
          lg:w-7/12 
          h-[80%] 
          lg:h-full 
          bg-primary 
          left-0 
          bottom-0 
          lg:top-12 
          z-0 
          rounded-4xl 
          lg:rounded-l-none
        "
      ></div>
    </div>
  </div> -->

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
