import * as SeparatorPrimitive from '@radix-ui/react-separator'
import { cn } from '../../lib/utils'

export function Separator({ className, orientation = 'horizontal', ...props }: SeparatorPrimitive.SeparatorProps) {
  return <SeparatorPrimitive.Root className={cn(orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px', 'bg-slate-200', className)} orientation={orientation} {...props} />
}
