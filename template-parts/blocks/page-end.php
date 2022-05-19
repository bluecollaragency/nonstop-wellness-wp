<?php
/**
 * Page End Block Template
 */

  $headline = get_field('headline') ?: 'Contact us to learn more or request a quote';
  $headline_size = get_field('headline_size');

  $text = get_field('text_area');

  $button = get_field('button');
  if( $button ) { 
    $button_url = $button['url'];
    $button_title = $button['title'];
    $button_target = $button['target'] ? $button['target'] : '_self';
  }

  $bg_color = get_field('background_color');
?>
<div 
	class="relative"
	>
	<div class="
      container 
      
      py-24 px-8 
      mx-auto 
      rounded-4xl 
      mt-32 
      relative 
      z-10
      <?php if( $bg_color == 'green' ) {
        echo 'bg-primary ';
        } else {
          echo 'bg-secondary ';
        } 
      ?>
    ">
		<div class="max-w-prose lg:max-w-screen-md mx-auto text-center">
      <h2 
        class="
          text-center 
          text-3xl 
          <?php if( $headline_size == 'md' ) {
            echo 'lg:text-4xl';
          } else if( $headline_size == 'lg' ) {
            echo 'lg:text-6xl';
          } 
          ?>
        "
        >
        <?= $headline; ?>
      </h2>
      <?php if($text) {
        echo $text;
      } ?>
			<a href="<?= esc_url($button_url); ?>"  target="<?= esc_attr($button_target); ?>" class="btn-lg bg-dark text-white mx-auto mt-8 no-underline"><?= esc_html($button_title); ?></a>
		</div>
	</div>
</div>