<?php get_header(); ?>

<div class="glide hero-slider z-10">
	<div data-glide-el="track" class="glide__track">
		<ul class="glide__slides">
			<li class="glide__slide">
				<div class="relative bg-[#52D3E5] lg:bg-transparent rounded-4xl lg:rounded-none z-20">
					<div class="container px-8 lg:px-4 mx-auto relative z-20 h-hero min-h-[400px] lg:min-h-[600px] flex lg:items-center">
						<div class="w-full lg:w-7/12 lg:ml-[8.33%] pt-6 pb-12 lg:py-0">
							<h1 class="text-3xl lg:text-6xl font-bold">Lower premiums.<br/>Accesible benefits.<br/>Better health.</h1>
							<p class="mt-6 lg:text-xl font-semibold">Provide the best health insurance for less.</p>
							<a href="#" class="btn-lg bg-dark text-white mt-8">See our services</a>
						</div>
					</div>
					<div class="w-full lg:w-[77%] h-full absolute right-0 bottom-0 lg:top-0 z-10 rounded-4xl lg:rounded-r-none">
						<img src="<?= get_template_directory_uri();?>/img/hero-placeholder.jpg" alt="" class="w-full h-full object-cover lg:rounded-l-4xl rounded-b-4xl lg:rounded-br-none">
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
						<img src="<?= get_template_directory_uri();?>/img/hero-placeholder.jpg" alt="" class="w-full h-full object-cover lg:rounded-l-4xl rounded-b-4xl lg:rounded-br-none">
					</div>
				</div>
			</li>
		</ul>
	</div>
</div>
<div class="
	relative 
	bg-primary 
	lg:bg-transparent 
	rounded-4xl 
	z-0
	bg-watermark 
	lg:bg-none 
	bg-right-bottom 
	bg-no-repeat 
	bg-contain

	after:bg-primary
	after:top-0
	after:h-1/2
	after:w-full
	after:transform
	after:-translate-y-full
	after:absolute
	after:block
	lg:after:hidden

	before:block 
	before:bg-primary 
	before:absolute 
	before:left-0 
	before:top-0 
	before:w-full 
	lg:before:w-1/2 
	before:h-8 
	lg:before:h-full 
	before:z-0">
	<div class="container relative mx-auto px-8 lg:px-4 lg:bg-primary z-10 rounded-b-4xl lg:rounded-r-4xl h-full flex items-end lg:items-center lg:bg-watermark bg-right-bottom bg-no-repeat bg-contain lg:-mt-12 xl:-mt-24">
		<div class="grid lg:grid-cols-12 gap-12 py-16 lg:py-48 items-center">
			<div class="lg:col-span-6">
				<img src="//via.placeholder.com/410x410" alt="" class="mx-auto rounded-4xl">
			</div>
			<div class="lg:col-span-5">
				<h2 class="text-2xl md:text-4xl font-bold tracking-[0.01em]">The cost of health insurance is crushing the american workforce – and their employers</h2>
				<p class="mt-4 md:mt-6">In the last 10 years, health insurance premiums have risen 55% and deductibles have risen 157%*. The result is employee health insurance that neither employers nor their employees can afford.</p>
			</div>
		</div>
	</div>
</div>

