<?php 
  $main_nav_btn_1 = get_field('main_nav_button_1', 'nav_menu_3');
  if( $main_nav_btn_1 ){
    $mnb_url    = $main_nav_btn_1['url'];
    $mnb_title  = $main_nav_btn_1['title'];
    $mnb_target = $main_nav_btn_1['target'] ? $main_nav_btn_1['target'] : '_self';
  }
  if( $main_nav_btn_1 ): ?>
    <a href="<?= esc_url($mnb_url); ?>" target="<?= esc_attr($mnb_target); ?>" class="btn bg-white"><?= esc_html($mnb_title); ?></a>
<?php endif; ?>