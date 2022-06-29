
</main>

<?php do_action( 'tailpress_content_end' ); ?>

</div>

<?php do_action( 'tailpress_content_after' ); ?>

<footer 
	id="colophon" 
	class="
		site-footer 
		bg-white 
		pt-20 
		pb-20  
		rounded-t-4xl
	" 
	role="contentinfo"
	>
	<?php do_action( 'tailpress_footer' ); ?>
	<div class="container px-8 lg:px-4 mx-auto">
		<?php	
			$footer_logo = get_field('footer_logo', 'option');
			if($footer_logo) {
				echo '<div class="text-center">'.'<a href="'.home_url('/').'" class="mx-auto text-center inline-block">'.wp_get_attachment_image( $footer_logo, 'full', '', ['class' => 'mx-auto'] ).'</a></div>';
			}
			?>
		<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mt-20 gap-8">
			<div>
				<?php if( have_rows('footer_column_1', 'option') ):
					while( have_rows('footer_column_1', 'option') ): the_row(); ?>
					<?php get_template_part( 'template-parts/partials/footer-nav-col' ); ?>
				<?php endwhile; endif; ?>
			</div>
			<div>
				<?php if( have_rows('footer_column_2', 'option') ):
					while( have_rows('footer_column_2', 'option') ): the_row(); ?>
					<?php get_template_part( 'template-parts/partials/footer-nav-col' ); ?>
				<?php endwhile; endif; ?>
			</div>
			<div>
				<?php if( have_rows('footer_column_3', 'option') ):
					while( have_rows('footer_column_3', 'option') ): the_row(); ?>
					<?php get_template_part( 'template-parts/partials/footer-nav-col' ); ?>
				<?php endwhile; endif; ?>
			</div>
			<div>
				<?php if( have_rows('footer_column_4', 'option') ):
					while( have_rows('footer_column_4', 'option') ): the_row(); ?>
					<?php get_template_part( 'template-parts/partials/footer-nav-col' ); ?>
				<?php endwhile; endif; ?>
			</div>
			<div>
				<?php if( have_rows('footer_column_5', 'option') ):
					while( have_rows('footer_column_5', 'option') ): the_row(); ?>
					<?php get_template_part( 'template-parts/partials/footer-nav-col' ); ?>
				<?php endwhile; endif; ?>
			</div>
			<div>
				<?php if( have_rows('footer_column_6', 'option') ):
					while( have_rows('footer_column_6', 'option') ): the_row(); ?>
					<?php get_template_part( 'template-parts/partials/footer-nav-col' ); ?>
				<?php endwhile; endif; ?>
			</div>
		</div>

		<?php if( have_rows('footer_social_icons', 'option') ): ?>
		<ul class="mx-auto flex mt-20 space-x-6 justify-center items-center">
			<?php while( have_rows('footer_social_icons', 'option') ): the_row();
				$icon = get_sub_field('social_icon');
				$link = get_sub_field('social_link');
				if( $link ) {
					$link_url = $link['url'];
					$link_title = $link['title'];
				}
				?>
				<li>
					<a href="<?= esc_url( $link_url ); ?>" class="rounded-full bg-navy w-10 h-10 flex items-center justify-center text-white text-lg transition-all hover:brightness-90" target="_blank" rel="noopener">
						<i class="<?= esc_html( $icon ); ?>" aria-hidden="true"></i><span class="sr-only"><?= esc_html( $link_title ); ?></span>
					</a>
				</li>
			<?php endwhile; ?>
		</ul>
		<?php endif; ?>
		<div class="text-center mt-8 text-xs">
			&copy; Copyright <?php echo date_i18n( 'Y' );?> <?= the_field('copyright_text', 'option'); ?> <span  class="font-semibold"><a href="#">Terms & Conditions</a> • <a href="#">Privacy Policy</a></span>
		</div>
	</div>
</footer>

</div>

<?php wp_footer(); ?>
<?php get_template_part( 'template-parts/partials/back-to-top' ); ?>
</body>
</html>
