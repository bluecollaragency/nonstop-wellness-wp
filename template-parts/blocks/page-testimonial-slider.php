<?php
/**
 * Page Block Testimonial Slider
 */

?>
<div class="relative overflow-hidden pt-32">
	<div class="container mx-auto px-8 lg:px-4">
		<h2>What Our Customers Say</h2>
		<div class="glide testimonial-slider">
			<div class="flex mt-12 relative">
				<div class="w-full md:w-10/12 lg:w-2/3">
					<div data-glide-el="track" class="glide__track overflow-visible">
						<ul class="glide__slides">
							<li class="glide__slide bg-white rounded-4xl py-16 px-8 md:px-20 flex flex-wrap md:flex-nowrap gap-12 items-center">
								<div class="w-full md:w-[37.5%] text-center">
									<img src="//via.placeholder.com/170x64" alt="" class="mx-auto md:mx-0">
								</div>
								<div class="w-full md:w-[62.5%] text-center md:text-left">
									<p class="text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem velit magni ea ut repellendus accusantium, tempore omnis necessitatibus odio sequi qui nesciunt a maxime recusandae iusto modi voluptatum reprehenderit similique?</p>
									<p class="font-semibold mt-4 text-sm">Unity Health Care</p>
								</div>
							</li>
							<li class="glide__slide bg-white rounded-4xl py-16 px-8 md:px-20 flex flex-wrap md:flex-nowrap gap-12 items-center">
								<div class="w-full md:w-[37.5%] text-center">
									<img src="//via.placeholder.com/170x64" alt="" class="mx-auto md:mx-0">
								</div>
								<div class="w-full md:w-[62.5%] text-center md:text-left">
									<p class="text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem velit magni ea ut repellendus accusantium, tempore omnis necessitatibus odio sequi qui nesciunt a maxime recusandae iusto modi voluptatum reprehenderit similique?</p>
									<p class="font-semibold mt-4 text-sm">Unity Health Care</p>
								</div>
							</li>
							<li class="glide__slide bg-white rounded-4xl py-16 px-8 md:px-20 flex flex-wrap md:flex-nowrap gap-12 items-center">
								<div class="w-full md:w-[37.5%] text-center">
									<img src="//via.placeholder.com/170x64" alt="" class="mx-auto md:mx-0">
								</div>
								<div class="w-full md:w-[62.5%] text-center md:text-left">
									<p class="text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem velit magni ea ut repellendus accusantium, tempore omnis necessitatibus odio sequi qui nesciunt a maxime recusandae iusto modi voluptatum reprehenderit similique?</p>
									<p class="font-semibold mt-4 text-sm">Unity Health Care</p>
								</div>
							</li>
							<li class="glide__slide bg-white rounded-4xl py-16 px-8 md:px-20 flex flex-wrap md:flex-nowrap gap-12 items-center">
								<div class="w-full md:w-[37.5%] text-center">
									<img src="//via.placeholder.com/170x64" alt="" class="mx-auto md:mx-0">
								</div>
								<div class="w-full md:w-[62.5%] text-center md:text-left">
									<p class="text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem velit magni ea ut repellendus accusantium, tempore omnis necessitatibus odio sequi qui nesciunt a maxime recusandae iusto modi voluptatum reprehenderit similique?</p>
									<p class="font-semibold mt-4 text-sm">Unity Health Care</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<?php get_template_part( 'template-parts/partials/slider-next-btn-round' ); ?>
			</div>
			<div class="flex justify-between items-center mt-12">
				<div>
					<div class="glide__bullets flex gap-4" data-glide-el="controls[nav]">
						<button class="glide__bullet" data-glide-dir="=0"></button>
						<button class="glide__bullet" data-glide-dir="=1"></button>
						<button class="glide__bullet" data-glide-dir="=2"></button>
						<button class="glide__bullet" data-glide-dir="=3"></button>
					</div>
				</div>
				<div>Read more reviews</div>
			</div>
		</div>
	</div>
</div>