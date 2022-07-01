<form method="get" id="mainSearchForm" action="<?php echo esc_url( home_url( '/' ) ); ?>" role="search" 
      class="
        w-full 
        max-w-full 
        bg-transparent 
        text-navy
        outline-none 
        border
        border-gray-200
        rounded-full
        focus:outline-none 
        focus:border-navy
        focus:ring-transparent
      "
  >
	<label for="s" class="sr-only"><?php esc_html_e('Search', 'tailpress'); ?></label>
	<div class="flex">
	  <input type="text" 
  		placeholder="<?php esc_attr_e( 'Search', 'tailpress' ); ?>" 
  		value="<?php the_search_query(); ?>" 
  		id="s" 
  		name="s" 
  		type="text"
  		x-ref="searchInput"
  		class="
      w-full 
        max-w-full 
        bg-transparent 
        text-navy
        placeholder-gray-300
        outline-none 
        border-none
        focus:outline-none 
        focus:border-navy
        focus:text-navy
        focus:placeholder-navy
        focus:ring-transparent
      "
    >
    <button type="submit" id="searchsubmit" class="btn bg-primary">Search</button>
	</div>
</form>