<?php
/**
 * Page Hero Text Block Template
 */

 $bg_color = get_field('background_color');
 $content = get_field('content');
?>

<div 
  class="
    hero-text-only container py-24 mx-auto px-8 rounded-4xl md:text-center bg-watermark bg-no-repeat bg-right 
    <?php if( $bg_color == 'green' ) {
      echo 'bg-primary ';
      } else if( $bg_color == 'teal' ) {
        echo 'bg-secondary ';
      } else if( $bg_color == 'fuchsia' ) {
        echo 'bg-fuchsia ';
      } else if( $bg_color == 'purple' ) {
        echo 'bg-purple ';
      } else if( $bg_color == 'red-orange' ) {
        echo 'bg-red-orange ';
      } else {
        echo 'bg-primary ';
      }
    ?>
  "
>
  <div class="hero-text-content">
    <?= $content; ?>
  </div>
  <?php if( have_rows( 'buttons' ) ): ?>
  <div class="hero-text-buttons flex flex-row flex-wrap gap-x-8 mx-auto justify-start md:justify-center mt-6">
    <?php while( have_rows( 'buttons' ) ): the_row();
      $button = get_sub_field('button');
      $target = $button['target'] ? $button['target'] : '_self';
      ?>
      <a href="<?= esc_url($button['url']); ?>" target="<?= esc_attr($target); ?>" class="btn-lg"><?= esc_html($button['title']); ?></a>
    <?php endwhile; ?>
  </div>
  <?php endif; ?>
</div>