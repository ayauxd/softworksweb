interface SoftworksLogoProps {
  className?: string;
}

export default function SoftworksLogo({ className = "w-10 h-10" }: SoftworksLogoProps) {
  return (
    <svg className={className} viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
      <circle cx="120" cy="120" r="110" fill="none" stroke="#ffffff" strokeWidth="10"/>
      <path d="M70,110 C90,120 110,80 120,60 C130,90 140,100 160,70 C165,100 180,130 190,160 C160,180 130,160 110,140 C90,160 70,180 60,160 C50,130 60,120 70,110" fill="none" stroke="#ffffff" strokeWidth="8"/>
      <circle cx="120" cy="60" r="10" fill="#30D5E8"/>
      <circle cx="160" cy="70" r="10" fill="#30D5E8"/>
      <circle cx="190" cy="160" r="10" fill="#30D5E8"/>
      <circle cx="60" cy="160" r="10" fill="#30D5E8"/>
      <circle cx="70" cy="110" r="10" fill="#30D5E8"/>
    </svg>
  );
}
