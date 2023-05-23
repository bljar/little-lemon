interface logoProps {
  className: string;
}
interface iconProp {
  className: string;
}

export function Logo(props: logoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 96 960 960"
      className={props.className}
    >
      <g transform="translate(-76.793 68.942) scale(23.95)">
        <path
          fill="#f4ce14"
          d="M21.272 6.754c-.815.02-1.924-.12-2.891.966l-.406.419-.268.107c-.988.36-1.684 1.137-1.96 2.17-.255.967-.689 1.825-1.243 2.61-2.156 3.174-2.17 8.133-.521 12.662 1.708 4.565 4.844 8.317 8.536 9.363.907.31 1.813.622 2.63 1.199.898.547 1.992.732 2.898.402l.742-.27c.988-.36 1.684-1.136 1.96-2.17.255-.966.69-1.824 1.243-2.609 2.156-3.174 2.17-8.133.522-12.662-1.709-4.565-4.845-8.317-8.537-9.363-.906-.311-1.813-.624-2.63-1.201-.565-.345-2.694-.078-3.319-.097l4.392-1.37a8.03 8.03 0 00-1.148-.156z"
          className="st1"
        ></path>
        <path
          fill="#495e57"
          d="M20.724 6.54c-1.8.127-3.543.892-4.472 2.522-.614 1.079-1.691 5.006-.204 9.135 1.554 4.552 4.275 3.959 5.29 3.525.258-.132.448-.478.529-.854.323-1.5.872-5.123-.479-7.941-1.38-3.04-3.863-1.169-4.646-3.441 1.438-.298 2.678 1.375 4.857 1.136 2.074-.188 2.972-1.473 3.27-2.049.074-.144.054-.33-.098-.486A5.942 5.942 0 0020.9 6.542l-.176-.002zm-.78 1.227c.18 0 .954.139 1.149.156l-4.391 1.37c1.04-1.043 2.247-1.526 3.243-1.526zm-3.458 1.806l2.552 8.414c-3.128-2.712-2.552-8.414-2.552-8.414z"
          className="st58"
          transform="translate(1.327 -1.013)"
        ></path>
      </g>
    </svg>
  );
}

