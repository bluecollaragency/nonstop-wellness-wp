<?php
/**
 * Page End Block Template
 */
  $args = wp_parse_args(
    $args,
    array(
      'headline'  => get_field('headline') ?: 'Contact us to learn more or request a quote',
      'headline_size' => get_field('headline_size'),
      'text'  => get_field('text_area'),
      'button'  => get_field('button'),
      'bg_color' => get_field('background_color'),
      'last_block' => get_field('last_block')
    )
  );
  if( $args['button'] ) { 
    $args = wp_parse_args(
      $args,
      array(
        'button_url' => $args['button']['url'],
        'button_title' => $args['button']['title'],
        'button_target' => $args['button']['target'] ? $args['button']['target'] : '_self'
      )
    );
  }
?>
<div 
	class="
    relative
    <?php if( $args['last_block'] ): ?>
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
      <?php if( $args['bg_color'] == 'teal' ) {
        echo 'bg-secondary ';
        } else {
          echo 'bg-primary ';
        } 
      ?>
    ">
		<div class="max-w-prose lg:max-w-screen-md mx-auto text-center">
      <?php if($args['headline']): ?>  
        <h2 
          class="
            text-center 
            text-3xl 
            <?php if( $args['headline_size'] == 'md' ) {
              echo 'lg:text-4xl';
            } else if( $args['headline_size'] == 'lg' ) {
              echo 'lg:text-6xl';
            } 
            ?>
          "
          >
          <?= esc_html($args['headline']); ?>
        </h2>
      <?php endif; ?>
      <?php if($args['text']) {
        echo $args['text'];
      } ?>
      <?php if($args['button']): ?>
			  <a href="<?= esc_url($args['button_url']); ?>"  target="<?= esc_attr($args['button_target']); ?>" class="btn-lg bg-navy text-white mx-auto mt-8 no-underline"><?= esc_html($args['button_title']); ?></a>
      <?php endif; ?>
		</div>
	</div>
</div>