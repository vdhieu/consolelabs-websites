import * as React from 'react'
import type { SVGProps } from 'react'

function IconChevron(props: SVGProps<SVGSVGElement>) {
  return <svg
    fill="none"
    height="1em"
    viewBox="0 0 18 18"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.5 6.75 9 11.25l-4.5-4.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
}
export default IconChevron