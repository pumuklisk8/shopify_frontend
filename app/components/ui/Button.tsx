import CheckCircleIcon from '@heroicons/react/20/solid/CheckCircleIcon';

export function Button(props: {
  label: string;
  type: 'small' | 'large' | 'huge';
  extraClass?: string;
}) {
  const {label, type, extraClass} = props;

  const smallClass =
    'cursor-pointer inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-1.5 body-text-small-medium text-[#fff]! hover:bg-primary-hover active:bg-primary-active';

  const largeClass =
    'cursor-pointer inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 body-text-small-medium text-[#fff]! hover:bg-primary-hover active:bg-primary-active';

  const hugeClass =
    'cursor-pointer inline-flex items-center gap-3 rounded-xl bg-primary px-10 py-5 body-text-medium-semibold text-[#fff]! hover:bg-primary-hover active:bg-primary-active';

  let buttonClass = smallClass;

  switch (type) {
    case 'large':
      buttonClass = largeClass;
      break;
    case 'huge':
      buttonClass = hugeClass;
      break;
  }

  if (extraClass !== undefined) {
    buttonClass += ' ' + extraClass;
  }

  return (
    <button type="button" className={buttonClass}>
      <CheckCircleIcon aria-hidden="true" className="-ml-0.5 h-5 w-5" />
      {label}
      <CheckCircleIcon aria-hidden="true" className="-mr-0.5 h-5 w-5" />
    </button>
  );
}
