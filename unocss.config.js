// uno.config.js
import presetWind4 from '@unocss/preset-wind4';
import { defineConfig, presetAttributify } from 'unocss';

export default defineConfig({
  presets: [presetWind4(), presetAttributify()],
  rules: [
    // 省略样式规则
    [
      /^e-(\d+)$/,
      ([, number]) => {
        if (number === '1') {
          return {
            'overflow': 'hidden',
            'text-overflow': 'ellipsis',
            'white-space': 'nowrap',
          };
        } else {
          return {
            'overflow': 'hidden',
            'text-overflow': 'ellipsis',
            'display': '-webkit-box',
            '-webkit-line-clamp': number,
            '-webkit-box-orient': 'vertical',
          };
        }
      },
    ],
  ],
});
