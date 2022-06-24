<?php
/**
 * Page Block Watermark Row
 */
$image = get_field('image') ?: 237;
$content = get_field('content');
if($content) {
	$heading = $content['heading'];
	$copy = $content['copy'];
  $button = $content['button'];
}
if( $button ) { 
  $button_url = $button['url'];
  $button_title = $button['title'];
  $button_target = $button['target'] ? $button['target'] : '_self';
}
?>
<div class="
	overflow-hidden
	relative 
	bg-secondary 
	lg:bg-transparent  
	z-10 
	rounded-4xl
	lg:rounded-none
	"
	>
	<div class="
		container 
		mx-auto 
		px-8 
		lg:px-4 
		bg-secondary 
		z-10 
		rounded-b-4xl 
		lg:rounded-tl-4xl 
		h-full 
		flex 
		items-end 
		lg:items-center 
		overflow-visible
		
		before:block 
		before:bg-secondary 
		before:absolute 
		before:right-0 
		before:top-0 
		before:w-full 
		lg:before:w-1/2 
		before:h-full 
		before:z-0 
		before:rounded-4xl 
		lg:before:rounded-none
		before:bg-watermark  
		before:bg-right-bottom 
		before:bg-no-repeat 
		before:bg-contain">
		<div class="grid lg:grid-cols-12 gap-12 py-16 lg:py-44 items-center z-10">
			<div class="lg:col-span-6 text-center">
        <?php if($image) {
          echo wp_get_attachment_image( $image, 'medium', '', ['class' => 'mx-auto rounded-4xl'] );
        } ?>
			</div>
			<div class="lg:col-span-6 xl:col-span-5">
        <?php if($heading) : ?>
				<h2 class="text-4xl md:text-4xl font-bold tracking-[0.01em]"><?= esc_html( $heading ); ?></h2>
        <?php endif; ?>
        <div class="space-y-4 md:space-y-6 mt-6">
          <?php if($copy) {
  					echo $copy;
  				} ?>
        </div>
				<?php if($button): ?>
          <a href="<?= esc_url($button_url); ?>"  target="<?= esc_attr($button_target); ?>" class="btn-lg bg-dark text-white mt-8 no-underline"><?= esc_html($button_title); ?></a>
        <?php endif; ?>
			</div>
		</div>
	</div>
</div>