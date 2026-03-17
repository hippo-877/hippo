import type { HTMLAttributes, TableHTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

export function Table({ className, ...props }: TableHTMLAttributes<HTMLTableElement>) {
  return <table className={cn('w-full text-sm', className)} {...props} />
}
export function THead(props: HTMLAttributes<HTMLTableSectionElement>) { return <thead className='bg-slate-50' {...props} /> }
export function TBody(props: HTMLAttributes<HTMLTableSectionElement>) { return <tbody {...props} /> }
export function TR({ className, ...props }: HTMLAttributes<HTMLTableRowElement>) { return <tr className={cn('border-b hover:bg-slate-50', className)} {...props} /> }
export function TH({ className, ...props }: ThHTMLAttributes<HTMLTableCellElement>) { return <th className={cn('px-3 py-2 text-left font-medium text-slate-600', className)} {...props} /> }
export function TD({ className, ...props }: TdHTMLAttributes<HTMLTableCellElement>) { return <td className={cn('px-3 py-2', className)} {...props} /> }
