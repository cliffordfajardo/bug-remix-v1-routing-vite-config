import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import { createRoutesFromFolders } from "@remix-run/v1-route-convention";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    remix({
      // Tell Remix to ignore everything in the routes directory. We'll let `createRoutesFromFolders` take care of that.
      ignoredRouteFiles: ["**/*"],
      routes(defineRoutes) {
        return Promise.resolve(createRoutesFromFolders(defineRoutes, {
          ignoredFilePatterns: ["**/.*", "**/*.css"]
        }));
      },
    }),
    tsconfigPaths()
  ],
});
