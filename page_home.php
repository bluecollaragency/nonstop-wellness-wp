<?php 
/* Template Name: Home page template */

get_header(); ?>

<?php the_content(); ?>

<div class="
	overflow-hidden
	relative 
	bg-secondary 
	lg:bg-transparent  
	z-10 
	rounded-4xl
	lg:rounded-none
	"
	>
	<div class="
		container 
		mx-auto 
		px-8 
		lg:px-4 
		bg-secondary 
		z-10 
		rounded-b-4xl 
		lg:rounded-tl-4xl 
		h-full 
		flex 
		items-end 
		lg:items-center 
		overflow-visible
		
		before:block 
		before:bg-secondary 
		before:absolute 
		before:right-0 
		before:top-0 
		before:w-full 
		lg:before:w-1/2 
		before:h-full 
		before:z-0 
		before:rounded-4xl 
		lg:before:rounded-none
		before:bg-watermark  
		before:bg-right-bottom 
		before:bg-no-repeat 
		before:bg-contain">
		<div class="grid lg:grid-cols-12 gap-12 py-16 lg:py-44 items-center z-10">
			<div class="lg:col-span-6 text-center">
				<img src="//via.placeholder.com/410x410" alt="" class="mx-auto rounded-4xl">
			</div>
			<div class="lg:col-span-6 xl:col-span-5">
				<h2 class="text-4xl md:text-4xl font-bold tracking-[0.01em]">Brokers can bring a competitive advantage to your renewals and win new business</h2>
				<p class="mt-4 md:mt-6">Our employer-sponsored group health insurance solution combines a High-Deductible Health Plan (HDHP) with a Medical Expense Reimbursement Program (MERP) that helps your clients get more bang for their health insurance buck.</p>
				<a href="#" class="btn-lg bg-dark text-white mt-6">Learn how to save</a>
			</div>
		</div>
	</div>
</div>

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

<div>
	<div class="container mx-auto px-8 lg:px-4 mt-40">
		<div class="grid grid-cols-12 rounded-[40px] px-8 lg:px-12">
			<div class="col-start-1 xl:col-start-2 col-end-12 md:col-end-6 lg:col-end-6">
				<h2>Our mission drives our service</h2>
			</div>
		</div>
	</div>
	<div class="container mx-auto px-8 lg:px-4">
		<div class="grid lg:grid-cols-12 xl:grid-cols-12 mt-4 gap-y-8 gap-x-6 items-center relative rounded-[40px] px-8 lg:px-12">
			<div class="order-2 lg:order-1 col-start-1 xl:col-start-2 lg:col-end-6 xl:col-end-6 lg:col-span-6 xl:col-span-5 overflow-visible">
				<p class="">The Nonstop team takes immense pride in our level of customer service and the ability to develop strong trusting relationships with our clients.</p>
				<a href="#" class="btn-lg bg-dark text-white mt-6">Learn about us</a>
				<p class="mt-12">A healthy community is a thriving one. Early access and preventative care is key to driving the wellbeing of our communities. Everyone deserves equal access to comprehensive health coverage.</p>
			</div>
			<div class="order-1 lg:order-2 lg:col-start-7 xl:col-start-7 lg:col-span-6 xl:col-span-6 relative">
				<img 
					src="//via.placeholder.com/644x470" 
					alt="" 
					class="mx-auto rounded-4xl w-full h-auto"
				>
			</div>
		</div>
	</div>
</div>

<div class="container mx-auto px-8 lg:px-4 mt-24">
	<div class="grid lg:grid-cols-12 mt-4 gap-y-8 gap-x-6 items-center relative bg-white rounded-[40px] py-12 px-8 lg:px-12">
		<div class="relative col-start-1 col-end-12 lg:col-end-7 overflow-visible">
			<img src="//via.placeholder.com/644x470" alt="" class="mx-auto rounded-4xl w-full h-auto">
		</div>
		<div class="col-start-1 lg:col-start-8 xl:col-start-8 col-end-12 md:col-end-12 lg:col-span-5 xl:col-span-4">
			<p>Nothing is greater than the power of human connection: no complicated automated phone system, no 45-minute hold for the next agent to get the answers you need.</p>
		</div>
	</div>
</div>

<div class="container mx-auto px-8 lg:px-4 mt-24">
	<div class="grid lg:grid-cols-12 xl:grid-cols-12 mt-4 gap-y-8 gap-x-6 items-center relative rounded-[40px] py-12 px-8 lg:px-12">
		<div class="order-2 lg:order-1 col-start-1 xl:col-start-2 lg:col-end-6 xl:col-end-6 lg:col-span-6 xl:col-span-5 overflow-visible">
			<p>A healthy community is a thriving one. Early access and preventative care is key to driving the wellbeing of our communities. Everyone deserves equal access to comprehensive health coverage.</p>
		</div>
		<div class="order-1 lg:order-2 lg:col-start-7 xl:col-start-7 lg:col-span-6 xl:col-span-6 relative">
			<img 
				src="//via.placeholder.com/644x470" 
				alt="" 
				class="mx-auto rounded-4xl w-full h-auto"
			>
		</div>
	</div>
