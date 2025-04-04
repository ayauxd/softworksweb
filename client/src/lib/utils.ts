import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Scrolls smoothly to a DOM element with the given ID.
 * @param sectionId The ID of the element to scroll to.
 * @param e Optional React MouseEvent to prevent default anchor behavior.
 */
export const scrollToSection = (sectionId: string, e?: React.MouseEvent) => {
  if (e) {
    e.preventDefault();
  }
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.warn(`[scrollToSection] Element with ID "${sectionId}" not found.`);
  }
};
