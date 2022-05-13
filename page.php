<?php get_header(); ?>

<div class="relative bg-[#52D3E5] lg:bg-transparent rounded-2xl lg:rounded-none z-20">
	<div class="container px-8 lg:px-4 mx-auto relative z-10 h-hero min-h-[400px] lg:min-h-[600px] flex lg:items-center">
		<div class="w-full lg:w-7/12 lg:ml-[8.33%] pt-6 pb-12 lg:py-0 flex flex-col">
			<h1 class="text-3xl lg:text-6xl font-bold">Lower premiums.<br/>Accesible benefits.<br/>Better health.</h1>
      <p class="mt-6 lg:text-xl font-semibold">Provide the best health insurance for less.</p>
			<span class="block mt-auto lg:mt-8"><a href="#" class="btn-lg bg-dark text-white">See our services</a></span>
		</div>
	</div>
	<div class="w-full lg:w-[77%] h-[70%] lg:h-full absolute right-0 bottom-0 lg:top-0 bg-red-200 z-0 rounded-2xl lg:rounded-r-none">
		<img src="<?= get_template_directory_uri();?>/img/hero-placeholder.jpg" alt="" class="w-full h-full object-cover lg:rounded-l-2xl rounded-b-2xl lg:rounded-br-none">
	</div>
</div>
<div class="relative bg-primary lg:bg-transparent before:block before:bg-primary before:absolute before:left-0 before:top-0 before:w-full lg:before:w-1/2 before:h-8 lg:before:h-full before:z-0 -mt-8 pt-8 lg:-mt-24 lg:pt-24 rounded-2xl z-10 lg:h-hero">
	<div class="container relative mx-auto px-8 lg:px-4 bg-primary z-10 rounded-b-2xl lg:rounded-br-2xl h-full flex items-end lg:items-center">
		<div class="grid lg:grid-cols-12 gap-12 py-8 items-center">
			<div class="lg:col-span-6">
				<img src="//via.placeholder.com/410x410" alt="">
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

<div class="relative bg-secondary lg:bg-transparent rounded-2xl z-10 before:block before:bg-secondary before:absolute before:right-0 before:top-0 before:w-full lg:before:w-1/2 before:h-8 lg:before:h-full before:z-0 before:rounded-2xl lg:before:rounded-none">
	<div class="container relative mx-auto px-8 lg:px-4 bg-secondary z-10 rounded-b-2xl lg:rounded-tl-2xl h-full flex items-end lg:items-center">
		<div class="grid lg:grid-cols-12 gap-12 py-16 lg:py-44 items-center">
			<div class="lg:col-span-6 text-center">
				<img src="//via.placeholder.com/410x410" alt="" class="mx-auto rounded-2xl">
			</div>
			<div class="lg:col-span-6 xl:col-span-5">
				<h2 class="text-2xl md:text-4xl font-bold tracking-[0.01em]">Brokers can bring a competitive advantage to your renewals and win new business</h2>
				<p class="mt-4 md:mt-6">Our employer-sponsored group health insurance solution combines a High-Deductible Health Plan (HDHP) with a Medical Expense Reimbursement Program (MERP) that helps your clients get more bang for their health insurance buck.</p>
				<a href="#" class="btn-lg bg-dark text-white mt-6">Learn how to save</a>
			</div>
		</div>
	</div>
</div>

<div class="container mx-auto my-8">

	<?php if ( have_posts() ) : ?>
		<?php
		while ( have_posts() ) :
			the_post();
			?>

			<?php get_template_part( 'template-parts/content', get_post_format() ); ?>

		<?php endwhile; ?>

	<?php endif; ?>

</div>

<?php
get_footer();