<div class="container mx-auto px-8 lg:px-4 py-36">
	<h2>Why choose Nonstop</h2>
	<div class="grid md:grid-cols-2 mt-20 gap-x-10 gap-y-24">

		<div class="lg:flex items-center gap-12">
			<div class="bg-white p-12 rounded-[32px] inline-flex justify-center items-center flex-none">
				<img src="//via.placeholder.com/60x60" alt="">
			</div>
			<div class="shrink my-4 space-y-4">
				<h3 class="font-bold md:text-2xl">First dollar coverage</h3>
				<p>Employees get first-dollar coverage, meaning that they can go to the doctor, get their prescriptions, without a financial burden.</p>
			</div>
		</div>
		<div class="lg:flex items-center gap-12">
			<div class="bg-white p-12 rounded-[32px] inline-flex justify-center items-center flex-none">
				<img src="//via.placeholder.com/60x60" alt="">
			</div>
			<div class="shrink my-4 space-y-4">
				<h3 class="font-bold md:text-2xl">First dollar coverage</h3>
				<p>Employees get first-dollar coverage, meaning that they can go to the doctor, get their prescriptions, without a financial burden.</p>
			</div>
		</div>
		<div class="lg:flex items-center gap-12">
			<div class="bg-white p-12 rounded-[32px] inline-flex justify-center items-center flex-none">
				<img src="//via.placeholder.com/60x60" alt="">
			</div>
			<div class="shrink my-4 space-y-4">
				<h3 class="font-bold md:text-2xl">First dollar coverage</h3>
				<p>Employees get first-dollar coverage, meaning that they can go to the doctor, get their prescriptions, without a financial burden.</p>
			</div>
		</div>
		<div class="lg:flex items-center gap-12">
			<div class="bg-white p-12 rounded-[32px] inline-flex justify-center items-center flex-none">
				<img src="//via.placeholder.com/60x60" alt="">
			</div>
			<div class="shrink my-4 space-y-4">
				<h3 class="font-bold md:text-2xl">First dollar coverage</h3>
				<p>Employees get first-dollar coverage, meaning that they can go to the doctor, get their prescriptions, without a financial burden.</p>
			</div>
		</div>

	</div>
	<div class="flex w-full justify-end mt-10">
		<a href="#" class="font-semibold">View all our benefits.</a>
	</div>
</div>

<div class="relative bg-secondary lg:bg-transparent rounded-4xl z-10 before:block before:bg-secondary before:absolute before:right-0 before:top-0 before:w-full lg:before:w-1/2 before:h-8 lg:before:h-full before:z-0 before:rounded-4xl lg:before:rounded-none">
	<div class="container relative mx-auto px-8 lg:px-4 bg-secondary z-10 rounded-b-4xl lg:rounded-tl-4xl h-full flex items-end lg:items-center">
		<div class="grid lg:grid-cols-12 gap-12 py-16 lg:py-44 items-center">
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
		<div class="grid grid-cols-12">
			<div class="col-start-1 xl:col-start-2 col-end-12 md:col-end-6 lg:col-end-6">
				<h2>Our mission drives our service</h2>
			</div>
		</div>
	</div>
	<div class="container mx-auto px-8 lg:px-4">
		<div class="grid grid-cols-12 mt-4 gap-y-16 gap-x-6 relative">
			<div class="col-start-1 xl:col-start-2 col-end-12 lg:col-end-6 overflow-visible">
				<p class="">The Nonstop team takes immense pride in our level of customer service and the ability to develop strong trusting relationships with our clients.</p>
				<a href="#" class="btn-lg bg-dark text-white mt-6">Learn about us</a>
				<p class="mt-12 xl:mt-20 hidden lg:block">A healthy community is a thriving one. Early access and preventative care is key to driving the wellbeing of our communities. Everyone deserves equal access to comprehensive health coverage.</p>
				<div class="absolute w-1/2 h-[2px] bg-primary hidden lg:flex items-center z-20 mt-4 after:right-0 after:absolute after:h-4 after:w-4 after:border-t-2 after:border-r-2 after:transform after:rotate-45 after:border-primary"></div>
			</div>
			<div class="relative col-start-1 lg:col-start-7 col-end-12 md:col-end-12">
				<img src="//via.placeholder.com/520x520" alt="" class="mx-auto rounded-4xl w-full h-auto">
				<p class="mt-8 block lg:hidden ml-12">A healthy community is a thriving one. Early access and preventative care is key to driving the wellbeing of our communities. Everyone deserves equal access to comprehensive health coverage.</p>			
				<div class="absolute h-1/2 bottom-0 w-[2px] bg-primary flex lg:hidden z-20 ml-7 after:mx-auto after:top-0 after:absolute after:h-3 after:w-3 after:border-t-2 after:border-l-2 after:transform after:rotate-45 after:border-primary after:-ml-[5px]"></div>
			</div>
		</div>
	</div>
</div>

