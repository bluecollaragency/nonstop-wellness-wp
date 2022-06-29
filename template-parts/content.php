<article id="post-<?php the_ID(); ?>" <?php post_class( 'mb-12 bg-white rounded-4xl' ); ?>>

	<div class="relative w-full">
		<div class="w-full h-0 pb-[100%]">
			<a href="<?= esc_url( get_permalink() ); ?>">
			<?php if( has_post_thumbnail() ){
				echo the_post_thumbnail('medium', array('class' => 'absolute w-full h-full object-cover rounded-t-4xl') );
			} else {
				echo '<img 
					src="https://via.placeholder.com/822x822" 
					alt="Placeholder Image"
					class="absolute w-full h-full object-cover rounded-t-4xl"
				>';
			} ?>
			</a>
		</div>
	</div>
	<div class="bg-white p-10 rounded-b-4xl">
		<header class="entry-header">
			<?php the_title( sprintf( '<h2 class="entry-title text-2xl md:text-3xl font-extrabold leading-tight mb-1"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' ); ?>
		</header>

		<?php if ( is_search() || is_archive() ) : ?>

			<div class="entry-summary mt-6">
				<?php the_excerpt(); ?>
			</div>

		<?php else : ?>

			<div class="entry-content">
				<?php
				/* translators: %s: Name of current post */
				the_content(
					sprintf(
						__( 'Continue reading %s', 'tailpress' ),
						the_title( '<span class="screen-reader-text">"', '"</span>', false )
					)
				);

				wp_link_pages(
					array(
						'before'      => '<div class="page-links"><span class="page-links-title">' . __( 'Pages:', 'tailpress' ) . '</span>',
						'after'       => '</div>',
						'link_before' => '<span>',
						'link_after'  => '</span>',
						'pagelink'    => '<span class="screen-reader-text">' . __( 'Page', 'tailpress' ) . ' </span>%',
						'separator'   => '<span class="screen-reader-text">, </span>',
					)
				);
				?>
			</div>

		<?php endif; ?>
	</div>
</article>
