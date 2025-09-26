import { snapdom } from '@zumer/snapdom';

/**
 * 一键截图
 */
export async function snapDomToPng(dom) {
  const image = await snapdom(dom);

  return image.url;
}
