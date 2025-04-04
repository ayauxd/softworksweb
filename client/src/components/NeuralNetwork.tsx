import { useEffect, useRef, useState, useMemo } from "react";
import { useTheme } from "@/lib/theme-context";

interface NeuralNetworkProps {
  className?: string;
}

// Layer node coordinates for the hierarchical neural network
const inputLayer = [
  { cx: 100, cy: 200, r: 10 },
  { cx: 100, cy: 300, r: 10 },
  { cx: 100, cy: 400, r: 10 },
];

const hiddenLayer1 = [
  { cx: 250, cy: 150, r: 8 },
  { cx: 250, cy: 250, r: 8 },
  { cx: 250, cy: 350, r: 8 },
  { cx: 250, cy: 450, r: 8 },
];

const hiddenLayer2 = [
  { cx: 400, cy: 200, r: 12 }, // Central decision node
  { cx: 400, cy: 300, r: 14 }, // Main processing node
  { cx: 400, cy: 400, r: 12 }, // Central decision node
];

const outputLayer = [
  { cx: 550, cy: 250, r: 9 },
  { cx: 550, cy: 350, r: 9 },
];

const resultNode = { cx: 700, cy: 300, r: 13 };

// Industry icons for nodes
const industryIcons = [
  { id: "finance", symbol: "$", x: 95, y: 200 },
  { id: "healthcare", symbol: "♥", x: 95, y: 300 },
  { id: "logistics", symbol: "↹", x: 95, y: 400 },
];

