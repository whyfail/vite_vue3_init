import type { AppRouteRecordRaw } from "./types";
import { createRoutes } from "./routeUtils";

describe("route utilities", () => {
  it("returns the route records for app aggregation", () => {
    const routes: AppRouteRecordRaw[] = [
      {
        path: "/docs",
        component: { template: "<div>Docs</div>" },
        meta: { title: "Docs" },
      },
    ];

    expect(createRoutes(routes)).toBe(routes);
  });
});
