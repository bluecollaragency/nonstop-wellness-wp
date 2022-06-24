<?php
/**
 * Page Benefits Grid
 */
 $section_headline = get_field('section_headline');
 $grid_items = 'grid_items';
 $section_link = get_field('section_link');
  if( $section_link ) { 
    $link_url = $section_link['url'];
    $link_title = $section_link['title'];
    $link_target = $section_link['target'] ? $section_link['target'] : '_self';
  }
?>
<div class="container mx-auto px-8 lg:px-4">
  <?php if($section_headline) {
    echo '<h2>' . $section_headline . '</h2>';
  } ?>
  
  <?php if( have_rows($grid_items) ): ?>
    <div class="grid md:grid-cols-2 mt-20 gap-x-10 gap-y-24">
      <?php while( have_rows($grid_items) ): the_row(); 
        $image = get_sub_field('image');
        $content = get_sub_field('content');
        if($content) {
          $headline = $content['headline'];
          $copy = $content['copy'];
        }
        ?>
        <div class="lg:flex items-center gap-12">
          <div class="bg-white p-4 md:p-12 rounded-lg md:rounded-4xl inline-flex justify-center items-center flex-none">
            <div class="w-16">
              <?php if($image) {
                echo wp_get_attachment_image( $image, 'thumbnail', '', ['class' => 'w-full h-auto'] );
              } ?>
            </div>
            
          </div>
          <div class="shrink my-4 space-y-4">
            <h3 class="font-bold md:text-2xl">
              <?= esc_html($headline); ?>
            </h3>
            <?= $copy; ?>
          </div>
        </div>
      <?php endwhile; ?>		
    </div>
  <?php endif; ?>
  <?php if($section_link) {
    get_template_part( 'template-parts/partials/block-section-link', null, array(
      'data' => array(
      'link_url' => $link_url,
      'link_target' => $link_target,
      'link_title' => $link_title
      )
    ) );
  } ?>
</div>