<?php
/**
 * Homepage Zone 1
 */

$image = get_field('image') ?: 126;
$content = get_field('content');
if($content) {
	$heading = $content['heading'];
	$copy = $content['copy'];
}
?>
<div class="
	relative 
	bg-primary 
	lg:bg-transparent 
	rounded-4xl 
	z-0
	bg-watermark 
	lg:bg-none 
	bg-right-bottom 
	bg-no-repeat 
	bg-contain

	after:bg-primary
	after:top-0
	after:h-8
	after:w-full
	after:transform
	after:-translate-y-full
	after:absolute
	after:block
	lg:after:hidden

	before:block 
	before:bg-primary 
	before:absolute 
	before:left-0 
	before:top-0 
	before:w-full 
	lg:before:w-1/2 
	before:h-8 
	lg:before:h-full 
	before:z-0">
	<div class="container relative mx-auto px-8 lg:px-4 lg:bg-primary z-10 rounded-b-4xl lg:rounded-r-4xl h-full flex items-end lg:items-center lg:bg-watermark bg-right-bottom bg-no-repeat bg-contain lg:-mt-12 xl:-mt-24">
		<div class="grid lg:grid-cols-12 gap-12 py-16 lg:py-48 items-center">
			<div class="lg:col-span-6">
				<?php if($image) {
          echo wp_get_attachment_image( $image, 'medium', '', ['class' => 'mx-auto rounded-4xl'] );
        } ?>
			</div>
			<div class="lg:col-span-5 space-y-4 md:space-y-6">
				<?php if($heading) : ?>
				<h2 class="text-2xl md:text-4xl font-bold tracking-[0.01em]"><?= esc_html( $heading ); ?></h2>
				<?php endif; ?>
				<?php if($copy) {
					echo $copy;
				} ?>
			</div>
		</div>
	</div>
</div>