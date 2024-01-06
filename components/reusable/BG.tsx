function BG({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 1440 250"
      className={className}
    >
      <g fill="none" mask='url("#SvgjsMask1009")'>
        <path
          fill="url(#SvgjsLinearGradient1010)"
          d="M31 250L281 0h204L235 250zM239.6 250l250-250h351l-250 250z"
        ></path>
        <path
          fill="url(#SvgjsLinearGradient1010)"
          d="M506.2 250l250-250h277.5l-250 250z"
        ></path>
        <path
          fill="url(#SvgjsLinearGradient1010)"
          d="M735.8 250l250-250h283.5l-250 250z"
        ></path>
        <path
          fill="url(#SvgjsLinearGradient1011)"
          d="M1430 250L1180 0H967l250 250zM1175.4 250L925.4 0h-78l250 250zM942.8 250L692.8 0H499.3l250 250zM705.2 250L455.2 0h-312l250 250z"
        ></path>
        <path
          fill="url(#SvgjsLinearGradient1010)"
          d="M1196.102 250L1440 6.102V250z"
        ></path>
        <path
          fill="url(#SvgjsLinearGradient1011)"
          d="M0 250h243.898L0 6.102z"
        ></path>
      </g>
      <defs>
        <mask id="SvgjsMask1009">
          <path fill="#fff" d="M0 0H1440V250H0z"></path>
        </mask>
        <linearGradient
          id="SvgjsLinearGradient1010"
          x1="0%"
          x2="100%"
          y1="100%"
          y2="0%"
        >
          <stop offset="0" stopColor="rgba(25, 84, 188, 0.27)"></stop>
          <stop
            offset="0.66"
            stopColor="rgba(25, 84, 188, 0.27)"
            stopOpacity="0"
          ></stop>
        </linearGradient>
        <linearGradient
          id="SvgjsLinearGradient1011"
          x1="100%"
          x2="0%"
          y1="100%"
          y2="0%"
        >
          <stop offset="0" stopColor="rgba(25, 84, 188, 0.27)"></stop>
          <stop
            offset="0.66"
            stopColor="rgba(25, 84, 188, 0.27)"
            stopOpacity="0"
          ></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default BG;
