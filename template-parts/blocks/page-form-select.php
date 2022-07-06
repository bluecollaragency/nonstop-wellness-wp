<?php
	$header = get_field('section_header');
	$intro = get_field('section_intro_text');
	$placeholder = get_field('form_select_placeholder');
?>
<?php if( have_rows('contact_form_select') ): ?>
<div class="block-page-form-select max-w-screen-sm mx-auto px-8 lg:px-4">
  <div x-data="{ formselect: '' }">
		<?php if( $header or $intro ): ?>
			<div class="text-center space-y-4 mb-8 intro-text">
			<?php if($header): ?>	
				<h2 class="text-3xl lg:text-6xl" id="contactLabel"><?= esc_html($header); ?></h2>
			<?php endif; ?>
			<?php if($intro): ?>	
				<?= $intro; ?>
			<?php endif; ?>
			</div>
		<?php endif; ?>
    <select 
			name="" 
			id="" 
			class="w-full rounded-2xl border-none outline-none focus:ring-gray-300 px-4 py-3 cursor-pointer"
			x-model="formselect"
			aria-labelledby="contactLabel"
			>
			<option value="" disabled><?= esc_html($placeholder); ?></option>
      <?php while( have_rows('contact_form_select') ): the_row(); 
        $form_name = get_sub_field('form_name');
      ?>
	    <option><?= esc_html($form_name); ?></option>
      <?php endwhile; ?>
	  </select>
    <?php while( have_rows('contact_form_select') ): the_row(); 
        $form_name = get_sub_field('form_name');
        $form_content = get_sub_field('form_content');
    ?>
		<div 
			x-show="formselect === '<?= $form_name; ?>'"
			class="form-panel mt-6 pt-4 border-t-gray-200 border-t"
			>
			<?= $form_content; ?>
		</div>
    <?php endwhile; ?>
  </div>
</div>
<?php endif; ?>