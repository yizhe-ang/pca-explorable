<script>
  import { T } from "@threlte/core"
  import { OrbitControls } from "@threlte/extras"
  import Scatterplot from "./Scatterplot.svelte";
</script>

<!-- Set up camera and lighting -->
<T.PerspectiveCamera
  makeDefault
  position={[0, 0, 80]}
>
  <OrbitControls enableDamping />
</T.PerspectiveCamera>
<T.AmbientLight
  color={"#ffffff"}
  intensity={0.1}
/>
<T.HemisphereLight
  color={"#ffffff"}
  skyColor={"#ffffbb"}
  groundColor={"#080820"}
  intensity={1.0}
/>

<!-- TODO: Have a retro-looking grid? -->

<Scatterplot />