export function FooterLogo(props: logoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 96 580 960"
      className={props.className}
    >
      <defs>
        <filter
          id="filter1124"
          width="1"
          height="1"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            baseFrequency="0.039999999999998842 0.14999999999999997"
            numOctaves="10"
            result="result1"
            seed="1000"
            type="fractalNoise"
          ></feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="result1"
            scale="23.394"
          ></feDisplacementMap>
        </filter>
        <filter
          id="filter10003-3-3"
          width="1"
          height="1"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            baseFrequency="1.6610253590210355 1.4973760808555825"
            numOctaves="10"
            result="result1"
            seed="1000"
            type="fractalNoise"
          ></feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="result1"
            scale="1.236"
          ></feDisplacementMap>
        </filter>
        <filter
          id="filter10003-3"
          width="1"
          height="1"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            baseFrequency="1.6610253590210355 1.4973760808555825"
            numOctaves="10"
            result="result1"
            seed="1000"
            type="fractalNoise"
          ></feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="result1"
            scale="1.236"
          ></feDisplacementMap>
        </filter>
        <filter
          id="filter10003-3-36"
          width="1"
          height="1"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            baseFrequency="1.6610253590210355 1.4973760808555825"
            numOctaves="10"
            result="result1"
            seed="1000"
            type="fractalNoise"
          ></feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="result1"
            scale="0.5"
          ></feDisplacementMap>
        </filter>
      </defs>
      <g fill="#fff">
        <path
          d="M193.4 71.545h813.48a13.93 13.93 0 0113.96 13.96V97.7a13.93 13.93 0 01-13.96 13.96H193.4a13.93 13.93 0 01-13.96-13.96V85.505a13.93 13.93 0 0113.96-13.96zM35.45-736.815v-13.968c0-6.573 7.77-11.865 17.423-11.865h817.03c9.652 0 17.423 5.292 17.423 11.865v13.968c0 6.573-7.77 11.865-17.423 11.865H52.873c-9.652 0-17.423-5.292-17.423-11.865zm-1.605 842.96v-842.19c0-8.007 6.014-14.453 13.484-14.453h11.779c7.47 0 13.484 6.446 13.484 14.453v842.19c0 8.007-6.014 14.453-13.484 14.453H47.329c-7.47 0-13.484-6.446-13.484-14.453zm959.96-856.71h11.09c5.22 0 9.421 7.822 9.421 17.537v822.38c0 9.715-4.202 17.537-9.421 17.537h-11.09c-5.22 0-9.421-7.822-9.421-17.537v-822.38c0-9.716 4.202-17.537 9.421-17.537z"
          filter="url(#filter1124)"
          transform="matrix(7.5079 0 0 7.5294 -199.61 68.457) matrix(0 .08239 -.07958 0 39.665 23.744)"
        ></path>
        <path
          strokeWidth="0.265"
          d="M123.02 97.156l-7.364-8.974 1.565-2.006 7.364 8.996.11 1.929q-.705.11-1.675.055zm-7.474-.232V86.33l1.763.65v9.945zm1.631-8.852l-1.268-.386-1.466-.518.077-.992h2.701zm7.519 9.029l-1.764-.937V86.33h1.764zm-10.186-.011l.077-.97q.53-.232 1.378-.43l-.419 1.124v-1.73h1.764v1.73l-.386-1.025 1.62.309-.077.992zm11.157-10.914l-.077.97q-.563.265-1.312.43l.419-1.125v1.731h-1.764v-1.73l.385 1.036-1.466-.32.077-.992zm-19.888 11.113q-1.698 0-2.955-.695t-1.94-1.962q-.684-1.268-.684-2.988 0-1.73.684-2.998.683-1.279 1.94-1.974 1.257-.694 2.966-.694 1.709 0 2.965.694t1.94 1.963q.684 1.257.684 2.987t-.683 3.01q-.684 1.268-1.94 1.962-1.257.695-2.977.695zm.275-1.411q2.326 0 2.326-3.815 0-2.249-.738-3.461-.739-1.213-2.117-1.213-2.326 0-2.326 3.814 0 2.25.739 3.462.75 1.213 2.116 1.213zm-17.716.661l-3.814-10.363h2.712l3.351 9.393-.198.926q-.496.044-1.036.066-.53.011-1.015-.022zm-5.953.551l.077-.97q.496-.242 1.312-.43l-.474 1.004.65-10.01.353.804-1.543-.32.077-.992h2.8l-.573 10.495-.342-.881 1.577.308-.077.992zm8.004-.595l-1.488-.198 3.45-10.12h1.841zm2.084.595l.077-.97q.297-.121.683-.231.397-.11.805-.188l-.375.915-.562-10.44h3.649l-.077.97q-.607.254-1.466.42l.418-.783.65 9.8-.418-.804 1.39.32-.078.991zm-21.266-.165V86.331h2.645v10.594zm1.4.165v-1.433h6.063l.265 1.433zm6.328 0l-2.15-.915 1.466-2.557h1.18q.022.75-.11 1.653-.122.904-.386 1.82zm-6.505-4.85v-1.5h4.983l-.11 1.5zm-.463-4.63v-1.434h6.846l-.21 1.434zm5.887 1.84l-1.102-2.314 2.061-.96q.177.794.232 1.643.066.849.01 1.632zm-7.684 7.64l.078-.97q.529-.231 1.378-.43l-.42 1.125v-1.73h2.646v1.73l-.385-1.036 1.466.32-.077.992zm4.719-10.913l-.077.97q-.53.231-1.378.43l.419-1.125v1.73h-2.646v-1.73l.386 1.036-1.467-.32.078-.991zm-15.6 10.749V86.332h2.647v10.594zm1.39.165v-1.433h5.567l.408 1.433zm5.975 0l-2.216-.915 1.698-2.999h1.036q0 2.095-.518 3.914zm-3.241-10.914l-.077.97q-.309.1-.783.21-.474.099-1.036.187l.419-1.091v1.73H59.29v-1.73l.386 1.036-1.466-.32.077-.992zm-5.16 10.914l.078-.97q.529-.232 1.378-.43l-.42 1.124v-1.73h2.647v1.73l-.386-1.036 1.466.32-.077.992zm64.769.066l-7.365-8.974 1.566-2.006 7.364 8.996.11 1.929q-.705.11-1.675.055zm-7.475-.231V86.332l1.764.65v9.944zm1.632-8.853l-1.268-.386-1.466-.518.077-.992h2.7zm7.518 9.029l-1.764-.937V86.33h1.764zm-10.186-.011l.077-.97q.53-.232 1.378-.43l-.418 1.124v-1.73h1.763v1.73l-.385-1.025 1.62.309-.077.992zm11.157-10.914l-.077.97q-.562.265-1.312.43l.42-1.124v1.73h-1.765v-1.73l.386 1.036-1.466-.32.077-.992zM105.78 97.29q-1.697 0-2.954-.695t-1.94-1.962q-.684-1.268-.684-2.988 0-1.73.683-2.998.684-1.279 1.94-1.974 1.258-.694 2.966-.694 1.71 0 2.966.694t1.94 1.963q.684 1.257.684 2.987t-.684 3.01q-.683 1.268-1.94 1.962-1.257.695-2.977.695zm.276-1.411q2.326 0 2.326-3.815 0-2.249-.739-3.461-.738-1.213-2.116-1.213-2.326 0-2.326 3.815 0 2.249.738 3.461.75 1.213 2.117 1.213zm-17.716.661l-3.815-10.363h2.712l3.352 9.393-.199.926q-.496.044-1.036.066-.529.011-1.014-.022zm-5.953.552l.077-.97q.496-.243 1.312-.43l-.474 1.003.65-10.01.353.804-1.543-.32.077-.991h2.8l-.573 10.495-.342-.882 1.576.308-.077.992zm8.003-.596l-1.488-.198 3.45-10.12h1.842zm2.084.596l.077-.97q.298-.122.684-.232.397-.11.805-.188l-.375.915-.563-10.44h3.65l-.078.97q-.606.254-1.466.42l.419-.783.65 9.8-.418-.804 1.389.32-.078.992zm-21.266-.166V86.332h2.646v10.594zm1.4.166v-1.434h6.064l.264 1.434zm6.328 0l-2.15-.916 1.467-2.557h1.18q.021.75-.11 1.653-.122.904-.387 1.82zm-6.504-4.851v-1.5h4.983l-.11 1.5zm-.463-4.63v-1.434h6.846l-.21 1.434zm5.887 1.84l-1.103-2.314 2.062-.96q.176.794.231 1.643.067.849.012 1.632zm-7.684 7.64l.077-.97q.53-.231 1.378-.43l-.419 1.125v-1.73h2.646v1.73l-.386-1.036 1.466.32-.077.992zm4.718-10.913l-.077.97q-.529.231-1.378.43l.42-1.125v1.731h-2.647v-1.73l.386 1.035-1.466-.32.077-.991zM59.291 96.927V86.333h2.646v10.594zm1.39.165v-1.433h5.567l.408 1.433zm5.975 0l-2.216-.915 1.697-2.999h1.037q0 2.095-.518 3.914zm-3.241-10.914l-.078.97q-.308.1-.782.21-.474.099-1.037.187l.42-1.091v1.73H59.29v-1.73l.386 1.036-1.466-.32.077-.992zm-5.16 10.914l.077-.97q.53-.232 1.378-.43l-.419 1.124v-1.73h2.646v1.73l-.386-1.036 1.467.32-.078.992z"
          filter="url(#filter10003-3-3)"
          transform="matrix(7.5079 0 0 7.5294 -199.61 68.457) translate(-26.309 31.212)"
          style={{ inlineSize: "87.7128", whiteSpace: "pre" }}
        ></path>
        <path
          strokeWidth="0.265"
          d="M115.76 96.925V86.331h2.646v10.594zm1.4.165v-1.433h6.064l.264 1.433zm6.328 0l-2.15-.915 1.467-2.557h1.18q.021.75-.111 1.653-.121.904-.386 1.82zm-6.504-4.85v-1.5h4.983l-.11 1.5zm-.463-4.63v-1.434h6.846l-.21 1.433zm5.887 1.84l-1.103-2.315 2.062-.959q.176.794.231 1.643.067.849.011 1.632zm-7.684 7.64l.077-.97q.53-.231 1.378-.43l-.419 1.125v-1.73h2.646v1.73l-.386-1.036 1.466.32-.077.991zm4.718-10.914l-.077.97q-.53.232-1.378.43l.419-1.124v1.73h-2.646v-1.73l.386 1.036-1.466-.32.077-.992zm-15.599 10.75V86.33h2.646v10.594zm1.39.165v-1.433h5.567l.407 1.433zm5.974 0l-2.215-.915 1.697-2.999h1.037q0 2.095-.519 3.914zm-3.24-10.914l-.078.97q-.309.1-.783.21-.474.099-1.036.187l.419-1.092v1.731h-2.646v-1.73l.386 1.036-1.466-.32.077-.992zm-5.16 10.914l.077-.97q.53-.232 1.378-.43l-.419 1.124v-1.73h2.646v1.73l-.386-1.036 1.466.32-.077.992zm-9.084-.166V86.331h2.646v10.594zm-3.539-7.165q-.154-1.852.187-3.583l2.14.959-1.247 2.624zm.375-2.15l-.188-1.433h9.35l-.387 1.433zm8.268 2.15l-1.246-2.624 2.14-.96q.34 1.732.187 3.584zm-6.317 7.33l.077-.97q.32-.132.717-.23.408-.1.838-.166l-.42 1.091v-1.73h2.647v1.73l-.386-1.025 1.642.309-.077.992zm-11.135-.165V86.331h2.646v10.594zm-3.539-7.165q-.154-1.852.188-3.583l2.139.959-1.246 2.624zm.375-2.15l-.187-1.433h9.348l-.385 1.433zm8.268 2.15l-1.245-2.624 2.138-.96q.342 1.732.188 3.584zm-6.316 7.33l.077-.97q.32-.132.716-.23.408-.1.838-.166l-.419 1.091v-1.73h2.646v1.73l-.386-1.025 1.643.309-.077.992zm-8.93-.164V86.332h2.646v10.594zm-1.036.165l.077-.97q.529-.232 1.378-.43l-.42 1.124v-1.73h2.647v1.73l-.386-1.036 1.466.32-.077.992zm4.718-10.914l-.077.97q-.53.232-1.378.43l.419-1.125v1.731h-2.646v-1.73l.386 1.036-1.466-.32.077-.992zM59.294 96.926V86.332h2.646v10.594zm1.389.165v-1.433h5.567l.408 1.433zm5.975 0l-2.216-.915 1.698-2.998h1.036q0 2.094-.518 3.913zm-3.24-10.914l-.078.97q-.309.1-.783.21-.474.1-1.036.187l.419-1.091v1.73h-2.646v-1.73l.386 1.036-1.466-.32.077-.992zm-5.16 10.914l.077-.97q.53-.231 1.378-.43l-.419 1.125v-1.731h2.646v1.73l-.386-1.036 1.466.32-.077.992zm57.503-.165V86.332h2.646v10.594zm1.4.165v-1.433h6.063l.265 1.433zm6.328 0l-2.15-.915 1.466-2.557h1.18q.022.75-.11 1.653-.122.904-.386 1.82zm-6.504-4.85v-1.5h4.983l-.11 1.5zm-.463-4.63v-1.434h6.846l-.21 1.433zm5.887 1.84l-1.103-2.315 2.062-.959q.176.794.231 1.643.066.849.011 1.631zm-7.684 7.64l.077-.97q.529-.231 1.378-.43l-.42 1.125v-1.731h2.647v1.73l-.386-1.036 1.466.32-.077.992zm4.718-10.914l-.077.97q-.53.232-1.378.43l.419-1.124v1.73h-2.646v-1.73l.386 1.036-1.467-.32.078-.992zm-15.6 10.75V86.331h2.647v10.594zm1.39.165v-1.433h5.567l.408 1.433zm5.975 0l-2.216-.915 1.698-2.999h1.036q0 2.095-.518 3.914zm-3.241-10.914l-.077.97q-.309.1-.783.21-.474.099-1.036.187l.419-1.092v1.731h-2.646v-1.73l.386 1.036-1.466-.32.077-.992zm-5.16 10.914l.078-.97q.529-.232 1.378-.43l-.42 1.124v-1.73h2.647v1.73l-.386-1.036 1.466.32-.077.992zm-9.083-.166V86.332h2.645v10.594zm-3.54-7.165q-.154-1.853.188-3.583l2.139.959-1.246 2.624zm.376-2.15l-.188-1.433h9.349l-.386 1.433zm8.268 2.15l-1.246-2.624 2.139-.96q.342 1.731.187 3.584zm-6.317 7.33l.077-.97q.32-.132.717-.23.408-.1.838-.166l-.42 1.091v-1.73h2.646v1.73l-.385-1.025 1.642.309-.077.992zm-11.135-.165V86.332h2.646v10.594zm-3.539-7.165q-.154-1.853.188-3.583l2.138.959-1.245 2.624zm.375-2.15l-.187-1.433h9.348l-.386 1.433zm8.268 2.15l-1.246-2.624 2.14-.96q.34 1.731.187 3.584zm-6.317 7.33l.077-.97q.32-.132.717-.23.408-.1.838-.166l-.419 1.091v-1.73h2.646v1.73l-.386-1.025 1.643.309-.078.992zm-8.93-.165V86.332h2.646v10.594zm-1.036.166l.077-.97q.53-.232 1.378-.43l-.418 1.124v-1.73h2.645v1.73l-.386-1.036 1.467.32-.077.992zm4.719-10.914l-.077.97q-.53.231-1.378.43l.418-1.125v1.731h-2.645v-1.73l.385 1.036-1.466-.32.077-.992zM59.295 96.927V86.333h2.645v10.594zm1.389.165V95.66h5.567l.408 1.433zm5.975 0l-2.216-.915 1.698-2.998h1.036q0 2.094-.518 3.913zm-3.241-10.914l-.077.97q-.309.1-.783.21-.474.099-1.036.187l.419-1.091v1.73h-2.646v-1.73l.386 1.036-1.467-.32.078-.992zm-5.16 10.914l.078-.97q.529-.231 1.378-.43l-.42 1.125v-1.731h2.647v1.73l-.386-1.036 1.466.32-.077.992z"
          filter="url(#filter10003-3)"
          transform="matrix(7.5079 0 0 7.5294 -199.61 68.457) translate(-25.795 -79.862)"
          style={{ inlineSize: "87.7128", whiteSpace: "pre" }}
        ></path>
        <path
          strokeWidth="1.236"
          d="M63.522 39.249c-.743.003-1.533.081-2.372.254-2.897.69-4.586 2.195-5.605 4.685a5.94 5.94 0 01.777-.724c1.324-1.048 3.734-2.254 6.813-1.986l-4.213 1.847c1.138.02 2.315.375 3.348 1.002 1.308.921 2.742 1.46 4.192 1.961 2.737-.693 4.004-2.53 4.465-3.419.133-.256.096-.588-.175-.866-.909-.849-3.304-2.663-6.913-2.75a11.496 11.496 0 00-.317-.004zm2.94 7.04a8.83 8.83 0 01-1.374.229c-3.911.427-6.127-2.58-8.713-2.014 1.406 4.046 5.874.709 8.336 6.121 2.413 5.018 1.432 11.465.855 14.138-.144.668-.483 1.288-.945 1.523-1.813.773-6.67 1.828-9.445-6.277-2.438-6.748-.595-13.22.37-15.821-1.644.674-2.806 2.01-3.28 3.77-.453 1.721-1.228 3.246-2.217 4.643-3.85 5.652-3.875 14.483-.932 22.547 3.051 8.129 8.653 14.814 15.245 16.676 1.619.554 3.237 1.108 4.695 2.135 1.605.974 3.558 1.304 5.176.717l1.325-.48c1.765-.64 3.008-2.028 3.502-3.868.454-1.721 1.23-3.25 2.218-4.646 3.85-5.652 3.875-14.48.932-22.544-3.05-8.13-8.656-14.814-15.25-16.676l-.498-.174zM55.957 44.65s-1.027 10.154 4.559 14.983z"
          className="st1"
          filter="url(#filter10003-3-36)"
          transform="matrix(7.5079 0 0 7.5294 -199.61 68.457)"
        ></path>
      </g>
    </svg>
  );
}

