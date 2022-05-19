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