<h3 class="font-semibold text-navy"><?= get_sub_field('title'); ?></h3>
<?php if( have_rows('links') ): ?>
	<ul class="flex flex-col gap-y-2 mt-2 text-sm">
		<?php while( have_rows('links') ): the_row();
			$link = get_sub_field('link');
			if ($link) {
				$link_url = $link['url'];
				$link_title = $link['title'];
				$link_target = $link['target'] ? $link['target'] : '_self';
			}
			?>
			<li>
				<a class="inline-flex transition-all text-navy underline-offset-4 hover:text-navy/90 hover:underline" href="<?= esc_url( $link_url ); ?>" target="<?= esc_attr( $link_target ); ?>"><?= esc_html( $link_title ); ?></a>
			</li>
		<?php endwhile; ?>
	</ul>
<?php endif; ?>