<div class="max-w-screen-sm mx-auto px-8 lg:px-4">
	
    <div x-data="{ formselect: '' }">
			<span id="contactLabel">Please select a reason for contacting us</span>
    	<select 
				name="" 
				id="" 
				class="w-full rounded-2xl border-none outline-none focus:ring-gray-300 mt-1 px-4 py-3 cursor-pointer"
				x-model="formselect"
				aria-labelledby="contactLabel"
				>
				<option value="" disabled>Please select a reason for contacting us</option>
	      <option>Name</option>
	      <option>Something else</option>
	      <option>Another thing</option>
	    </select>
			<div 
				x-show="formselect === 'Name'"
				>
				name
			</div>
			<div 
				x-show="formselect === 'Something else'"
				>
				something else
			</div>
			<div 
				x-show="formselect === 'Another thing'"
				>
				another thing
			</div>

    </div>
  </div>