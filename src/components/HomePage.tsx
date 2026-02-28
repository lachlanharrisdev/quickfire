import { WidgetContainer } from "./widgets/WidgetContainer";
import { LocationWidget } from "./widgets/LocationWidget";
import { MapWidget } from "./widgets/MapWidget";
import { ABCWidget } from "./widgets/ABCWidget";
import { WeatherWidget } from "./widgets/WeatherWidget";
import { SunWidget } from "./widgets/SunWidget";
import { Navbar } from "./Navbar";

export function HomePage() {
  return (
    <>
      {/* primary widget */}
      <WidgetContainer
        className="flex-[5] min-h-0"
        labels={["Location", "Map", "ABC"]}
        widgets={[
          <LocationWidget key="loc" />,
          <MapWidget key="map" />,
          <ABCWidget key="abc" />,
        ]}
      />

      {/* secondary widget */}
      <WidgetContainer
        className="flex-[3] min-h-0"
        labels={["Weather", "Sun & Light"]}
        widgets={[<WeatherWidget key="weather" />, <SunWidget key="sun" />]}
      />

      {/* and the navbar */}
      <Navbar active="home" />
    </>
  );
}
