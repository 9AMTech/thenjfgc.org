<script>
	import { onMount } from "svelte";

	let darkMode = false;
	let mounted = false;

	onMount(() => {
		mounted = true;
		// Load saved theme preference from localStorage
		const savedTheme = localStorage.getItem("theme");
		const systemPrefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)",
		).matches;

		// Use saved theme if available, otherwise default to light mode
		darkMode = savedTheme === "dark";

		if (darkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}

		// console.log("Dark mode component mounted, darkMode:", darkMode);
	});

	function toggleDarkMode() {
		darkMode = !darkMode;
		// console.log("Toggling dark mode to:", darkMode);

		if (darkMode) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
			// console.log(
			// 	"Added dark class, classes:",
			// 	document.documentElement.classList.toString(),
			// );
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
			// console.log(
			// 	"Removed dark class, classes:",
			// 	document.documentElement.classList.toString(),
			// );
		}
	}
</script>

<button
	on:click={toggleDarkMode}
	class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
	aria-label="Toggle dark mode"
	title="Toggle dark mode"
>
	{#if mounted}
		{#if darkMode}
			<!-- Sun icon -->
			<svg
				class="w-5 h-5 text-yellow-500"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
				></path>
			</svg>
		{:else}
			<!-- Moon icon -->
			<svg
				class="w-5 h-5 text-gray-700"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
				></path>
			</svg>
		{/if}
	{:else}
		<div class="w-5 h-5"></div>
	{/if}
</button>
