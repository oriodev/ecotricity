// Types
import { ReactNode } from "react";

/**
 * Renders decorative SVG in line with design on public facing page
 * @returns ReactNode
 */
const DecorativeBar = (): ReactNode => {
  return (
    <div className="w-full min-h-[50px] max-h-[100px] overflow-hidden">
      <svg
        viewBox="0 0 100 3"
        style={{ width: '100%', transform: 'scale(1.01, 1.5)' }}
      >
        <g
          transform="translate(147.76997,-70.178554)"
        >
          <rect fill="rgb(182, 243, 52)" width="10.944351" height="1.4556527" x="-102.46938" y="70.209244"/>
          <path id="path2" d="m -106.12376,70.178596 v 1.487066 h -8.79645 l -2.80902,-1.487108 z" />
          <path id="path2-7" d="m -88.719556,70.208048 v 1.487067 h 8.796451 l 2.809017,-1.487109 z"/>
          <path id="path2-7-9" d="m -47.76997,71.696917 v -1.487109 h -4.982101 l -2.809017,1.487109 z" />
          <path id="path2-7-9-6" d="m -147.76997,71.696044 v -1.487108 l 6.35281,-4.83e-4 2.80901,1.487109 z" />
          <path id="path2-1" fill="rgb(182, 243, 52)" d="m -129.54912,70.178554 2.87823,1.487108 h -7.78621 l -2.80902,-1.487108 z" />
          <path id="path2-1-0" fill="rgb(182, 243, 52)" d="m -67.404506,71.696916 2.878231,-1.486999 -7.786209,-1.09e-4 -2.809019,1.487218 z" />
        </g>
      </svg>
    </div>
  )
}

export default DecorativeBar;