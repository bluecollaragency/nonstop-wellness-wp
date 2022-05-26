<?php
/**
 * Page Text Block Template
 */
$copy = get_field('copy') ?: 'Your text goes here';
?>
<div class="page-text-block container mx-auto px-8 lg:px-4">
  <div class="max-w-prose mx-auto space-y-4">
    <?= $copy; ?>
  </div>
</div>