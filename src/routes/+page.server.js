import { PCA } from "ml-pca"
import { autoType } from "d3";
import iris from "$data/iris.csv";

export async function load() {
  // Perform PCA on dataset
  // const irisPCA = new PCA(iris)

	// Process data types
	return {
		iris: iris.map(autoType)
    // iris
	};
}
