<?php
/**
 * Page Block: Card Grid
 */
$custom_html = get_field('custom_html');
$grid_title = get_field( 'card_grid_title' );
$grid_intro = get_field( 'card_grid_intro_text' );
?>

<?= $custom_html; ?>

<div class="container px-8 lg:px-4 mx-auto">
  <?php if($grid_title): ?>
    <h2><?= esc_html( $grid_title ); ?></h2>
  <?php endif; ?>
  <?php if($grid_intro): ?>
	<div class="max-w-prose space-y-4 mt-4">
		<?= $grid_intro; ?>
	</div>
  <?php endif; ?>
  <?php if( have_rows('card_grid') ): ?>
  <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">

    <?php while( have_rows('card_grid') ): the_row();
      $image = get_sub_field('image');
      $headline = get_sub_field('headline');
      $copy = get_sub_field('copy');
      $link = get_sub_field('link');
      if($link) {
        $link_url = $link['url'];
        $link_title = $link['title'];
        $link_target = $link['target'] ? $link['target'] : '_self';
      }
    ?>
    <div class="bg-white rounded-4xl">
      <div class="relative w-full">
        <div class="w-full h-0 pb-[100%]">
          <?php if($link and $image): ?>
          <a href="<?= esc_url( $link_url ); ?>" target="<?= esc_attr( $link_target ); ?>">
          <?php endif; ?>
            <?php if($image) {
              echo wp_get_attachment_image( $image, 'medium', '', ['class' => 'absolute w-full h-full object-cover rounded-t-4xl'] );
            } else {
              echo '<img src="'.get_stylesheet_directory_uri().'/img/blog-post-placeholder-2x.jpg" alt="Nonstop blogpost image placeholder" class="absolute w-full h-full object-cover rounded-t-4xl">';
            } ?>
          <?php if($link and $image): ?>
          </a>
          <?php endif; ?>
        </div>
      </div>
      <div class="bg-white p-10 rounded-b-4xl">
        <?php if($headline): ?>
        <h3 class="text-2xl md:text-3xl font-extrabold leading-tight mb-1">
          <?php if( $link ) {
            echo '<a href="'. esc_url( $link_url ) .'" target="'. esc_attr( $link_target ) .'">';
          } ?>
          <?= esc_html( $headline ); ?>
          <?php if( $link ) {
            echo '</a>';
          } ?>
        </h3>
        <?php endif; ?>
        <div class="entry-summary mt-6 space-y-4">
          <?= $copy; ?>
        </div>
        <a href="<?= esc_url( $link_url ); ?>" target="<?= esc_attr( $link_target ); ?>" class="mt-4 inline-flex items-center space-x-2 font-semibold hover:brightness-125">
          <span><?= esc_html( $link_title ); ?></span><i class="icon-right-arrow text-3xl"></i>
        </a>	
      </div>
    </div>
    <?php endwhile; ?>

  </div>
  <?php endif; ?>
</div>
