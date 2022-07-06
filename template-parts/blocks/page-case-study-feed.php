<?php
/**
 * Page Nonstop Case Study Feed
 */

?>
<div class="relative overflow-hidden mt-32">
	<div class="container mx-auto px-8 lg:px-4">
		<h2><?= esc_html( get_field( 'feed_headline' ) ); ?></h2>
		<div class="max-w-prose space-y-4 mt-4">
			<?= get_field( 'feed_copy' ); ?>
		</div>
		
		
		<div class="glide blog-slider mt-12">
			<div data-glide-el="track" class="glide__track overflow-visible">
				<ul class="glide__slides flex">
					<?php
						$casestudies_loop = new WP_Query(array(
							'post_type'				=> 'case_studies',
							'posts_per_page'	=> 8,
							'order'						=> 'DESC'
						));
						if( have_posts() ) {
							while( $casestudies_loop->have_posts() ) {
								echo '<li class="glide__slide h-auto bg-white rounded-4xl">';
								$casestudies_loop->the_post();
								get_template_part( 'template-parts/content-archive' );
								echo '</li>';
							} 
						}
						wp_reset_postdata();
					?>
				</ul>
			</div>
			<?php get_template_part( 'template-parts/partials/slider-next-btn-round' ); ?>
			<div class="flex justify-between mt-12">
				<div>
					<div class="glide__bullets flex gap-4" data-glide-el="controls[nav]">
						<?php
							if( have_posts() ): ?>
								<?php	while( $casestudies_loop->have_posts() ): $casestudies_loop->the_post(); ?>
									<button class="glide__bullet" data-glide-dir="=<?= $casestudies_loop->current_post; ?>"></button>
								<?php 
								endwhile; 
							endif;
							wp_reset_postdata();
						?>
					</div>
				</div>
				<?php get_template_part( 'template-parts/partials/block-section-link' ); ?>
			</div>
		</div>
		
	</div>
</div>