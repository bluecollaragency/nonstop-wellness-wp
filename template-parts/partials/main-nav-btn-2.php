<?php 
  $main_nav_btn_2 = get_field('main_nav_button_2', 'nav_menu_3');
  if( $main_nav_btn_2 ){
    $mnb_url_2    = $main_nav_btn_2['url'];
    $mnb_title_2  = $main_nav_btn_2['title'];
    $mnb_target_2 = $main_nav_btn_2['target'] ? $main_nav_btn_2['target'] : '_self';
  }
  if( $main_nav_btn_2 ): ?>
    <a href="<?= esc_url($mnb_url_2); ?>" target="<?= esc_attr($mnb_target_2); ?>" class="btn bg-primary"><?= esc_html($mnb_title_2); ?></a>
<?php endif; ?>