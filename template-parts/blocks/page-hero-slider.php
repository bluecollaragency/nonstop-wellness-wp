<?php
/**
 * Page Hero Slider
 */
?>
<div class="glide hero-slider z-10">
	<div class="absolute w-full h-full top-0 left-0 right-0 mx-auto">
		<div class="container relative mx-auto h-full">
			<div class="absolute right-0 w-20 h-20 rounded-full transform -translate-y-1/2 top-1/2 z-20 hidden lg:block" data-glide-el="controls">
				<button class="w-full h-full rounded-full flex justify-center items-center text-white" data-glide-dir="<?= esc_attr('>');?>">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="44" fill="none" viewBox="0 0 35 64" class="fill-current text-white">
            <path fill-rule="evenodd" d="M29.172 32 .586 3.414 3.414.586 34.828 32 3.414 63.414.586 60.586 29.172 32Z" clip-rule="evenodd"/>
          </svg>
        </button>
			</div>
			<div class="absolute left-0 right-0 mx-auto w-full flex lg:hidden items-center justify-center bottom-12">
				<div class="glide__bullets flex gap-4 z-20" data-glide-el="controls[nav]">
					<button class="glide__bullet" data-glide-dir="=0"></button>
					<button class="glide__bullet" data-glide-dir="=1"></button>
					<button class="glide__bullet" data-glide-dir="=2"></button>
				</div>
			</div>
		</div>
	</div>
	<div data-glide-el="track" class="glide__track">
		<ul class="glide__slides">
			<li class="glide__slide">
				<div class="relative bg-[#52D3E5] lg:bg-transparent rounded-4xl lg:rounded-none z-20">
					<div class="container px-8 lg:px-4 mx-auto relative z-20 h-hero min-h-[400px] lg:min-h-[600px] flex lg:items-center">
						<div class="w-full lg:w-7/12 lg:ml-[8.33%] py-12 lg:py-0 text-navy">
							<h1 class="text-3xl lg:text-6xl font-bold">Lower premiums.<br/>Accesible benefits.<br/>Better health.</h1>
							<p class="mt-6 lg:text-xl font-semibold">Provide the best health insurance for less.</p>
							<a href="#" class="btn-lg bg-navy text-white mt-8">See our services</a>
						</div>
					</div>
					<div class="w-full lg:w-[77%] h-full absolute right-0 bottom-0 lg:top-0 z-10 rounded-4xl lg:rounded-r-none">
						<img src="<?= get_template_directory_uri();?>/img/hero-placeholder.jpg" alt="" class="w-full h-full object-cover rounded-4xl lg:rounded-r-none">
					</div>
				</div>
			</li>
			<li class="glide__slide">
				<div class="relative bg-[#52D3E5] lg:bg-transparent rounded-4xl lg:rounded-none z-20">
					<div class="container px-8 lg:px-4 mx-auto relative z-20 h-hero min-h-[400px] lg:min-h-[600px] flex lg:items-center">
						<div class="w-full lg:w-7/12 lg:ml-[8.33%] pt-6 pb-12 lg:py-0">
							<h1 class="text-3xl lg:text-6xl font-bold">Slide 2</h1>
							<p class="mt-6 lg:text-xl font-semibold">Provide the best health insurance for less.</p>
							<a href="#" class="btn-lg bg-dark text-white mt-8">See our services</a>
						</div>
					</div>
					<div class="w-full lg:w-[77%] h-full absolute right-0 bottom-0 lg:top-0 z-10 rounded-4xl lg:rounded-r-none">
						<img src="<?= get_template_directory_uri();?>/img/hero-placeholder.jpg" alt="" class="w-full h-full object-cover rounded-4xl lg:rounded-r-none">
					</div>
				</div>
			</li>
			<li class="glide__slide">
				<div class="relative bg-[#52D3E5] lg:bg-transparent rounded-4xl lg:rounded-none z-20">
					<div class="container px-8 lg:px-4 mx-auto relative z-20 h-hero min-h-[400px] lg:min-h-[600px] flex lg:items-center">
						<div class="w-full lg:w-7/12 lg:ml-[8.33%] pt-6 pb-12 lg:py-0">
							<h1 class="text-3xl lg:text-6xl font-bold">Slide 3</h1>
							<p class="mt-6 lg:text-xl font-semibold">Provide the best health insurance for less.</p>
							<a href="#" class="btn-lg bg-dark text-white mt-8">See our services</a>
						</div>
					</div>
					<div class="w-full lg:w-[77%] h-full absolute right-0 bottom-0 lg:top-0 z-10 rounded-4xl lg:rounded-r-none">
						<img src="<?= get_template_directory_uri();?>/img/hero-placeholder.jpg" alt="" class="w-full h-full object-cover rounded-4xl lg:rounded-r-none">
					</div>
				</div>
			</li>
		</ul>
	</div>
</div>