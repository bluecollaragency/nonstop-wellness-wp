<?php
/**
 * Page Nonstop Toolbox Feed
 */
$section_link = get_field('section_link');
  if( $section_link ) { 
    $section_link_url = $section_link['url'];
    $section_link_title = $section_link['title'];
    $section_link_target = $section_link['target'] ? $section_link['target'] : '_self';
  }
?>
<div class="relative overflow-hidden">
	<div class="container mx-auto px-8 lg:px-4">
		<h2><?= esc_html( get_field( 'feed_headline' ) ); ?></h2>
		<div class="max-w-prose space-y-4 mt-4">
			<?= get_field( 'feed_copy' ); ?>
		</div>
		
		
		<div class="glide blog-slider mt-12">
			<div data-glide-el="track" class="glide__track overflow-visible">
				<ul class="glide__slides flex">
					<?php
						$blog_loop = new WP_Query(array(
							'post_type'				=> 'post',
							'posts_per_page'	=> 8,
							'order'						=> 'DESC'
						));
						if( have_posts() ) {
							while( $blog_loop->have_posts() ) {
								echo '<li class="glide__slide h-auto bg-white rounded-4xl">';
								$blog_loop->the_post();
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
								<?php	while( $blog_loop->have_posts() ): $blog_loop->the_post(); ?>
									<button class="glide__bullet" data-glide-dir="=<?= $blog_loop->current_post; ?>"></button>
								<?php 
								endwhile; 
							endif;
							wp_reset_postdata();
						?>
					</div>
				</div>
				<?php if($section_link) {
					get_template_part( 'template-parts/partials/block-section-link', null, array(
						'data' => array(
						'link_url' => $section_link_url,
						'link_target' => $section_link_target,
						'link_title' => $section_link_title
						)
					) );
				} ?>
			</div>
		</div>
		
	</div>
</div>