interface SoftworksLogoProps {
  className?: string;
}

export default function SoftworksLogo({ className = "w-10 h-10" }: SoftworksLogoProps) {
  return (
    <div className={className}>
      <img 
        src="/assets/softworks-logo-transparent.png" 
        alt="Softworks Logo" 
        className="w-full h-full object-contain" 
      />
    </div>
  );
}