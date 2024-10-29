export function debounce(func: any, delay: number) {
  let timeoutId: NodeJS.Timeout | null = null;

  return function(...args: any) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}