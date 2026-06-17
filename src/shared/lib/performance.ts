import { onCLS, onFCP, onINP, onLCP, onTTFB } from "web-vitals";

type MetricRating = "good" | "needs-improvement" | "poor";
type MetricName = "CLS" | "FCP" | "LCP" | "INP" | "TTFB";

const vitalsThresholds: Record<MetricName, { good: number; poor: number }> = {
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  LCP: { good: 2500, poor: 4000 },
  INP: { good: 200, poor: 500 },
  TTFB: { good: 800, poor: 1800 },
};

function getRating(metricName: MetricName, value: number): MetricRating {
  const thresholds = vitalsThresholds[metricName];

  if (value <= thresholds.good) return "good";
  if (value <= thresholds.poor) return "needs-improvement";

  return "poor";
}

function reportMetric(metric: { name: string; value: number }) {
  if (!import.meta.env.DEV) return;

  const name = metric.name as MetricName;
  const rating = vitalsThresholds[name] ? getRating(name, metric.value) : "good";

  console.debug(`[web-vitals] ${metric.name}: ${metric.value.toFixed(2)} (${rating})`);
}

export function initPerformanceMonitoring() {
  if (!("PerformanceObserver" in window)) return;

  onCLS(reportMetric);
  onFCP(reportMetric);
  onINP(reportMetric);
  onLCP(reportMetric);
  onTTFB(reportMetric);
}

export function observeLongTasks() {
  if (!("PerformanceObserver" in window)) return;

  try {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        console.debug(`[long-task] ${entry.duration.toFixed(0)}ms`);
      });
    });

    observer.observe({ entryTypes: ["longtask"] });
  } catch {
    // Some browsers do not support longtask entries.
  }
}

export const performanceMonitor = {
  init: initPerformanceMonitoring,
  observeLongTasks,
};
