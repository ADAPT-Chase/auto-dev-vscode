import { PackageDependencies } from "./Dependence";

/**
 * The `Tooling` interface defines a set of methods for tooling-related operations.
 *
 * @interface Tooling
 * @property {string} getToolingName - Returns the name of the tooling.
 * @property {string} getToolingVersion - Returns the version of the tooling.
 * @property {PackageDependencies} getDependencies - Returns an object representing the tooling's dependencies.
 */
export class Tooling {
	moduleTarget: string[] = [];

	/**
	 * According to the given file path, find the tooling directory. For example, our project structure is:
	 *
	 * ```
	 * ├── package.json
	 * └── src
	 *     ├── components
	 *     │   ├── archive
	 *     │   │   └── EditableDiv.tsx
	 *     └── util
	 * ```
	 *
	 * if the given file path is `src/components/archive/EditableDiv.tsx`, the method should return the path to the tooling directory.
	 */
	lookupRelativeTooling(filepath: String): string {
		return "";
	}

	/**
	 * Returns the name of the tooling.
	 */
	getToolingName(): string {
		return "";
	}

	/**
	 * Returns the version of the tooling.
	 */
	async getToolingVersion(): Promise<string> {
		return "";
	}

	/**
	 * Returns an object representing the tooling's dependencies.
	 */
	async getDependencies(): Promise<PackageDependencies> {
		return Promise.reject("Not implemented");
	}

	/**
	 * Searches for dependencies in the tooling.
	 */
	async getTasks(): Promise<string[]> {
		return [];
	}
}