<div class="container mx-auto px-8 lg:px-4 mt-24">
	<div class="grid lg:grid-cols-12 mt-4 gap-y-8 gap-x-6 items-center relative">
		<div class="relative col-start-1 xl:col-start-2 col-end-12 lg:col-end-7 overflow-visible">
			<img src="//via.placeholder.com/520x520" alt="" class="mx-auto rounded-4xl w-full h-auto">
		</div>
		<div class="col-start-1 lg:col-start-8 xl:col-start-8 col-end-12 md:col-end-12 lg:col-span-5 xl:col-span-4">
			<p class="lg:mt-12 ml-12 lg:ml-0">A healthy community is a thriving one. Early access and preventative care is key to driving the wellbeing of our communities. Everyone deserves equal access to comprehensive health coverage.</p>
			<div class="
				absolute 
				w-[2px] 
				lg:w-1/2 
				h-1/2 
				lg:h-[2px] 
				bottom-0 
				lg:bottom-auto 
				lg:right-0 
				bg-primary 
				flex 
				lg:items-center 
				z-20 
				lg:mr-[8.33%]
				ml-7 
				lg:ml-0 
				lg:mt-4 

				after:absolute
				lg:after:left-0 
				after:h-3 
				lg:after:h-4 
				after:w-3 
				lg:after:w-4 
				after:border-t-2 
				after:border-l-2 
				after:transform 
				after:rotate-45 
				lg:after:-rotate-45 
				after:border-primary 
				after:-ml-[5px] 
				lg:after:ml-0">
			</div>
		</div>
	</div>
</div>

<div class="container mx-auto px-8 lg:px-4 mt-24">
	<div class="grid lg:grid-cols-12 xl:grid-cols-12 mt-4 gap-y-8 gap-x-6 items-center relative">
		<!-- <div class="order-2 lg:order-1 col-start-1 xl:col-start-2 col-end-12 lg:col-end-6 overflow-visible"> -->
		<div class="order-2 lg:order-1 col-start-1 xl:col-start-2 lg:col-end-6 xl:col-end-6 lg:col-span-6 xl:col-span-5 overflow-visible">
			<p class="lg:mt-12 ml-12 lg:ml-0">A healthy community is a thriving one. Early access and preventative care is key to driving the wellbeing of our communities. Everyone deserves equal access to comprehensive health coverage.</p>
			<div class="
				absolute 
				w-[2px] 
				lg:w-1/2 
				h-1/2 
				lg:h-[2px] 
				bottom-0 
				lg:bottom-auto 
				lg:left-0 
				bg-primary 
				flex 
				lg:items-center 
				z-20 
				lg:ml-[8.33%]
				ml-7 
				lg:mt-4 

				after:absolute
				lg:after:right-0 
				after:h-3 
				lg:after:h-4 
				after:w-3 
				lg:after:w-4 
				after:border-t-2 
				after:border-l-2 
				lg:after:border-r-2 
				lg:after:border-l-0
				after:transform 
				after:rotate-45 
				after:border-primary 
				after:-ml-[5px] 
				lg:after:ml-0">
			</div>
		</div>
		<div class="order-1 lg:order-2 lg:col-start-7 xl:col-start-7 lg:col-span-6 xl:col-span-5">
			<img src="//via.placeholder.com/520x520" alt="" class="mx-auto rounded-4xl w-full h-auto">
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
	class="
		relative

		after:block
		after:absolute
		after:w-full
		after:h-24
		after:bg-white
		after:rounded-t-4xl
		after:bottom-0
		after:z-0
	"
	>
	<div class="container bg-primary py-24 px-8 mx-auto rounded-4xl mt-32 relative z-10">
		<div class="max-w-prose lg:max-w-screen-md mx-auto text-center">
			<h2 class="text-center text-3xl lg:text-6xl">Contact us to learn more or request a quote</h2>
			<a href="#" class="btn-lg bg-dark text-white mx-auto mt-8">Contact us</a>
		</div>
	</div>
</div>

<!-- 
<div class="container mx-auto my-8 pt-64">

	<?php if ( have_posts() ) : ?>
		<?php
		while ( have_posts() ) :
			the_post();
			?>

			<?php get_template_part( 'template-parts/content', get_post_format() ); ?>

		<?php endwhile; ?>

	<?php endif; ?>

</div>
		-->
<?php
get_footer();
