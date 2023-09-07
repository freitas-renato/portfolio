import { useInView } from 'react-intersection-observer';
import { useEffect } from "react";
import { useActiveSectionContext } from "@/context/active-section-context";

export function useActiveSectionInView(sectionName: string, threshold = 0.3) {
    const { activeSection, setActiveSection } = useActiveSectionContext();
    const { ref, inView, entry } = useInView({
        threshold: threshold,
    });

    useEffect(() => {
        if (inView) {
            console.log(entry);
            setActiveSection(sectionName);
        }
    }, [inView, entry, setActiveSection, sectionName]);

    return {
        ref
    }
}