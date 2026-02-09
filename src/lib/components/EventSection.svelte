<script>
	export let region;
	export let events;

	// Sort events alphabetically by name
	$: sortedEvents = [...events].sort((a, b) => a.name.localeCompare(b.name));
</script>

<section class="mb-20" id={region.toLowerCase().replace(" ", "-")}>
	<div class="flex items-center mb-8">
		<div
			class="w-1 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-4"
		></div>
		<h3 class="text-3xl font-bold text-black dark:text-blue-100">
			{region}
		</h3>
	</div>

	<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each sortedEvents as event}
			<div
				class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-orange-200 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-600 group transition-colors duration-300"
			>
				<div class="flex items-center mb-4">
					<div
						class="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold mr-4 overflow-hidden"
					>
						{#if event.logo && event.logo !== null && event.logo !== ""}
							<img
								src={event.logo}
								alt="Logo for {event.name}."
								class="w-full h-full object-cover"
							/>
						{:else}
							{event.name.charAt(0)}
						{/if}
					</div>

					<h4
						class="text-xl font-semibold text-black dark:text-blue-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors"
					>
						{event.name}
					</h4>
				</div>

				<p class="text-black dark:text-blue-200 leading-relaxed mb-2">
					{event.descriptor}
				</p>

				<p class="text-black dark:text-blue-200 leading-relaxed mb-2">
					📍 Location: <span
						class="inline-flex items-center text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors font-medium"
						>{event.location}</span
					>
				</p>

				<p class="text-black dark:text-blue-200 leading-relaxed mb-2">
					🚨 Updates:
					<a
						href={event.socialMediaLink}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors font-medium"
						aria-label="View {event.name} on Twitter"
					>
						{event.socialMediaText || "LINK"}
					</a>
				</p>
			</div>
		{/each}
	</div>
</section>
