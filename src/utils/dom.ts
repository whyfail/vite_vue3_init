import { snapdom } from '@zumer/snapdom';

/**
 * 一键截图
 */
export async function snapDomToPng(dom: Element | null) {
  if (!dom) return '';

  const image = await snapdom(dom);

  return image.url;
}
