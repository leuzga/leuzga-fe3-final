const Preload = () => (
  <div
    style={{
      width: '100%',
      height: '100px',
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 200 200'
      style={{ width: '300px', height: '100px' }}
    >
      <circle
        fill='#ECAB01'
        stroke='#ECAB01'
        strokeWidth='15'
        r='15'
        cx='40'
        cy='65'
      >
        <animate
          attributeName='cy'
          calcMode='spline'
          dur='2'
          values='65;135;65;'
          keySplines='.5 0 .5 1;.5 0 .5 1'
          repeatCount='indefinite'
          begin='-.4'
        ></animate>
      </circle>
      <circle
        fill='#ECAB01'
        stroke='#ECAB01'
        strokeWidth='15'
        r='15'
        cx='100'
        cy='65'
      >
        <animate
          attributeName='cy'
          calcMode='spline'
          dur='2'
          values='65;135;65;'
          keySplines='.5 0 .5 1;.5 0 .5 1'
          repeatCount='indefinite'
          begin='-.2'
        ></animate>
      </circle>
      <circle
        fill='#ECAB01'
        stroke='#ECAB01'
        strokeWidth='15'
        r='15'
        cx='160'
        cy='65'
      >
        <animate
          attributeName='cy'
          calcMode='spline'
          dur='2'
          values='65;135;65;'
          keySplines='.5 0 .5 1;.5 0 .5 1'
          repeatCount='indefinite'
          begin='0'
        ></animate>
      </circle>
      <text x='50%' y='150' textAnchor='middle' fill='black' fontSize='35'>
        Loading...
      </text>
    </svg>
  </div>
);

export default Preload;
