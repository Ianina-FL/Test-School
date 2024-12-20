import type { ColorButtonKey } from './interfaces';

export const gradientBgBase = 'bg-gradient-to-tr';
export const colorBgBase = 'bg-skyBlueTheme-mainBG';
export const gradientBgPurplePink = `${gradientBgBase} from-purple-400 via-pink-500 to-red-500`;
export const gradientBgViolet = `${gradientBgBase} ${colorBgBase}`;
export const gradientBgDark = `${gradientBgBase} from-dark-700 via-dark-900 to-dark-800`;
export const gradientBgPinkRed = `${gradientBgBase} from-pink-400 via-red-500 to-yellow-500`;

export const colorsBgLight = {
  white: 'bg-white text-black',
  light:
    ' bg-skyBlueTheme-outsideCardColor text-primaryText text-primaryText dark:bg-dark-900 dark:text-white',
  contrast: 'bg-gray-800 text-white dark:bg-white dark:text-black',
  success:
    'bg-emerald-500 border-emerald-500 dark:bg-pavitra-blue dark:border-pavitra-blue text-white',
  danger: 'bg-red-500 border-red-500 text-white',
  warning: 'bg-yellow-500 border-yellow-500 text-white',
  info: 'bg-blue-500 border-blue-500 dark:bg-pavitra-blue dark:border-pavitra-blue text-white',
};

export const colorsText = {
  white: 'text-black dark:text-slate-100',
  light: 'text-primaryText dark:text-slate-400',
  contrast: 'dark:text-white',
  success: 'text-emerald-500',
  danger: 'text-red-500',
  warning: 'text-yellow-500',
  info: 'text-blue-500',
};

export const colorsOutline = {
  white: [colorsText.white, 'border-gray-100'].join(' '),
  light: [colorsText.light, 'border-gray-100'].join(' '),
  contrast: [colorsText.contrast, 'border-gray-900 dark:border-slate-100'].join(
    ' ',
  ),
  success: [colorsText.success, 'border-emerald-500'].join(' '),
  danger: [colorsText.danger, 'border-red-500'].join(' '),
  warning: [colorsText.warning, 'border-yellow-500'].join(' '),
  info: [colorsText.info, 'border-blue-500'].join(' '),
};

export const getButtonColor = (
  color: ColorButtonKey,
  isOutlined: boolean,
  hasHover: boolean,
  isActive = false,
) => {
  if (color === 'void') {
    return '';
  }

  const colors = {
    ring: {
      white: 'ring-gray-200 dark:ring-gray-500',
      whiteDark: 'ring-skyBlueTheme-outsideCardColor  dark:ring-dark-500',
      lightDark: 'ring-gray-200 dark:ring-gray-500',
      contrast: 'ring-gray-300 dark:ring-gray-400',
      success: 'ring-emerald-300 dark:ring-pavitra-blue',
      danger: 'ring-red-300 dark:ring-red-700',
      warning: 'ring-yellow-300 dark:ring-yellow-700',
      info: 'ring-skyBlueTheme-buttonColor dark:ring-pavitra-blue',
    },
    active: {
      white: 'bg-gray-100',
      whiteDark: 'bg-gray-100 dark:bg-dark-800',
      lightDark: 'bg-gray-200 dark:bg-slate-700',
      contrast: 'bg-gray-700 dark:bg-slate-100',
      success: 'bg-emerald-700 dark:bg-pavitra-blue',
      danger: 'bg-red-700 dark:bg-red-600',
      warning: 'bg-yellow-700 dark:bg-yellow-600',
      info: 'bg-skyBlueTheme-buttonColor  dark:bg-pavitra-blue',
    },
    bg: {
      white: 'bg-white text-black',
      whiteDark:
        'bg-skyBlueTheme-outsideCardColor   text-primaryText  dark:bg-dark-900 dark:text-white',
      lightDark: 'bg-gray-100 text-black dark:bg-slate-800 dark:text-white',
      contrast: 'bg-gray-800 text-white dark:bg-white dark:text-black',
      success: 'bg-emerald-600 dark:bg-pavitra-blue text-white',
      danger:
        'bg-skyBlueTheme-outsideCardColor text-red-500 dark:text-white    dark:bg-red-500 ',
      warning: 'bg-yellow-600 dark:bg-yellow-500 text-white',
      info: ' bg-skyBlueTheme-buttonColor  dark:bg-pavitra-blue  text-white ',
    },
    bgHover: {
      white: 'hover:bg-gray-100',
      whiteDark:
        'hover:bg-skyBlueTheme-outsideCardColor   hover:dark:bg-dark-800',
      lightDark: 'hover:bg-gray-200 hover:dark:bg-slate-700',
      contrast: 'hover:bg-gray-700 hover:dark:bg-slate-100',
      success:
        'hover:bg-emerald-700 hover:border-emerald-700 hover:dark:bg-pavitra-blue hover:dark:border-pavitra-blue',
      danger:
        'hover:bg-red-700 hover:border-red-700 hover:dark:bg-red-600 hover:dark:border-red-600',
      warning:
        'hover:bg-yellow-700 hover:border-yellow-700 hover:dark:bg-yellow-600 hover:dark:border-yellow-600',
      info: 'hover:bg-skyBlueTheme-800  hover:border-skyBlueTheme-buttonColor  hover:dark:bg-pavitra-blue/80 hover:dark:border-pavitra-blue/80',
    },
    borders: {
      white: 'border-white',
      whiteDark: 'border-skyBlueTheme-outsideCardColor   dark:border-dark-900',
      lightDark: 'border-gray-100 dark:border-slate-800',
      contrast: 'border-gray-800 dark:border-white',
      success: 'border-emerald-600 dark:border-pavitra-blue',
      danger: 'border-red-600 dark:border-red-500',
      warning: 'border-yellow-600 dark:border-yellow-500',
      info: 'border-skyBlueTheme-buttonColor  border-blue-600 dark:border-pavitra-blue',
    },
    text: {
      contrast: 'dark:text-slate-100',
      success: 'text-emerald-600 dark:text-pavitra-blue',
      danger: 'text-red-600 dark:text-red-500',
      warning: 'text-yellow-600 dark:text-yellow-500',
      info: '  dark:text-pavitra-blue',
    },
    outlineHover: {
      contrast:
        'hover:bg-gray-800 hover:text-gray-100 hover:dark:bg-slate-100 hover:dark:text-black',
      success:
        'hover:bg-emerald-600 hover:text-white hover:text-white hover:dark:text-white hover:dark:border-pavitra-blue',
      danger:
        'hover:bg-red-600 hover:text-white hover:text-white hover:dark:text-white hover:dark:border-red-600',
      warning:
        'hover:bg-yellow-600 hover:text-white hover:text-white hover:dark:text-white hover:dark:border-yellow-600',
      info: 'hover:bg-skyBlueTheme-buttonColor text-skyBlueTheme-buttonColor  hover:bg-blue-600 hover:text-white hover:dark:text-white hover:dark:border-pavitra-blue',
    },
  };

  const isOutlinedProcessed =
    isOutlined && ['white', 'whiteDark', 'lightDark'].indexOf(color) < 0;

  const base = [colors.borders[color], colors.ring[color]];

  if (isActive) {
    base.push(colors.active[color]);
  } else {
    base.push(isOutlinedProcessed ? colors.text[color] : colors.bg[color]);
  }

  if (hasHover) {
    base.push(
      isOutlinedProcessed ? colors.outlineHover[color] : colors.bgHover[color],
    );
  }

  return base.join(' ');
};
