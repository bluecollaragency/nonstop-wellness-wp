
</main>

<?php do_action( 'tailpress_content_end' ); ?>

</div>

<?php do_action( 'tailpress_content_after' ); ?>

<footer id="colophon" class="site-footer bg-white py-20" role="contentinfo">
	<?php do_action( 'tailpress_footer' ); ?>
	<div class="container px-8 lg:px-4 mx-auto">
		<img src="//via.placeholder.com/160x100" alt="" class="mx-auto">
		<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mt-20 gap-8">
			<div>
				<h3 class="font-semibold">Outcomes</h3>
				<ul class="flex flex-col gap-y-2 mt-2">
					<li><a class="inline-flex" href="#">Benefits</a></li>
					<li><a class="inline-flex" href="#">Services</a></li>
				</ul>
			</div>
			<div>
				<h3 class="font-semibold">Outcomes</h3>
				<ul class="flex flex-col gap-y-2 mt-2">
					<li><a class="inline-flex" href="#">Benefits</a></li>
					<li><a class="inline-flex" href="#">Services</a></li>
				</ul>
			</div>
			<div>
				<h3 class="font-semibold">Outcomes</h3>
				<ul class="flex flex-col gap-y-2 mt-2">
					<li><a class="inline-flex" href="#">Benefits</a></li>
					<li><a class="inline-flex" href="#">Services</a></li>
				</ul>
			</div>
			<div>
				<h3 class="font-semibold">Outcomes</h3>
				<ul class="flex flex-col gap-y-2 mt-2">
					<li><a class="inline-flex" href="#">Benefits</a></li>
					<li><a class="inline-flex" href="#">Services</a></li>
				</ul>
			</div>
			<div>
				<h3 class="font-semibold">Outcomes</h3>
				<ul class="flex flex-col gap-y-2 mt-2">
					<li><a class="inline-flex" href="#">Benefits</a></li>
					<li><a class="inline-flex" href="#">Services</a></li>
				</ul>
			</div>
			<div>
				<h3 class="font-semibold">Outcomes</h3>
				<ul class="flex flex-col gap-y-2 mt-2">
					<li><a class="inline-flex" href="#">Benefits</a></li>
					<li><a class="inline-flex" href="#">Services</a></li>
				</ul>
			</div>
		</div>
		<ul class="mx-auto flex mt-20 space-x-6 justify-center items-center">
			<li>1</li>
			<li>2</li>
			<li>3</li>
		</ul>
		<div class="text-center mt-8 text-xs">
			&copy; Copyright <?php echo date_i18n( 'Y' );?> Nonstop Administration and Insurance Services, Inc. All Rights Reserved. <span  class="font-semibold"><a href="#">Terms & Conditions</a> • <a href="#">Privacy Policy</a></span>
		</div>
	</div>
</footer>

</div>

<?php wp_footer(); ?>
<a 
	href="#top" 
	class="fixed bottom-4 right-4 w-16 h-16 rounded-full bg-dark flex items-center justify-center z-40 opacity-80 text-white hover:opacity-100 transition-opacity"
	x-data="{scroll : false}"
	@scroll.window.throttle="
		document.documentElement.scrollTop > 600 ? scroll = true : scroll = false
	"
	x-show="scroll"
	x-transition.opacity.duration.250ms
	>
	top
</a>
</body>
</html>
