<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class='h-screen bg-linear-to-b from-yellow-100 to-yellow-500 '>
	{@render children()}
</div>