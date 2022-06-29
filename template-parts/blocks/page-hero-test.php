<?php
/**
 * Page Hero Test Block Template
 */

 $args = wp_parse_args(
  $args,
  array(
    'img_loc' => get_field('image_location'),
    'bg_color' => get_field('background_color'),
    'image' => get_field('image') ?: 209,
    'content' => get_field('content_group'),
    'prehead' => get_field('content_group')['preheader'],
    'headline' => get_field('content_group')['header'],
    'copy' => get_field('content_group')['copy'],
    'button' => get_field('content_group')['button'],
  )
  );

  if( $args['button'] ) {
    $args = wp_parse_args(
      $args,
      array(
        'button_url'  => get_field('content_group')['button']['url'],
        'button_title'  => get_field('content_group')['button']['title'],
        'button_target'  => get_field('content_group')['button']['target'] ? get_field('content_group')['button']['target'] : '_self'
      )
    );
  }
?>

<div class="relative lg:mb-12">
  <div 
    class="
      relative 
      lg:absolute 
      w-full 
      lg:w-1/2 
      lg:h-full 
      z-10 
      rounded-4xl 
      <?php if($args['img_loc']): ?>
        lg:rounded-l-none
      <?php else: ?>
        lg:rounded-r-none 
        right-0
      <?php endif; ?>
    "
    >
    <?php 
      if($args['img_loc']){
      echo wp_get_attachment_image( 
        $args['image'], 
        'full', 
        '', 
        ['class' => 'w-full lg:h-full lg:object-cover rounded-4xl lg:rounded-l-none', 'sizes' => '(max-width: 959px) 100vw, 50vw'] 
      ); 
      } else {
        echo wp_get_attachment_image( 
          $args['image'], 
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
          <?php if($args['img_loc']): ?>
            lg:col-start-8 
          <?php else: ?>
            lg:col-start-2 
          <?php endif; ?>
          py-20 
          lg:pt-44 
          lg:pb-32 
          lg:mt-12"
        >
        <?php if($args['prehead']): ?>
          <span class="inline-block uppercase text-xs font-bold mb-4"><?= esc_html($args['prehead']); ?></span>
        <?php endif; ?>
        <?php if($args['headline']): ?>
          <h1 class="text-5xl xl:text-7xl font-bold"><?= esc_html($args['headline']); ?></h1>
        <?php endif; ?>
        <?php if($args['copy']): ?>
          <div class="space-y-4 mt-4 text-base lg:text-xl font-semibold">
            <?= $args['copy']; ?>
          </div>
        <?php endif; ?>
        <?php if($args['button']): ?>
          <a href="<?= esc_url($args['button_url']); ?>"  target="<?= esc_attr($args['button_target']); ?>" class="btn-lg bg-dark text-white mx-auto mt-8 no-underline"><?= esc_html($args['button_title']); ?></a>
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
        bg-no-repeat
        <?php if( $args['bg_color'] == 'green' ) {
          echo 'bg-primary ';
          } else if( $args['bg_color'] == 'teal' ) {
            echo 'bg-secondary ';
          } else if( $args['bg_color'] == 'fuchsia' ) {
            echo 'bg-fuchsia ';
          } else if( $args['bg_color'] == 'purple' ) {
            echo 'bg-purple ';
          } else {
            echo 'bg-red-orange ';
          }
       ?>
        bottom-0 
        lg:top-12 
        z-0 
        rounded-4xl 
        <?php if($args['img_loc']): ?>
          right-0 
          lg:rounded-r-none
          bg-watermark
          bg-right
        <?php else: ?>
          left-0
          lg:rounded-l-none
          bg-watermark-flip
          bg-left
        <?php endif; ?>
      "
    ></div>
  </div>
</div>