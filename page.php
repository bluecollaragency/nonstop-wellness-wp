<?php get_header(); ?>

<div class="relative bg-[#52D3E5] lg:bg-transparent rounded-2xl lg:rounded-none z-20">
	<div class="container px-8 lg:px-4 mx-auto relative z-10 h-hero min-h-[400px] flex lg:items-center">
		<div class="w-full flex">
			<div class="w-full lg:w-7/12 lg:ml-[8.33%] pt-6 lg:pt-0">
				<h1 class="text-3xl lg:text-6xl font-bold">Lower premiums.<br/>Accesible benefits.<br/>Better health.</h1>
        <p class="mt-6 lg:text-xl font-semibold">Provide the best health insurance for less.</p>
				<a href="#" class="btn-lg bg-dark text-white mt-8">See our services</a>
			</div>
		</div>
	</div>
	<div class="w-full lg:w-[77%] h-[70%] lg:h-full absolute right-0 bottom-0 lg:top-0 bg-red-200 z-0 rounded-2xl lg:rounded-r-none">
		<img src="<?= get_template_directory_uri();?>/img/hero-placeholder.jpg" alt="" class="w-full h-full object-cover lg:rounded-l-2xl rounded-b-2xl lg:rounded-br-none">
	</div>
</div>
<div class="relative before:block before:bg-primary before:absolute before:left-0 before:top-0 before:w-1/2 before:h-full before:z-0 -mt-24 pt-24 rounded-2xl z-10">
	<div class="container relative mx-auto px-4 bg-primary z-10">
		<div class="grid lg:grid-cols-12 gap-4">
			<div class="lg:col-span-6">keft</div>
			<div class="lg:col-span-5">
				<h2 class="text-4xl font-bold">The cost of health insurance is crushing the american workforce – and their employers</h2>
			</div>
		</div>
	</div>
</div>

<div class="container mx-auto my-8">

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
