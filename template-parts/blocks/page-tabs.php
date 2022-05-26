<?php if( have_rows('page_tabs') ): ?>
<div class="relative">
  <div class="container mx-auto px-8 lg:px-4">
    <div class="text-center">
      <h2>How You Benefit</h2>
      <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula</p>
    </div>
    <div  
      x-data="{
        selectedId: null,
        init() {
          // Set the first available tab on the page on page load.
          this.$nextTick(() <?= esc_attr('=>');?> this.select(this.$id('tab', 1)))
        },
        select(id) {
          this.selectedId = id
        },
        isSelected(id) {
          return this.selectedId === id
        },
        whichChild(el, parent) {
          return Array.from(parent.children).indexOf(el) + 1
        }
      }"
      x-id="['tab']"
      class="page-tabs"
      >
      <ul
        x-ref="tablist"
        @keydown.right.prevent.stop="$focus.wrap().next()"
        @keydown.home.prevent.stop="$focus.first()"
        @keydown.page-up.prevent.stop="$focus.first()"
        @keydown.left.prevent.stop="$focus.wrap().prev()"
        @keydown.end.prevent.stop="$focus.last()"
        @keydown.page-down.prevent.stop="$focus.last()"
        role="tablist"
        class="tablist 
          w-full 
          max-w-screen-md
          flex 
          items-center 
          justify-center 
          space-x-4
          mx-auto"
        >
        <!-- Tab -->
        <?php while( have_rows('page_tabs') ): the_row(); 
          $tab_title = get_sub_field('tab_title');
          ?>
          <li class="flex-1">
            <button
              :id="$id('tab', whichChild($el.parentElement, $refs.tablist))"
              @click="select($el.id)"
              @mousedown.prevent
              @focus="select($el.id)"
              type="button"
              :tabindex="isSelected($el.id) ? 0 : -1"
              :aria-selected="isSelected($el.id)"
              :class="isSelected($el.id) ? 'border-b-primary text-dark' : 'border-b-[#D6DCE9] text-gray-400'"
              class="w-full font-semibold border-b-2 pb-3 hover:border-b-primary  hover:text-dark"
              role="tab"
            ><?= esc_html( $tab_title ); ?></button>
          </li>
        <?php endwhile; ?>
      </ul>
      <div role="tabpanels" class="">
        <?php while( have_rows('page_tabs') ): the_row(); 
          $tab_content = get_sub_field('tab_content');
          ?>
          <!-- Panel -->
          <section
            x-show="isSelected($id('tab', whichChild($el, $el.parentElement)))"
            :aria-labelledby="$id('tab', whichChild($el, $el.parentElement))"
            role="tabpanel"
            class="p-8"
            >
            <?= $tab_content; ?>
          </section>
        <?php endwhile; ?>
      </div>
    </div>
  </div>
</div>
<?php endif; ?>