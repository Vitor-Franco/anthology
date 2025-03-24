import type { PropsWithChildren } from 'react';
import { calloutVariants, CalloutVariants } from './callout-variants';
import clsx from 'clsx';
import { Icon } from '../icon';

export type CalloutProps = PropsWithChildren<
  CalloutVariants & {
    title: string;
  }
>;

const icons = {
  primary: 'pencil',
  success: 'success',
  danger: 'skull',
  warning: 'warning',
  information: 'info',
} as const;

export const Callout = ({ title, children, variant = 'primary' }: CalloutProps) => {
  const icon = icons[variant ?? 'primary'];

  return (
    <div className={clsx(calloutVariants({ variant }))}>
      <div className="flex items-center gap-2">
        <Icon type={icon} className="w-6" />
        <h2 className="font-semibold">{title}</h2>
      </div>
      <p>{children}</p>
    </div>
  );
};