</div>

<div class="relative overflow-hidden mt-32">
	<div class="container mx-auto px-8 lg:px-4">
		<h2>Nonstop Toolbox</h2>
		<p class="max-w-prose mt-4">Explore expert insights, tips, tools and articles created to help your organization navigate the healthcare landscape.</p>
		<div class="glide blog-slider mt-12">
			<div data-glide-el="track" class="glide__track overflow-visible">
				<ul class="glide__slides">
					<li class="glide__slide bg-white rounded-4xl">
						<img src="//via.placeholder.com/460x460" alt="" class="block rounded-t-4xl">
						<div class="block p-10">
							<h3 class="text-xl font-bold leading-tight">Fermentum Malesuada Ultricies Purus</h3>
							<p class="mt-3">Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
						</div>
					</li>
					<li class="glide__slide bg-white rounded-4xl">
						<img src="//via.placeholder.com/460x460" alt="" class="block rounded-t-4xl">
						<div class="block p-10">
							<h3 class="text-xl font-bold leading-tight">Fermentum Malesuada Ultricies Purus</h3>
							<p class="mt-3">Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
						</div>
					</li>
					<li class="glide__slide bg-white rounded-4xl">
						<img src="//via.placeholder.com/460x460" alt="" class="block rounded-t-4xl">
						<div class="block p-10">
							<h3 class="text-xl font-bold leading-tight">Fermentum Malesuada Ultricies Purus</h3>
							<p class="mt-3">Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
						</div>
					</li>
					<li class="glide__slide bg-white rounded-4xl">
						<img src="//via.placeholder.com/460x460" alt="" class="block rounded-t-4xl">
						<div class="block p-10">
							<h3 class="text-xl font-bold leading-tight">Fermentum Malesuada Ultricies Purus</h3>
							<p class="mt-3">Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
						</div>
					</li>
					<li class="glide__slide bg-white rounded-4xl">
						<img src="//via.placeholder.com/460x460" alt="" class="block rounded-t-4xl">
						<div class="block p-10">
							<h3 class="text-xl font-bold leading-tight">Fermentum Malesuada Ultricies Purus</h3>
							<p class="mt-3">Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
						</div>
					</li>
					<li class="glide__slide bg-white rounded-4xl">
						<img src="//via.placeholder.com/460x460" alt="" class="block rounded-t-4xl">
						<div class="block p-10">
							<h3 class="text-xl font-bold leading-tight">Fermentum Malesuada Ultricies Purus</h3>
							<p class="mt-3">Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
						</div>
					</li>
				</ul>
			</div>
			<?php get_template_part( 'template-parts/partials/slider-next-btn-round' ); ?>
			<div class="flex justify-between mt-12">
				<div>
					<div class="glide__bullets flex gap-4" data-glide-el="controls[nav]">
						<button class="glide__bullet" data-glide-dir="=0"></button>
						<button class="glide__bullet" data-glide-dir="=1"></button>
						<button class="glide__bullet" data-glide-dir="=2"></button>
						<button class="glide__bullet" data-glide-dir="=3"></button>
						<button class="glide__bullet" data-glide-dir="=4"></button>
						<button class="glide__bullet" data-glide-dir="=5"></button>
					</div>
				</div>
				<div>Read our blog</div>
			</div>
		</div>
		
	</div>
</div>

<div class="container mx-auto px-8 lg:px-4 mt-32">
	<h2>Our Partners</h2>
	<p class="max-w-prose mt-4">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
	<div class="grid grid-cols-1 md:flex gap-8 lg:gap-x-20 mt-12 justify-between items-center">
		<a href=""><img src="//via.placeholder.com/302x60" alt="" class="mx-auto"></a>
		<a href=""><img src="//via.placeholder.com/127x50" alt="" class="mx-auto"></a>
		<a href=""><img src="//via.placeholder.com/240x54" alt="" class="mx-auto"></a>
		<a href=""><img src="//via.placeholder.com/62x55" alt="" class="mx-auto"></a>
		<a href=""><img src="//via.placeholder.com/237x52" alt="" class="mx-auto"></a>
	</div>
	<div class="flex justify-end mt-12">
			<div>Read our blog</div>
		</div>
</div>

<div 
	class="relative after:w-full
    after:bg-white
    after:rounded-4xl
    after:rounded-b-none
    after:absolute
    after:h-32
    after:-bottom-8
    after:left-0"
	>
	<div class="container bg-primary py-24 px-8 mx-auto rounded-4xl mt-32 relative z-10">
		<div class="max-w-prose lg:max-w-screen-md mx-auto text-center">
			<h2 class="text-center text-3xl lg:text-6xl">Contact us to learn more or request a quote</h2>
			<a href="#" class="btn-lg bg-dark text-white mx-auto mt-8">Contact us</a>
		</div>
	</div>
</div>

<?php
get_footer();
