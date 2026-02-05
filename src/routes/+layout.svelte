<script>
	import favicon from "$lib/assets/favicon.svg";
	import "../app.css";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} class="favicon" />
	<!-- Apply theme immediately to prevent flash -->
	<script>
		(function () {
			const theme = localStorage.getItem("theme");
			if (theme === "dark") {
				document.documentElement.classList.add("dark");
			} else {
				document.documentElement.classList.remove("dark");
			}
		})();
	</script>
</svelte:head>

{@render children()}
