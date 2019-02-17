/**
 * Preloader
 */
export const SHOW_PRELOADER = 'SHOW_PRELOADER';
export const HIDE_PRELOADER = 'HIDE_PRELOADER';

export const showPreloader = () => {
  return {
    type: SHOW_PRELOADER,
  };
};

export const hidePreloder = () => {
  return {
    type: HIDE_PRELOADER,
  };
};
