<?php
/**
 * Page Hero Slider
 */
?>
<?php if( have_rows('slides') ): ?>
<div class="glide hero-slider z-10">
	<div class="absolute w-full h-full top-0 left-0 right-0 mx-auto">
		<div class="container relative mx-auto h-full">
			<div class="absolute right-0 transform -translate-y-1/2 top-1/2 z-20 hidden lg:block" data-glide-el="controls">
				<button class="w-full h-full rounded-full flex justify-center items-center text-white" data-glide-dir="<?= esc_attr('>');?>">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="44" fill="none" viewBox="0 0 35 64" class="fill-current text-white">
            <path fill-rule="evenodd" d="M29.172 32 .586 3.414 3.414.586 34.828 32 3.414 63.414.586 60.586 29.172 32Z" clip-rule="evenodd"/>
          </svg>
        </button>
			</div>
			<div class="absolute left-0 right-0 mx-auto w-full flex lg:hidden items-center justify-center bottom-12">
				<div class="glide__bullets flex gap-4 z-20" data-glide-el="controls[nav]">
					<?php while( have_rows('slides') ): the_row(); ?>
						<button class="glide__bullet" data-glide-dir="=<?= get_row_index(); ?>"></button>
					<?php endwhile; ?>
					<button class="glide__bullet" data-glide-dir="=1"></button>
					<button class="glide__bullet" data-glide-dir="=2"></button>
				</div>
			</div>
		</div>
	</div>
	<div data-glide-el="track" class="glide__track">
		<ul class="glide__slides">
			<?php while( have_rows('slides') ): the_row(); 
				$image_desktop = get_sub_field('desktop_image');
				$image_mobile = get_sub_field('mobile_image');

				$headline = get_sub_field('headline');
				$copy = get_sub_field('copy');
				$button = get_sub_field('button');
				if( $button ) { 
					$button_url = $button['url'];
					$button_title = $button['title'];
					$button_target = $button['target'] ? $button['target'] : '_self';
				}

				$custom = get_sub_field('custom_html');

				if($image_desktop) {
					$img_2x = $image_desktop['url'];
					$img_1x = $image_desktop['sizes']['hero-image'];
				}
				if($image_mobile){
					$img_mobile = $image_mobile['sizes']['large'];
				}
				?>
				<li class="glide__slide">
					<div class="relative bg-transparent rounded-4xl lg:rounded-none z-20">
						<div class="container px-8 lg:px-4 mx-auto relative z-20 h-hero min-h-[600px] flex md:items-center">
							<div class="w-full md:w-7/12 xl:ml-[8.33%] py-12 lg:py-0">
								<?php if( $custom ): ?>
									<?= $custom; ?>
								<? else : ?>
									<div class="text-navy">
										<?php if($headline): ?>
										<h2 class="text-3xl lg:text-6xl font-bold"><?= $headline; ?></h2>
										<?php endif; ?>
										<?php if($copy): ?>
										<div class="space-y-4 mt-6 lg:text-xl font-semibold">
											<?= $copy; ?>
										</div>
										<?php endif; ?>
										<?php if($button): ?>
											<a href="<?= esc_url($button_url); ?>" target="<?= esc_attr($button_target); ?>" class="btn-lg bg-navy text-white mt-8"><?= esc_html($button_title); ?></a>
										<?php endif; ?>
									</div>
								<?php endif; ?>
							</div>
						</div>
						<div class="w-full md:w-[77%] h-full absolute right-0 bottom-0 lg:top-0 z-10 rounded-4xl lg:rounded-r-none">
							<picture>
								<source srcset="<?= esc_url( $img_2x ); ?> 2x, <?= esc_url( $img_1x ); ?> 1x" media="(min-width: 768px)">
								<source srcset="<?= esc_url( $img_mobile ); ?>">
								<img src="<?= esc_url( $img_1x ); ?>" alt="" class="w-full h-full object-cover rounded-4xl lg:rounded-r-none">
							</picture>
						</div>
					</div>
				</li>
			<?php endwhile; ?>
		</ul>
	</div>
</div>
<?php endif; ?>