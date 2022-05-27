<?php

  $main_nav = (new \Log1x\Navi\Navi())->build('primary');
  
?>
<div class="relative w-full text-dark bg-light items-center flex">
	<div 
    x-data="{ open: false }" 
    x-effect="document.body.classList.toggle('mobile-nav-open', open)" 
    class="relative flex flex-col w-full max-w-screen-2xl mx-auto lg:items-center lg:justify-start lg:flex-row"
    >
		<div class="relative p-4 flex flex-row items-center justify-between h-[112px]">
      <?php if ( has_custom_logo() ) { ?>
        <?php the_custom_logo(); ?>
			<?php } else { ?>
				<div class="text-lg uppercase">
					<a href="<?php echo get_bloginfo( 'url' ); ?>" class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
						<?php echo get_bloginfo( 'name' ); ?>
					</a>
				</div>
      <?php } ?>
			<button class="lg:hidden rounded-lg focus:outline-none focus:shadow-outline" @click="open = !open" @keyup.escape.window="open = false">
				<svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
					<path x-show="!open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
					<path x-show="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
				</svg>
			</button>
		</div>
    <?php if ( $main_nav->isNotEmpty() ) : ?>
		<div class="relative">
			<nav x-transition :class="{'flex': open, 'hidden': !open}" class="main-nav-nav absolute lg:relative flex-col flex-grow hidden lg:flex lg:justify-end lg:flex-row bg-light w-full h-fullnav lg:h-auto overflow-auto lg:overflow-visible">
        <?php foreach ($main_nav->toArray() as $nav_item) : ?>
          <?php if( $nav_item->children ): ?>
            <div
              x-data="{
                open: false,
                  toggle() {
                      if (this.open) {
                        return this.close()
                      }
          
                      this.$refs.button.focus()
          
                      this.open = true
                  },
                  close(focusAfter) {
                      if (! this.open) return
          
                      this.open = false
          
                      focusAfter && focusAfter.focus()
                  }
              }"
              x-on:keydown.escape.prevent.stop="close($refs.button)"
              x-on:focusin.window="! $refs.panel.contains($event.target) && close()"
              x-id="['dropdown-button']"
              class="relative px-4 lg:px-0"	
              >
              <button 
                x-ref="button" 
                x-on:click="toggle()"
                :aria-expanded="open"
                :aria-controls="$id('dropdown-button')"
                type="button"
                class="item-level-1 flex flex-row items-center w-full px-4 py-2 mt-2 font-semibold text-left text-2xl lg:text-base bg-transparent rounded-lg lg:w-auto lg:inline lg:mt-0 lg:ml-4  hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline <?= $item->classes; ?>"
                >
                  <span><?= $nav_item->label ?></span>
                  <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': open, 'rotate-0': !open}" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform lg:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
              <div
                x-ref="panel"
                x-show="open"
                x-transition.origin.top.left
                x-on:click.outside="close($refs.button)"
                :id="$id('dropdown-button')"
                style="display: none;"
                class="relative lg:absolute left-0 w-full lg:w-80"
                >
                <div class="bg-transparent lg:bg-white rounded-none lg:rounded-2xl lg:shadow-md overflow-hidden mt-2">
                  <?php foreach ($nav_item->children as $child_nav_item) : ?>
                    <a 
                      role="menuitem"
                      href="<?= $child_nav_item->url ?>" 
                      aria-label="<?= $child_nav_item->label ?> link"
                      class="flex flex-row items-center lg:items-start px-4 py-2 mt-2 text-sm font-semibold bg-transparent lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline <?= $child_nav_item->classes; ?> <?= $child_nav_item->active ? 'current-item' : ''; ?>"
                      > 
                        <?php if (get_field('nav_item_icon', $child_nav_item->id)) {
                          echo '<span class="inline mr-2">'.get_field('nav_item_icon', $child_nav_item->id).'</span>';
                        } ?>
                        <div>
                          <span class="font-semibold"><?= $child_nav_item->label ?></span>
                          <?php if ($child_nav_item->description) {
                          echo '<p class="hidden lg:block text-xs font-medium">'.$child_nav_item->description.'</p>';
                          } ?>
                        </div>
                    </a>
                  <?php endforeach; ?>
                </div>
              </div>
            </div>
          <?php else :?>
            <a 
              role="menuitem"
              href="<?= $nav_item->url ?>"
              class="item-level-1 px-4 py-2 mt-2 mx-4 lg:mx-0 font-semibold bg-transparent rounded-lg lg:mt-0 lg:ml-4 text-2xl lg:text-base hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" 
              aria-label="<?= $nav_item->label ?> link"
              >
              <?= $nav_item->label ?>
            </a>
          <?php endif; ?>
        <?php endforeach; ?>
        <div class="flex flex-col lg:hidden relative mx-auto gap-4 px-8 w-full mt-auto py-8">
          <?php get_template_part( 'template-parts/partials/main-nav-btn-1' ); ?>
          <?php get_template_part( 'template-parts/partials/main-nav-btn-2' ); ?>
        </div>
			</nav>
		</div>
    <?php endif; ?>
    <div class="hidden lg:flex relative ml-auto gap-4 px-4">
      <?php get_template_part( 'template-parts/partials/main-nav-btn-1' ); ?>
      <?php get_template_part( 'template-parts/partials/main-nav-btn-2' ); ?>
    </div>

	</div>
</div>