export const ChevronRight = (props: iconProp) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={props.className}
    >
      <path
        fillRule="evenodd"
        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const ChevronLeft = (props: iconProp) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={props.className}
    >
      <path
        fillRule="evenodd"
        d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const ChevronDown = (props: iconProp) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={1.5}
      className={props.className}
    >
      <path
        fillRule="evenodd"
        d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const ChevronUp = (props: iconProp) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={1.5}
      className={props.className}
    >
      <path
        fillRule="evenodd"
        d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const CalendarIcon = (props: iconProp) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      className={props.className}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
};

export const Person = (props: iconProp) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 96 960 960"
      fill="currentColor"
      className={props.className}
    >
      <path d="M480 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42zM160 896v-94q0-38 19-65t49-41q67-30 128.5-45T480 636q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800 764 800 802v94H160zm60-60h520v-34q0-16-9.5-30.5T707 750q-64-31-117-42.5T480 696q-57 0-111 11.5T252 750q-14 7-23 21.5t-9 30.5v34zm260-321q39 0 64.5-25.5T570 425q0-39-25.5-64.5T480 335q-39 0-64.5 25.5T390 425q0 39 25.5 64.5T480 515zm0-90zm0 411z"></path>
    </svg>
  );
};

export const WineGlasses = (props: iconProp) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 96 960 960"
      fill="currentColor"
      stroke="currentColor"
      className={props.className}
    >
      <path
        strokeWidth="10"
        d="M668.693 890.168l-8.596-48.748 79.216-13.967-26.504-150.304q-62.331-.738-105.562-48.156-43.231-47.418-56.067-120.208l-34.383-194.997 292.49-51.574 34.383 194.997q12.893 73.123-11.543 132.297-24.435 59.18-82.755 81.191l26.504 150.304 79.215-13.968 8.596 48.748zm54.431-260.92q42.133-7.43 66.709-51.555t20.353-89.456l-216.931 38.25q10.926 44.149 49.33 77.168 38.404 33.021 80.536 25.592zM583.446 477.954l219.362-38.68-21.488-121.87-219.362 38.681zm139.766 151.283z"
        paintOrder="stroke fill markers"
      ></path>
      <path
        strokeWidth="10"
        d="M112.181 851.492l8.596-48.748 79.215 13.968 26.503-150.304q-58.32-22.012-82.726-81.356-24.407-59.344-11.571-132.132l34.383-194.997 292.49 51.574-34.383 194.997q-12.893 73.122-56.096 120.373-43.202 47.254-105.534 47.99l-26.503 150.305 79.215 13.967-8.595 48.748zm140.382-226.567q42.132 7.43 80.319-25.63 38.186-33.058 49.722-77.1l-216.931-38.25q-4.833 45.223 19.962 89.387 24.794 44.164 66.926 51.593zm-79.511-189.948l219.362 38.68 21.488-121.869-219.362-38.68zm79.598 189.959z"
      ></path>
      {/* <path d="M668.693 890.168l-8.596-48.748 79.216-13.967-26.504-150.304q-62.331-.738-105.562-48.156-43.231-47.418-56.067-120.208l-34.383-194.997 292.49-51.574 34.383 194.997q12.893 73.123-11.543 132.297-24.435 59.18-82.755 81.191l26.504 150.304 79.215-13.968 8.596 48.748zm54.431-260.92q42.133-7.43 66.709-51.555t20.353-89.456l-216.931 38.25q10.926 44.149 49.33 77.168 38.404 33.021 80.536 25.592zM583.446 477.954l219.362-38.68-21.488-121.87-219.362 38.681zM112.181 851.492l8.596-48.748 79.215 13.968 26.503-150.304q-58.32-22.012-82.726-81.356-24.407-59.344-11.571-132.132l34.383-194.997 292.49 51.574-34.383 194.997q-12.893 73.122-56.096 120.373-43.202 47.254-105.534 47.99l-26.503 150.305 79.215 13.967-8.595 48.748zm140.382-226.567q42.132 7.43 80.319-25.63 38.186-33.058 49.722-77.1l-216.931-38.25q-4.833 45.223 19.962 89.387 24.794 44.164 66.926 51.593zm-79.511-189.948l219.362 38.68 21.488-121.869-219.362-38.68z"></path> */}
    </svg>
  );
};

