import { performanceMonitor } from '@/shared/lib/performance';

export function setupMonitoring() {
  if (import.meta.env.VITE_ENABLE_PERFORMANCE_MONITOR !== 'true') return;

  performanceMonitor.init();

  if (import.meta.env.DEV) {
    performanceMonitor.observeLongTasks();
  }
}
