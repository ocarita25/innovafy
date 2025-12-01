import { ourServices } from "@/data/ourServices";
import type { OurServicesType } from "@/types/OurServicesType.types";

export function getServiceInfo(service: string): OurServicesType | null {
    const ourService = ourServices.find(s => s.id === service)
    if (!ourService) return null;
    return ourService
}