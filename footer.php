
</main>

<?php do_action( 'tailpress_content_end' ); ?>

</div>

<?php do_action( 'tailpress_content_after' ); ?>

<div 
	class="relative"
	>
	<div class="container bg-primary py-24 px-8 mx-auto rounded-4xl mt-32 relative z-10">
		<div class="max-w-prose lg:max-w-screen-md mx-auto text-center">
			<h2 class="text-center text-3xl lg:text-6xl">Contact us to learn more or request a quote</h2>
			<a href="#" class="btn-lg bg-dark text-white mx-auto mt-8">Contact us</a>
		</div>
	</div>
</div>

<footer id="colophon" class="site-footer bg-white pt-44 pb-20 -mt-24 rounded-t-4xl" role="contentinfo">
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
		<ul class="mx-auto flex mt-20 space-x-6 justify-center items-center">
			<li>1</li>
			<li>2</li>
			<li>3</li>
		</ul>
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
