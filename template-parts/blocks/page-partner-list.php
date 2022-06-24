<?php
/**
 * Page Partner List
 */
  $section_headline = get_field('section_headline');
  $section_intro = get_field('section_intro');
  $section_link = get_field('section_link');
  if( $section_link ) { 
    $section_link_url = $section_link['url'];
    $section_link_title = $section_link['title'];
    $section_link_target = $section_link['target'] ? $section_link['target'] : '_self';
  }
?>
<div class="container mx-auto px-8 lg:px-4 mt-32 text-navy">
  <?php if($section_headline) {
    echo '<h2>' . $section_headline . '</h2>';
  } ?>
  <div class="max-w-prose space-y-4 mt-4">
    <?= $section_intro; ?>
  </div>
  <?php if( have_rows('partner_logos') ): ?>
	<div class="grid grid-cols-1 md:flex gap-8 lg:gap-x-20 mt-12 justify-between items-center">
    <?php while( have_rows('partner_logos') ): the_row();
      $image = get_sub_field('partner_image');
      $link = get_sub_field('partner_link');
      if($link) {
        $link_url = $link['url'];
        $link_target = $link['target'] ? $link['target'] : '_self';
      }
    ?>
		<a href="<?= esc_url($link_url); ?>" target="<?= esc_attr($link_target); ?>" class="w-auto">
        <?php if($image) {
          echo wp_get_attachment_image( $image, ['300', '60'], '', ['class' => 'mx-auto'] );
        } ?>
    </a>
    <?php endwhile; ?>
	</div>
  <?php endif; ?>
  <?php if($section_link) {
    get_template_part( 'template-parts/partials/block-section-link', null, array(
      'data' => array(
      'link_url' => $section_link_url,
      'link_target' => $section_link_target,
      'link_title' => $section_link_title
      )
    ) );
  } ?>
</div>