export const Alarm = (props: iconProp) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 96 960 960"
      fill="currentColor"
      className={props.className}
    >
      <path d="M479 974q-74 0-139.5-28t-114-76.5q-48.5-48.5-77-114T120 615.267q0-74.733 28.5-140T225.5 361q48.5-49 114-77T479 256q74 0 139.5 28T733 361q49 49 77 114.267t28 140Q838 690 810 755.5t-77 114Q684 918 618.5 946T479 974zm0-357zm121 161l42-42-130-130V416h-60v214l148 148zM214 189l42 42L92 389l-42-42 164-158zm530 0l164 158-42 42-164-158 42-42zM479.043 914Q604 914 691 826.957t87-212Q778 490 690.957 403t-212-87Q354 316 267 403.043t-87 212Q180 740 267.043 827t212 87z"></path>
    </svg>
  );
};

export const CheckCircle = (props: iconProp) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={props.className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

export const RadioUnchecked = (props: iconProp) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 -960 960 960"
      className={props.className}
    >
      <ellipse
        cx="480.5"
        cy="-480.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="95.601"
        rx="352.2"
        ry="352.2"
      ></ellipse>{" "}
    </svg>
  );
};

export const RadioChecked = (props: iconProp) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 -960 960 960"
      className={props.className}
    >
      <ellipse
        cx="480.5"
        cy="-480.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="95.601"
        rx="352.2"
        ry="352.2"
      ></ellipse>
      <circle cx="480" cy="-480" r="186"></circle>
    </svg>
  );
};