export default function NeuralNetwork({ className = "" }: NeuralNetworkProps) {
  const { theme } = useTheme();
  const svgRef = useRef<SVGSVGElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const animationFrameRef = useRef<number | null>(null);
  
  // Colors based on theme
  const primaryColor = theme === 'dark' ? "#00BCD4" : "#00BCD4";
  const secondaryColor = theme === 'dark' ? "#4DD0E1" : "#4DD0E1";
  const tertiaryColor = theme === 'dark' ? "#80DEEA" : "#80DEEA";
  const accentColor = theme === 'dark' ? "#FF4081" : "#FF4081";
  const pulseColor = theme === 'dark' ? "#E0F7FA" : "#E0F7FA";
  const bgColor = theme === 'dark' ? "#001218" : "#F9FDFE";
  
  // Generate a path between two nodes using quadratic bezier curve for organic movement
  const generatePath = (start: {cx: number, cy: number}, end: {cx: number, cy: number}, curvature = 0.2) => {
    const midX = (start.cx + end.cx) / 2;
    const midY = (start.cy + end.cy) / 2;
    
    // Add some variation to control points for more organic feel
    const ctrlX = midX + (Math.random() * 30 - 15);
    const ctrlY = midY + (Math.random() * 30 - 15);
    
    return `M${start.cx},${start.cy} Q${ctrlX},${ctrlY} ${end.cx},${end.cy}`;
  };
  
  // Memoize connections to avoid recalculating them on each render
  const connections = useMemo(() => {
    // Helper function to create connections between layers
    const createLayerConnections = (startLayer: any[], endLayer: any[], opacity = 0.5, width = 1) => {
      return startLayer.flatMap((startNode, i) => 
        endLayer.map((endNode, j) => ({
          path: generatePath(startNode, endNode),
          opacity,
          width,
          duration: 2 + ((i * endLayer.length + j) % 3) // Staggered durations
        }))
      );
    };
    
    // Generate all network connections
    return [
      ...createLayerConnections(inputLayer, hiddenLayer1, 0.4, 1),
      ...createLayerConnections(hiddenLayer1, hiddenLayer2, 0.5, 1.2),
      ...createLayerConnections(hiddenLayer2, outputLayer, 0.6, 1.5),
      ...createLayerConnections(outputLayer, [resultNode], 0.7, 2)
    ];
  }, []);
  
  // Lazy load animation when component becomes visible
  useEffect(() => {
    // Create an IntersectionObserver to check if the SVG is visible
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    // Start observing the SVG element
    if (svgRef.current) {
      observer.observe(svgRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  // Handle scroll effects for subtle parallax
  useEffect(() => {
    if (!isVisible) return;
    
    const handleScroll = () => {
      if (svgRef.current) {
        const scrollPosition = window.scrollY;
        const parallaxNodes = svgRef.current.querySelectorAll('.parallax-node');
        
        // Use requestAnimationFrame for better performance
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        
        animationFrameRef.current = requestAnimationFrame(() => {
          parallaxNodes.forEach((node, index) => {
            const factor = 0.05 * (index % 3 + 1); // Different factors for variety
            const yOffset = scrollPosition * factor;
            node.setAttribute('transform', `translate(0, ${yOffset})`);
          });
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isVisible]);
  
  // Generate randomized particle data
  const particles = useMemo(() => {
    // Reduce particle count for better performance
    const particleCount = 20; 
    const result = [];
    
    for (let i = 0; i < particleCount; i++) {
      // Pick a random connection
      const connectionIndex = Math.floor(Math.random() * connections.length);
      const path = connections[connectionIndex].path;
      
      result.push({
        path,
        radius: 1 + Math.random() * 2,
        duration: 1 + Math.random() * 3,
        delay: Math.random() * 5,
        color: i % 5 === 0 ? accentColor : (i % 2 === 0 ? secondaryColor : tertiaryColor)
      });
    }
    
    return result;
  }, [connections, accentColor, secondaryColor, tertiaryColor]);

  // SVG content
  if (!isVisible) {
    // Render a lightweight placeholder until visible
    return (
      <svg 
        ref={svgRef}
        className={className} 
        viewBox="0 0 800 600" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ backgroundColor: bgColor, opacity: 0.1 }}
      />
    );
  }

  return (
    <svg 
      ref={svgRef}
      className={`${className} neural-network`} 
      viewBox="0 0 800 600" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ 
        filter: 'drop-shadow(0 0 12px rgba(0, 188, 212, 0.4))',
        willChange: 'transform' 
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <defs>
        {/* Enhanced gradients for nodes */}
        <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor={secondaryColor} stopOpacity="1"/>
          <stop offset="70%" stopColor={primaryColor} stopOpacity="0.9"/>
          <stop offset="100%" stopColor={primaryColor} stopOpacity="0.7"/>
        </radialGradient>
        
        {/* Input node gradient */}
        <radialGradient id="inputNodeGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#64B5F6" stopOpacity="1"/>
          <stop offset="70%" stopColor="#2196F3" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#1976D2" stopOpacity="0.7"/>
        </radialGradient>
        
        {/* Output node gradient */}
        <radialGradient id="outputNodeGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#81C784" stopOpacity="1"/>
          <stop offset="70%" stopColor="#4CAF50" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#388E3C" stopOpacity="0.7"/>
        </radialGradient>
        
        {/* Result node gradient */}
        <radialGradient id="resultNodeGradient" cx="50%" cy="50%" r="50%" fx="40%" fy="40%">
          <stop offset="0%" stopColor="#FFD54F" stopOpacity="1"/>
          <stop offset="70%" stopColor="#FFC107" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#FFA000" stopOpacity="0.7"/>
        </radialGradient>
        
        {/* Enhanced pulse animation gradient */}
        <radialGradient id="pulseGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor={pulseColor} stopOpacity="0.7"/>
          <stop offset="70%" stopColor={primaryColor} stopOpacity="0.3"/>
          <stop offset="100%" stopColor={primaryColor} stopOpacity="0"/>
        </radialGradient>
        
        {/* Depth shadow for 3D effect */}
        <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur"/>
          <feOffset in="blur" dx="3" dy="3" result="offsetBlur"/>
          <feComponentTransfer in="offsetBlur" result="darkenedBlur">
            <feFuncA type="linear" slope="0.4"/>
          </feComponentTransfer>
          <feMerge>
            <feMergeNode in="darkenedBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        {/* Enhanced Glow filter for nodes */}
        <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feFlood floodColor={primaryColor} floodOpacity="0.5" result="glowColor" />
          <feComposite in="glowColor" in2="blur" operator="in" result="softGlow" />
          <feMerge>
            <feMergeNode in="softGlow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        
        {/* Advanced Line animation with Bezier curve transitions */}
        {/* Create multiple animation patterns with different timings */}
        {[1, 2, 3, 4, 5].map(i => (
          <linearGradient key={`lineGradient${i}`} id={`lineGradient${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={primaryColor} stopOpacity="0.1">
              <animate attributeName="offset" values="0;1" dur={`${1.5 + i * 0.1}s`} repeatCount="indefinite" />
            </stop>
            <stop offset="20%" stopColor={primaryColor} stopOpacity="0.8">
              <animate attributeName="offset" values="0.2;1.2" dur={`${1.5 + i * 0.1}s`} repeatCount="indefinite" />
            </stop>
            <stop offset="40%" stopColor={primaryColor} stopOpacity="0.1">
              <animate attributeName="offset" values="0.4;1.4" dur={`${1.5 + i * 0.1}s`} repeatCount="indefinite" />
            </stop>
          </linearGradient>
        ))}
        
        {/* Common node definitions to reduce DOM size */}
        <circle id="input-node-template" r="10" fill="url(#inputNodeGradient)" filter="url(#nodeGlow)" />
        <circle id="hidden1-node-template" r="8" fill="url(#nodeGradient)" filter="url(#nodeGlow)" />
        <circle id="hidden2-node-template" r="12" fill="url(#nodeGradient)" filter="url(#nodeGlow)" />
        <circle id="output-node-template" r="9" fill="url(#outputNodeGradient)" filter="url(#nodeGlow)" />
        <circle id="result-node-template" r="13" fill="url(#resultNodeGradient)" filter="url(#nodeGlow)" />
      </defs>
      
      {/* Background gradient */}
      <rect x="0" y="0" width="800" height="600" fill={bgColor} opacity="0.1" />
      
      {/* Background pulse effect with enhanced depth */}
      <circle cx="400" cy="300" r="250" fill="url(#pulseGradient)" opacity="0.2">
        <animate attributeName="opacity" values="0.15;0.25;0.15" dur="5s" repeatCount="indefinite" />
        <animate attributeName="r" values="250;270;250" dur="5s" repeatCount="indefinite" />
      </circle>
      
      {/* Network Connections with organic Bezier curves */}
      <g className="connections" style={{ willChange: 'opacity, transform' }}>
        {connections.map((conn, i) => (
          <path
            key={`connection-${i}`}
            d={conn.path}
            stroke={`url(#lineGradient${1 + i % 5})`}
            strokeWidth={conn.width}
            strokeOpacity={isHovering ? conn.opacity + 0.2 : conn.opacity}
            fill="none"
            strokeLinecap="round"
            className="connection-path"
            style={{ willChange: 'opacity' }}
          >
            <animate 
              attributeName="strokeOpacity" 
              values={`${conn.opacity};${conn.opacity + 0.3};${conn.opacity}`} 
              dur={`${3 + (i % 7) * 0.5}s`} 
              repeatCount="indefinite" 
            />
          </path>
        ))}
      </g>
      
      {/* Optimized particle system for data flow visualization */}
      <g className="data-flow" style={{ willChange: 'transform' }}>
        {particles.map((particle, i) => (
          <circle 
            key={`particle-${i}`} 
            r={particle.radius}
            fill={particle.color}
            opacity="0.8"
          >
            <animateMotion 
              path={particle.path} 
              dur={`${particle.duration}s`}
              begin={`${particle.delay}s`}
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0;0.5;1"
              rotate="auto"
            />
          </circle>
        ))}
      </g>
      
      {/* Neural Network Nodes with layered structure - using <use> for better performance */}
      <g className="nodes">
        {/* Input Layer Nodes */}
        {inputLayer.map((node, i) => (
          <g key={`input-${i}`} className="parallax-node">
            <use 
              href="#input-node-template" 
              x={node.cx} 
              y={node.cy}
              className="node input-node"
            >
              <animate 
                attributeName="r" 
                values={`${node.r};${node.r + 2};${node.r}`} 
                dur={`${3 + i * 0.7}s`} 
                repeatCount="indefinite" 
              />
              {isHovering && (
                <animate 
                  attributeName="x" 
                  values={`${node.cx};${node.cx + 5};${node.cx}`} 
                  dur={`${5 + i * 0.5}s`}
                  repeatCount="indefinite" 
                />
              )}
            </use>
            
            {/* Industry icon */}
            <text 
              x={industryIcons[i].x} 
              y={industryIcons[i].y} 
              textAnchor="middle" 
              dominantBaseline="middle" 
              fill="white" 
              fontSize="10"
              className="industry-icon"
            >
              {industryIcons[i].symbol}
            </text>
          </g>
        ))}
        
        {/* Hidden Layer 1 Nodes */}
        {hiddenLayer1.map((node, i) => (
          <g key={`hidden1-${i}`} className="parallax-node">
            <use 
              href="#hidden1-node-template" 
              x={node.cx} 
              y={node.cy}
              className="node hidden-node"
            >
              <animate 
                attributeName="r" 
                values={`${node.r};${node.r + 1.5};${node.r}`} 
                dur={`${2.5 + i * 0.6}s`} 
                repeatCount="indefinite" 
              />
              {isHovering && (
                <animate 
                  attributeName="y" 
                  values={`${node.cy};${node.cy + (i % 2 === 0 ? 5 : -5)};${node.cy}`} 
                  dur={`${3 + i * 0.7}s`}
                  repeatCount="indefinite" 
                />
              )}
            </use>
          </g>
        ))}
        
        {/* Hidden Layer 2 Nodes (Main processing nodes) */}
        {hiddenLayer2.map((node, i) => (
          <g key={`hidden2-${i}`} className="parallax-node">
            <use 
              href="#hidden2-node-template" 
              x={node.cx} 
              y={node.cy}
              className="node central-node"
            >
              <animate 
                attributeName="r" 
                values={`${node.r};${node.r + 2};${node.r}`} 
                dur={`${4 - i * 0.3}s`} 
                repeatCount="indefinite" 
              />
              {isHovering && (
                <animate 
                  attributeName="y" 
                  values={`${node.cy};${node.cy + (i % 2 === 0 ? -7 : 7)};${node.cy}`} 
                  dur={`${7 + i * 0.3}s`}
                  repeatCount="indefinite" 
                />
              )}
            </use>
          </g>
        ))}
        
        {/* Output Layer Nodes */}
        {outputLayer.map((node, i) => (
          <g key={`output-${i}`} className="parallax-node">
            <use 
              href="#output-node-template" 
              x={node.cx} 
              y={node.cy}
              className="node output-node"
            >
              <animate 
                attributeName="r" 
                values={`${node.r};${node.r + 1.5};${node.r}`} 
                dur={`${3 + i * 0.7}s`} 
                repeatCount="indefinite" 
              />
              {isHovering && (
                <animate 
                  attributeName="x" 
                  values={`${node.cx};${node.cx - 8};${node.cx}`} 
                  dur={`${4 + i * 0.6}s`}
                  repeatCount="indefinite" 
                />
              )}
            </use>
          </g>
        ))}
        
        {/* Result Node (Final output) */}
        <g className="parallax-node">
          <use 
            href="#result-node-template" 
            x={resultNode.cx} 
            y={resultNode.cy}
            className="node result-node"
          >
            <animate 
              attributeName="r" 
              values={`${resultNode.r};${resultNode.r + 3};${resultNode.r}`} 
              dur="5s" 
              repeatCount="indefinite" 
            />
          </use>
          
          {/* Output visualization - concentric circles for result emergence */}
          <circle 
            cx={resultNode.cx} 
            cy={resultNode.cy} 
            r={resultNode.r + 10} 
            fill="none" 
            stroke="#FFC107" 
            strokeWidth="1" 
            strokeOpacity="0.5"
            strokeDasharray="5,3"
          >
            <animate 
              attributeName="r" 
              values={`${resultNode.r + 10};${resultNode.r + 25};${resultNode.r + 10}`} 
              dur="8s" 
              repeatCount="indefinite" 
            />
            <animate 
              attributeName="strokeOpacity" 
              values="0.5;0.1;0.5" 
              dur="8s" 
              repeatCount="indefinite" 
            />
          </circle>
          
          <circle 
            cx={resultNode.cx} 
            cy={resultNode.cy} 
            r={resultNode.r + 20} 
            fill="none" 
            stroke="#FFC107" 
            strokeWidth="0.7" 
            strokeOpacity="0.3"
            strokeDasharray="3,5"
          >
            <animate 
              attributeName="r" 
              values={`${resultNode.r + 20};${resultNode.r + 40};${resultNode.r + 20}`} 
              dur="10s" 
              repeatCount="indefinite" 
            />
            <animate 
              attributeName="strokeOpacity" 
              values="0.3;0.05;0.3" 
              dur="10s" 
              repeatCount="indefinite" 
            />
          </circle>
        </g>
      </g>
    </svg>
  );
}