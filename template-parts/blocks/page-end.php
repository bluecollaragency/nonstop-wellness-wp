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
  $last_block = get_field('last_block');
?>
<div 
	class="
    relative
    <?php if( $last_block ): ?>
    after:w-full
    after:bg-white
    after:rounded-4xl
    after:rounded-b-none
    after:absolute
    after:h-32
    after:-bottom-8
    after:left-0
    <?php endif; ?>
  "
	>
	<div 
    class="
      container 
      py-24 
      px-8 
      mx-auto 
      rounded-4xl 
      mt-32 
      relative 
      z-10
      <?php if( $bg_color == 'teal' ) {
        echo 'bg-secondary ';
        } else {
          echo 'bg-primary ';
        } 
      ?>
    ">
		<div class="max-w-prose lg:max-w-screen-md mx-auto text-center">
      <?php if($headline): ?>  
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
          <?= esc_html($headline); ?>
        </h2>
      <?php endif; ?>
      <?php if($text) {
        echo $text;
      } ?>
      <?php if($button): ?>
			  <a href="<?= esc_url($button_url); ?>"  target="<?= esc_attr($button_target); ?>" class="btn-lg bg-navy text-white mx-auto mt-8 no-underline"><?= esc_html($button_title); ?></a>
      <?php endif; ?>
		</div>
	</div>
</div>