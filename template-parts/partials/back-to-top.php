<a 
	href="#top" 
	class="fixed bottom-4 right-4 w-12 h-12 rounded-full bg-dark flex items-center justify-center z-40 opacity-80 text-white hover:opacity-100 transition-opacity"
	x-data="{scroll : false}"
	@scroll.window.throttle="
		document.documentElement.scrollTop > 600 ? scroll = true : scroll = false
	"
	x-show="scroll"
	x-transition.opacity.duration.250ms
	>
	<svg fill="currentColor" viewBox="0 0 20 20" class="inline w-6 h-auto transition-transform duration-200 transform lg:-mt-1 rotate-180"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg><span class="sr-only">scroll to top</span>
</a>