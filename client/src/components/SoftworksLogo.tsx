interface SoftworksLogoProps {
  className?: string;
}

export default function SoftworksLogo({ className = "w-10 h-10" }: SoftworksLogoProps) {
  // Use a fixed version parameter to ensure caching but allow for updates
  const version = "v=20250403";
  
  return (
    <div className={className}>
      <img 
        src={`/assets/new-logo.png?${version}`}
        alt="Softworks Logo" 
        className="w-full h-full object-contain" 
      />
    </div>
  );
}