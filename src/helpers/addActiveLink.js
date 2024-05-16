import clsx from 'clsx';

export const addColorToLink = (isActive, className) => {
  return clsx(isActive && className);
};