<script>
	import { Canvas } from "@threlte/core";
	import Scene from "./Scene.svelte";
</script>

<!-- Visualization -->
<div class="wrapper">
	<Canvas>
		<Scene />
	</Canvas>
</div>

<style>
	.wrapper {
		position: absolute;
		inset: 0;
		background-color: black;
	}
</style>
