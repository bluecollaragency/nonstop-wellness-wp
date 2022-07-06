<article id="post-<?php the_ID(); ?>" <?php post_class( 'bg-white rounded-4xl' ); ?>>
	<?php if( is_search() ): ?>
	<?php else: ?>
	<div class="relative w-full">
		<div class="w-full h-0 pb-[100%]">
			<a href="<?= esc_url( get_permalink() ); ?>">
			<?php if( has_post_thumbnail() ){
				echo the_post_thumbnail('medium', array('class' => 'absolute w-full h-full object-cover rounded-t-4xl') );
			} else {
				echo '<img src="'.get_stylesheet_directory_uri().'/img/blog-post-placeholder-2x.jpg"
					alt="Nonstop blogpost image placeholder"
					class="absolute w-full h-full object-cover rounded-t-4xl"
				>';
			} ?>
			</a>
		</div>
	</div>
	<?php endif; ?>
	<div class="bg-white p-10 rounded-b-4xl">
		<header class="entry-header">
			<?php the_title( sprintf( '<h2 class="entry-title text-2xl md:text-3xl font-extrabold leading-tight mb-1"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' ); ?>
		</header>

			<div class="entry-summary mt-6">
				<?php the_excerpt(); ?>
			</div>
			<a href="<?= esc_url( get_permalink() ); ?>" class="mt-4 inline-flex items-center space-x-2 font-semibold hover:brightness-90">
				<span>Read More</span><i class="icon-right-arrow text-3xl"></i>
			</a>	

	</div>
</article>
