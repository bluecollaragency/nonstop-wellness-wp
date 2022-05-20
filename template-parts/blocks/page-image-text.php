<?php
/**
 * Page Image + Text Block Template
 */
$copy = get_field('copy');
$img_loc = get_field('image_location');
?>
<div class="page-image-text container mx-auto px-8 lg:px-4">
	<div class="grid lg:grid-cols-12 mt-4 gap-8 items-center relative">
		<div 
      class="
        relative 
        col-start-1 
        col-end-12
        lg:col-span-6
        xl:col-span-5
        overflow-visible
        order-1
        <?php if($img_loc): ?>
          xl:col-start-2 
        <?php else:?>
          lg:col-start-7
          xl:col-start-7
          lg:order-2
        <?php endif; ?>
      "
      >
			<img src="//via.placeholder.com/520x520" alt="" class="rounded-4xl w-full h-auto">
		</div>
		<div 
      class="
        col-start-1 
        col-end-12 
        md:col-end-12 
        lg:col-span-5 
        xl:col-span-4
        order-2
        <?php if($img_loc): ?>
          lg:col-start-8 
          xl:col-start-8
        <?php else:?>
          lg:col-start-1
          xl:col-start-2
          lg:order-1
        <?php endif; ?>
      "
      >
      <div class="space-y-4">
        <?= $copy; ?>
      </div>
		</div>
	</div>
</div>