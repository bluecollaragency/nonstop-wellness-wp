<?php
/**
 * Page Block Custom HTML
 */
$custom_html = get_field('custom_html') ?: 'Your custom html goes here';
?>
<?= $custom_html; ?>