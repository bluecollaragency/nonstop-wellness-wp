<?php
/**
 * Page Image + Text Block Template
 */
$copy = get_field('copy') ?: 'Copy goes here';
$img_loc = get_field('image_location');
$image = get_field('image') ?: 126;
$image_icon = get_field('image_icon');
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
      <?php if($image) {
        echo wp_get_attachment_image( $image, 'medium', '', ['class' => 'rounded-4xl w-full h-auto'] );
      } ?>
      
      <img 
				src="https://via.placeholder.com/94x94" 
				alt="Placeholder Image"
				class="
          absolute 
          right-6 
          -bottom-6 
          w-1/3 
          lg:bottom-12 
          <?php if($img_loc) {
            echo 'lg:-left-12';
          } else {
            echo 'lg:-right-12';
          } ?>
        "
			>
      
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