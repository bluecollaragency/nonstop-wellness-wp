<?php
/**
 * Page Block Testimonial Slider
 */
  $section_headline = get_field('section_headline');
  $section_link = get_field('section_link');
  if( $section_link ) { 
    $link_url = $section_link['url'];
    $link_title = $section_link['title'];
    $link_target = $section_link['target'] ? $section_link['target'] : '_self';
  }
?>
<div class="relative overflow-hidden pt-32">
	<div class="container mx-auto px-8 lg:px-4">
    <?php if($section_headline): ?>
		<h2 class="text-navy"><?= esc_html($section_headline); ?></h2>
    <?php endif; ?>
    <?php if( have_rows('slides') ): ?>
		<div class="glide testimonial-slider">
			<div class="flex mt-12 relative">
				<div class="w-full md:w-10/12 lg:w-2/3">
					<div data-glide-el="track" class="glide__track overflow-visible">
						<ul class="glide__slides">
              <?php while( have_rows('slides') ): the_row(); 
                $image = get_sub_field('image');
                $content = get_sub_field('content');
                if( $content ) {
                  $text = $content['text'];
                  $attribute = $content['attribute'];
                }
                ?>
                <li class="glide__slide bg-white rounded-4xl py-16 px-8 md:px-20 flex flex-wrap md:flex-nowrap gap-12 items-center">
                  <div class="w-full md:w-[37.5%] text-center">
                    <?php if($image) {
                      echo wp_get_attachment_image( $image, 'thumbnail', '', ['class' => 'mx-auto md:mx-0'] );
                    } ?>
                  </div>
                  <div class="w-full md:w-[62.5%] text-center md:text-left text-navy text-lg space-y-4">
                    <?= $text; ?>
                    <p class="font-semibold mt-4 text-sm"><?= esc_html($attribute); ?></p>
                  </div>
                </li>
              <?php endwhile; ?>							
						</ul>
					</div>
				</div>
				<?php get_template_part( 'template-parts/partials/slider-next-btn-round' ); ?>
			</div>
			<div class="flex justify-between items-center mt-12">
				<div>
					<div class="glide__bullets flex gap-4" data-glide-el="controls[nav]">
            <?php while( have_rows('slides') ): the_row(); ?>
              <button class="glide__bullet" data-glide-dir="=<?= get_row_index(); ?>"></button>
            <?php endwhile; ?>
					</div>
				</div>
        <?php if($section_link): ?>
          <div>      
            <?php get_template_part( 'template-parts/partials/block-section-link', null, array(
              'data' => array(
                'link_url' => $link_url,
                'link_target' => $link_target,
                'link_title' => $link_title
              )
            ) ); ?>
          </div>
        <?php endif; ?>
			</div>
		</div>
    <?php endif; ?>
	</div>
</div>