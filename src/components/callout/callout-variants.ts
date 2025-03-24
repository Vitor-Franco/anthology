import { cva, VariantProps } from 'class-variance-authority';

export type CalloutVariants = VariantProps<typeof calloutVariants>;

export const calloutVariants = cva(
  ['p-4', 'rounded-md', 'flex', 'flex-col', 'gap-4', 'w-80', 'border', 'text-base', 'shadow-md'],
  {
    variants: {
      variant: {
        primary: [
          'border-primary-500',
          'bg-primary-200',
          'text-primary-900',
          'dark:text-primary-50',
          'dark:bg-primary-800',
          'dark:border-primary-900',
        ],
        success: [
          'border-success-500',
          'bg-success-200',
          'text-success-900',
          'dark:text-success-50',
          'dark:bg-success-800',
          'dark:border-success-900',
        ],
        danger: [
          'border-danger-500',
          'bg-danger-200',
          'text-danger-900',
          'dark:text-danger-50',
          'dark:bg-danger-800',
          'dark:border-danger-900',
        ],
        information: [
          'border-information-500',
          'bg-information-200',
          'text-information-900',
          'dark:text-information-50',
          'dark:bg-information-800',
          'dark:border-information-900',
        ],
        warning: [
          'border-warning-500',
          'bg-warning-200',
          'text-warning-900',
          'dark:text-warning-50',
          'dark:bg-warning-800',
          'dark:border-warning-900',
        ],
      },
    },
  },
);
