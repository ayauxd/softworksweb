interface NeuralTreeProps {
  className?: string;
}

export default function NeuralTree({ className = "" }: NeuralTreeProps) {
  return (
    <svg 
      className={`${className}`} 
      viewBox="0 0 400 400" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ 
        filter: 'drop-shadow(0 0 5px rgba(48, 213, 232, 0.5))' 
      }}
    >
      <defs>
        <radialGradient id="pulse-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#30D5E8" stopOpacity="1"/>
          <stop offset="100%" stopColor="#30D5E8" stopOpacity="0"/>
        </radialGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      {/* Main Neural Tree Structure */}
      <g className="neural-network">
        {/* Static Glow */}
        <circle cx="200" cy="165" r="120" fill="url(#pulse-gradient)" opacity="0.15">
          <animate attributeName="opacity" values="0.15;0.25;0.15" dur="5s" repeatCount="indefinite" />
        </circle>
        
        {/* Main Neural Tree Structure */}
        <path 
          d="M200,50 C220,100 240,150 280,180 C260,220 220,240 200,280 C180,240 140,220 120,180 C160,150 180,100 200,50" 
          fill="none" 
          stroke="#30D5E8" 
          strokeWidth="2" 
          opacity="0.6"
        >
          <animate attributeName="opacity" values="0.6;0.8;0.6" dur="4s" repeatCount="indefinite" />
        </path>
        <path 
          d="M200,50 C210,90 240,120 260,160 C240,200 220,220 200,250 C180,220 160,200 140,160 C160,120 190,90 200,50" 
          fill="none" 
          stroke="#30D5E8" 
          strokeWidth="3" 
          opacity="0.8"
        >
          <animate attributeName="opacity" values="0.8;1;0.8" dur="3.5s" repeatCount="indefinite" />
        </path>
        <path 
          d="M200,80 C210,120 230,150 240,180 C230,200 210,220 200,240 C190,220 170,200 160,180 C170,150 190,120 200,80" 
          fill="none" 
          stroke="#30D5E8" 
          strokeWidth="4"
        />
        
        {/* Neural Nodes (circles) */}
        <circle 
          cx="200" cy="50" r="8" 
          fill="#30D5E8" 
          filter="url(#glow)"
        >
          <animate attributeName="r" values="8;10;8" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle 
          cx="280" cy="180" r="10" 
          fill="#30D5E8" 
          filter="url(#glow)"
        >
          <animate attributeName="r" values="10;12;10" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle 
          cx="120" cy="180" r="10" 
          fill="#30D5E8" 
          filter="url(#glow)"
        >
          <animate attributeName="r" values="10;12;10" dur="4.5s" repeatCount="indefinite" />
        </circle>
        <circle 
          cx="200" cy="280" r="12" 
          fill="#30D5E8" 
          filter="url(#glow)"
        >
          <animate attributeName="r" values="12;14;12" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle 
          cx="240" cy="130" r="6" 
          fill="#30D5E8" 
          filter="url(#glow)"
        >
          <animate attributeName="r" values="6;7;6" dur="3.2s" repeatCount="indefinite" />
        </circle>
        <circle 
          cx="160" cy="130" r="6" 
          fill="#30D5E8" 
          filter="url(#glow)"
        >
          <animate attributeName="r" values="6;7;6" dur="3.7s" repeatCount="indefinite" />
        </circle>
        <circle 
          cx="220" cy="220" r="7" 
          fill="#30D5E8" 
          filter="url(#glow)"
        >
          <animate attributeName="r" values="7;9;7" dur="4.2s" repeatCount="indefinite" />
        </circle>
        <circle 
          cx="180" cy="220" r="7" 
          fill="#30D5E8" 
          filter="url(#glow)"
        >
          <animate attributeName="r" values="7;9;7" dur="4.7s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
}
