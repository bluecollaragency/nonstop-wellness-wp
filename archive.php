<?php 

$bg_color = get_field('background_color');
$content = get_field('content');

get_header(); ?>

<div 
  class="
    hero-text-only container py-24 mx-auto px-8 rounded-4xl text-center bg-watermark bg-no-repeat bg-right bg-secondary
  "
>
  <div class="hero-text-content">
    <h1><?= get_the_archive_title(); ?></h1>
  </div>
  <?php if( have_rows( 'buttons' ) ): ?>
  <div class="hero-text-buttons flex flex-row flex-wrap gap-x-8 mx-auto justify-center mt-6">
    <?php while( have_rows( 'buttons' ) ): the_row();
      $button = get_sub_field('button');
      $target = $button['target'] ? $button['target'] : '_self';
      ?>
      <a href="<?= esc_url($button['url']); ?>" target="<?= esc_attr($target); ?>" class="btn-lg"><?= esc_html($button['title']); ?></a>
    <?php endwhile; ?>
  </div>
  <?php endif; ?>
</div>
<div class="container px-8 lg:px-4 mx-auto pt-16 archive">
	<div class="flex justify-end items-end flex-wrap space-y-4">
		<div class="w-full lg:w-1/3 lg:pl-4 text-sm">
			<span class="block text-sm mb-4">Search:</span>
			<?php get_search_form(); ?>
		</div>
	</div>
	<?php if ( have_posts() ) : ?>
    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-24">
		<?php
		while ( have_posts() ) :
			the_post();
			?>

			<?php get_template_part( 'template-parts/content-archive' ); ?>

		<?php endwhile; ?>
    </div>
	<?php endif; ?>
	
	<div class="custom-archive-nav mt-24">
	<?php the_posts_pagination(array(
		'mid_size' => 2,
		'prev_text' => __('Prev', 'tailpress'),
		'next_text'	=> __('Next', 'tailpress')
	)); ?>
	</div>

</div>
<?php 
	get_template_part( 'template-parts/blocks/page-end', null, array(
		'last_block'	=> true,
		'headline'	=> 'Contact us to learn more or request a quote',
		'headline_size'	=> 'lg',
		'button'	=> true,
		'button_title'	=> 'Contact Us'
	)
); ?>
<?php
get_footer();
