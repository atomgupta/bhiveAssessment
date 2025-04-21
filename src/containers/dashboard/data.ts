import { Feature } from "../../types";
import Calendar from "../dashboard/../../assets/calendar.svg";
import Fitness from "../dashboard/../../assets/fitness.svg";
import WifiIcon from "../dashboard/../../assets/wifi.svg";
import LocalCafe from "../dashboard/../../assets/local-cafe.svg";
import CurrencyRupee from "../dashboard/../../assets/currency-rupee.svg";
import Living from "../dashboard/../../assets/living.svg";
import Restore from "../dashboard/../../assets/restore.svg";
import SportsTennis from "../dashboard/../../assets/sports-tennis.svg";
export const features: Array<Feature> = [
  {
    id: 1,
    feature: "Community Events",
    icon: Calendar,
  },
  {
    id: 2,
    feature: "Gym Facilities",
    icon: Fitness,
  },
  {
    id: 3,
    feature: "High-Speed WiFi",
    icon: WifiIcon,
  },
  {
    id: 4,
    feature: "Cafe & Tea Bar",
    icon: LocalCafe,
  },
  {
    id: 5,
    feature: "Affordable",
    icon: CurrencyRupee,
  },
  {
    id: 6,
    feature: "Comfort Lounges",
    icon: Living,
  },
  {
    id: 7,
    feature: "Quick Booking",
    icon: Restore,
  },
  {
    id: 8,
    feature: "Sports Area",
    icon: SportsTennis
  },
];
