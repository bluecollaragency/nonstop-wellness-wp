<?php
/**
 * Page Hero Block Template
 */

  $img_loc = get_field('image_location');
  $bg_color = get_field('background_color');
  $image = get_field('image') ?: 209;
  $content = get_field('content_group');
  if($content){
    $prehead = $content['preheader'];
    $headline = $content['header'];
    $copy = $content['copy'];
    $button = $content['button'];
  }
  if( $button ) { 
    $button_url = $button['url'];
    $button_title = $button['title'];
    $button_target = $button['target'] ? $button['target'] : '_self';
  }
?>

<div class="relative">
  <div 
    class="
      relative 
      lg:absolute 
      w-full 
      lg:w-1/2 
      lg:h-full 
      z-10 
      rounded-4xl 
      <?php if($img_loc): ?>
        lg:rounded-l-none
      <?php else: ?>
        lg:rounded-r-none 
        right-0
      <?php endif; ?>
    "
    >
    <?php 
      if($img_loc){
      echo wp_get_attachment_image( 
        $image, 
        'full', 
        '', 
        ['class' => 'w-full lg:h-full lg:object-cover rounded-4xl lg:rounded-l-none', 'sizes' => '(max-width: 959px) 100vw, 50vw'] 
      ); 
      } else {
        echo wp_get_attachment_image( 
          $image, 
          'full', 
          '', 
          ['class' => 'w-full lg:h-full lg:object-cover rounded-4xl lg:rounded-r-none', 'sizes' => '(max-width: 959px) 100vw, 50vw'] 
        );
      }
    ?>
  </div>
  <div class="container mx-auto px-8 lg:px-4 overflow-visible">
    <div class="relative grid gap-x-8 lg:grid-cols-12 z-10">
      <div 
        class="
          lg:col-span-5 
          <?php if($img_loc): ?>
            lg:col-start-8 
          <?php else: ?>
            lg:col-start-2 
          <?php endif; ?>
          py-20 
          lg:pt-44 
          lg:pb-32 
          lg:mt-12"
        >
        <?php if($prehead): ?>
          <span class="inline-block uppercase text-xs font-bold mb-4"><?= esc_html($prehead); ?></span>
        <?php endif; ?>
        <?php if($headline): ?>
          <h1 class="text-5xl xl:text-7xl font-bold"><?= esc_html($headline); ?></h1>
        <?php endif; ?>
        <?php if($copy): ?>
          <div class="space-y-4 mt-4 text-base lg:text-xl font-semibold">
            <?= $copy; ?>
          </div>
        <?php endif; ?>
        <?php if($button): ?>
          <a href="<?= esc_url($button_url); ?>"  target="<?= esc_attr($button_target); ?>" class="btn-lg bg-dark text-white mx-auto mt-8 no-underline"><?= esc_html($button_title); ?></a>
        <?php endif; ?>
      </div>
    </div>
    <div 
      class="
        absolute 
        w-full 
        lg:w-7/12 
        h-[80%] 
        lg:h-full 
        <?php if( $bg_color == 'green' ) {
          echo 'bg-primary ';
          } else {
            echo 'bg-secondary ';
          } 
       ?>
        bottom-0 
        lg:top-12 
        z-0 
        rounded-4xl 
        <?php if($img_loc): ?>
          right-0 
          lg:rounded-r-none
        <?php else: ?>
          left-0
          lg:rounded-l-none
        <?php endif; ?>
      "
    ></div>
  </div>
</div>