import { initPerformanceMonitoring, observeLongTasks, performanceMonitor } from "./performance";

describe("performance monitor utilities", () => {
  it("skips initialization when PerformanceObserver is unavailable", () => {
    const originalObserver = window.PerformanceObserver;

    Reflect.deleteProperty(window, "PerformanceObserver");

    expect(() => initPerformanceMonitoring()).not.toThrow();
    expect(() => performanceMonitor.init()).not.toThrow();

    Object.defineProperty(window, "PerformanceObserver", {
      configurable: true,
      value: originalObserver,
    });
  });

  it("skips long task observation when unsupported", () => {
    const originalObserver = window.PerformanceObserver;

    Reflect.deleteProperty(window, "PerformanceObserver");

    expect(() => observeLongTasks()).not.toThrow();

    Object.defineProperty(window, "PerformanceObserver", {
      configurable: true,
      value: originalObserver,
    });
  });
});
