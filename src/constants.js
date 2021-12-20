
const colour = [
  "#076FEA", "#076FEA", "#076FEA", "#076FEA", // blue
  "#7849FF", "#7849FF", "#7849FF", // purple
  "#EAAA07", "#EAAA07", "#EAAA07", "#EAAA07", "#EAAA07" // orange
]

const topics = [
  "Clouds, Ceiling, Visibility & Fog",
  "Pressure, Temperature, Winds & Wind Shear",
  "Turbulence & Icing",
  "Thunderstorms & Aviation Weather Services",
  "Winter Weather",
  "Winter Mountain Weather",
  "Snow Conditions",
  "Winds and Waves",
  "Large-Scale Winds",
  "Local Wind and Tide Effects",
  "Marine Weather Services"
]

const concepts = [
  // 1
  {
    a: {
      name: "Identify & classify clouds, and relate them to local and larger-scale weather systems and to potential hazards to aircraft",
      url: "1/a.html",
    },
    b: {
      name: "Recognize and explain special clouds (e.g., castellanus, billow, lenticular, rotor, banner, fractus, etc.)",
      url: "1/b.html"
    },
    c: {
      name: "Relate cloud coverage amounts to the visual appearance of the sky",
      url: "1/c.html"
    },
    d: {
      name: "Define the cloud ceiling, estimate its altitude, and relate it to cloud coverage amounts",
      url: "1/d.html"
    },
    e: {
      name: "Contrast horizontal visibility, vertical visibility, runway visual range, and discuss how they affect aviation",
      url: "1/e.html"
    },
    f: {
      name: "Recognize and interpret weather and obscuration glyphs on weather charts",
      url: "1/f.html"
    },
    g: {
      name: "Explain the difference between visual & instrument flight rules (VFR, IFR) and meteorological conditions (VFC, VMC, IFC, IMC), and how they affect aviation",
      url: "1/g.html"
    },
    h: {
      name: "Anticipate when fog might occur based on location, humidity, temperature, winds, and cloudcover, and how fog affects aviation",
      url: "1/h.html"
    },
    i: {
      name: "Explain the nature of these obscurations: haze, smoke, blowing dust/sand, blowing snow, volcanic ash, rain, and how they affect aviation",
      url: "1/i.html"
    },
  },
  // 2
  {
    a: {
      name: "Draw and explain the variation of pressure and density with altitude",
      url: "2/a.html"
    },
    b: {
      name: "Explain how reduced oxygen and/or high altitude affects pilot physiology",
      url: "2/b.html"
    },
    c: {
      name: "Determine 'density altitude' and explain why pilots use it",
      url: "2/c.html"
    },
    d: {
      name: "Compute crosswind & headwind components",
      url: "2/d.html"
    },
    e: {
      name: "Identify the causes and typical locations of wind shear at aerodromes",
      url: "2/e.html"
    },
    f: {
      name: "Relate updrafts for soaring to causes including thermals, anabatic winds, and mountain waves",
      url: "2/f.html"
    },
  },
  // 3
  {
    a: {
      name: "Identify atmospheric layers according to temperature characteristics in the standard atmosphere",
      url: "3/a.html"
    },
    b: {
      name: "Determine the static stability given temperature soundings, and describe its effects on air motion and on aviation",
      url: "3/b.html"
    },
    c: {
      name: "Describe how different types of turbulence form, and relate turbulence intensities to aircraft behavior",
      url: "3/c.html"
    },
    d: {
      name: "Describe the characteristics and causes of mountain waves, relate them to winds and stability using the Froude-number, and describe how they affect flight",
      url: "3/d.html"
    },
    e: {
      name: "Describe the characteristics and causes of clear air turbulence (CAT), relate them to winds shear & stability",
      url: "3/e.html"
    },
    f: {
      name: "Compare the characteristics and causes of boundary-layer & obstacle/mountain-wake turbulence, and describe their effects on aviation",
      url: "3/f.html"
    },
    g: {
      name: "Explain how and where supercooled water forms, and explain how ice on aircraft affects flight",
      url: "3/g.html"
    },
    h: {
      name: "Locate likely areas of turbulence, icing, and thunderstorms relative to drylines and to warm, cold & occluded fronts, and describe how these frontal hazards affect aviation",
      url: "3/h.html"
    },
  },
  // 4
  {
    a: {
      name: "Describe thunderstorm cells, the different types of thunderstorms, and their hazards to aviation",
      url: "4/a.html"
    },
    bh: {
      name: "Identify thunderstorm hazards to flight & how to avoid them. Details of these hazards are in Learning Goals 4c-h",
      url: "4/bh.html"
    },
    i: {
      name: "Access real-time weather info online from aviation weather services",
      url: "4/i.html"
    },
  },
  // 5
  {
    a: {
      name: "Interpret temperature from pressure-level maps",
      url: "5/a.html"
    },
    b: {
      name: "Interpret winds from pressure-level maps in terms of ski safety",
      url: "5/b.html"
    },
    c: {
      name: "Interpret clouds and moisture on pressure-level maps in terms of ski safety",
      url: "5/c.html"
    },
    d: {
      name: "Use your knowledge of mean sea level pressure to identify low pressure systems and troughs on pressure maps",
      url: "5/d.html"
    },
    e: {
      name: "Use your knowledge of mean sea level pressure to identify high pressure systems and ridges on pressure maps",
      url: "5/e.html"
    },
    f: {
      name: "Identify the location of cold and warm fronts using multiple weather maps",
      url: "5/f.html"
    },
    g: {
      name: "List the weather conditions associated with a cold front and their relevance to snow sports",
      url: "5/g.html"
    },
    h: {
      name: "List the weather conditions associated with a warm front and their relevance to snow sports",
      url: "5/h.html"
    },
    // i is part of e
    j: {
      name: "List the weather conditions associated with a high pressure system and their relevance to snow sports",
      url: "5/j.html"
    },
    k: {
      name: "Use wind and pressure maps to predict areas of light/calm winds",
      url: "5/k.html"
    },
    l: {
      name: "List and give specific examples of the types of resources you would use for past, current, and future weather information",
      url: "5/l.html"
    },
    // m?
    n: {
      name: "Explain the limitations of different types of satellite imagery",
      url: "5/n.html"
    }
    // o?
  },
  // 6
  {
    a: {
      name: "Explain the causes and effects of cold air pooling",
      url: "6/a.html"
    },
    b: {
      name: "Describe the diurnal evolution of slope flows",
      url: "6/b.html"
    },
    c: {
      name: "Explain what a temperature inversion is and why it is important to mountain recreation",
      url: "6/c.html"
    },
    d: {
      name: "Identify conditions that favour valley cloud/fog formation and dissipation",
      url: "6/d.html"
    },
    e: {
      name: "Identify and explain orographic lift and lee shadowing",
      url: "6/e.html"
    },
    f: {
      name: "Identify and explain areas in the mountains that are likely to be wind-exposed",
      url: "6/f.html"
    },
    g: {
      name: "Identify and describe areas in the mountains that are likely to be wind-sheltered",
      url: "6/g.html"
    },
    h: {
      name: "Determine the temperature at your elevation by interpolating from pressure-level maps",
      url: "6/h.html"
    },
    i: {
      name: "List and explain factors affecting heating/cooling at the surface, and adjust your temperature forecast accordingly",
      url: "6/i.html"
    },
    j: {
      name: "Identify unusually warm and cold conditions from observations and weather and snow conditions",
      url: "6/j.html"
    },
    // k?
    l: {
      name: "Recognize the large-scale weather pattern associated with arctic air and outflow",
      url: "6/l.html"
    },
    m: {
      name: "Visualize and explain terrain channelling of winds",
      url: "6/m.html"
    },
    n: {
      name: "Relate pressure levels to ski areas and mountain elevations across southern BC",
      url: "6/n.html"
    }
  },
  // 7
  {
    a: {
      name: "Identify and forecast the freezing level and when precipitation will fall as rain vs. snow",
      url: "7/a.html"
    },
    b: {
      name: "Define snow density and describe what conditions will lead to high vs. low density newly fallen snow, and why this matters to skiers",
      url: "7/b.html"
    },
    c: {
      name: "Describe right-side-up and upside-down snowfall and their significance to skiing and avalanches",
      url: "7/c.html"
    },
    de: {
      name: "Explain the factors that influence snowpack evolution",
      url: "7/de.html"
    },
    f: {
      name: "Describe the properties of a stable and an unstable snowpack and how to assess stability",
      url: "7/f.html"
    },
    g: {
      name: "List characteristics and geographic regions of coastal, continental, and transitional snow climates",
      url: "7/g.html"
    },
    h: {
      name: "Describe the effects of aspect on surface snow evolution",
      url: "7/h.html"
    },
    i: {
      name: "Describe the atmospheric conditions for surface hoar formation and how this might lead to an avalanche",
      url: "7/i.html"
    },
    j: {
      name: "Define an avalanche, and list and describe types of avalanches",
      url: "7/j.html"
    },
    kl: {
      name: "Identify different snow crystal habits by sight",
      url: "7/kl.html"
    },
    mn: {
      name: "Describe what makes an optimal ski run for recreation and racing",
      url: "7/mn.html"
    },
    op: {
      name: "List possible snow-surface conditions found in ski resorts and describe a possible weather scenario that leads to each condition",
      url: "7/op.html"
    }
    // q?
  },
  // 8
  {
    a: {
      name: "Describe wind velocity, fetch, duration, and drag, and how they relate to ocean-wave creation.",
      url: "8/a.html"
    },
    b: {
      name: "1) Describe the relationships between wave characteristics including shape, wavelength, period, amplitude, steepness, phase and group velocities, and wave trains.2) Explain how wind-generated waves, swell, rogue waves, and tsunamis are formed.",
      url: "8/b.html"
    },
    c: {
      name: "Explain how wave and beach-slope characteristics determine the types of breaking waves.",
      url: "8/c.html"
    },
    d: {
      name: "Explain the parameters that need to be considered when forecasting swell from distant storms and the affect of swell on sailboats.",
      url: "8/d.html"
    },
    e: {
      name: "Explain the change in wind speeds and sea state as you move along the Beaufort Wind Force Scale, and which Beaufort-force values are best for recreational sailing.",
      url: "8/e.html"
    },
  },
  // 9
  {
    a: {
      name: "1. Identify the global wind circulations, including the Hadley cell, mid-latitude belt of extratropical cyclones, and Polar cell.2. Describe how the trade winds, westerlies, and easterlies are influenced by the Coriolis effect.",
      url: "9/a.html"
    },
    b: {
      name: "Describe the location of the jet streams in relation to the global circulations and explain how ridges and troughs in the jet streams create midlatitude cyclones and anticyclones that influence surface weather.",
      url: "9/b.html"
    },
    c: {
      name: "Describe the phases of the El Niño-Southern Oscillation (ENSO) and how they affect the trade winds, ocean currents, and the Walker circulation.",
      url: "9/c.html"
    },
    d: {
      name: "Explain the global ocean surface currents and gyres and how they are affected by wind.",
      url: "9/d.html"
    },
    e: {
      name: "Describe hurricane structure, and how and where they form and move.",
      url: "9/e.html"
    },
    f: {
      name: "Describe the characteristics of extratropical cyclones, atmospheric rivers, sting jets, squall lines, waterspouts and downbursts.",
      url: "9/f.html"
    },
    g: {
      name: "1. Describe what different weather systems (ie. High and low pressure, warm and cold fronts) look like when you’re on the water; and2. Describe the effects that wind, tide and current can have on your travel speed and access to certain areas.",
      url: "9/g.html"
    },
  },
  // 10
  {
    a: {
      name: "Explain how the following local winds work and how they apply to sailing: sea breezes, land breezes, katabatic winds, and coastal (barrier) jets.",
      url: "10/a.html"
    },
    b: {
      name: "Describe how inflow and outflow winds work in a coastal inlet.",
      url: "10/b.html"
    },
    c: {
      name: "Identify areas of mesoscale cellular convection (open and closed cells) and horizontal roll vortices in satellite imagery and describe how they are formed.",
      url: "10/c.html"
    },
    d: {
      name: "Describe the forces that drive tidal cycles and how tides relate to currents and sailing.",
      url: "10/d.html"
    },
    e: {
      name: "Describe the processes that drive coastal upwelling, and explain how upwelling and sea surface temperatures create fog.",
      url: "10/e.html"
    },
    f: {
      name: "Recognize and explain optical phenomena over the sea, including mirages, fata morgana, and the green flash.",
      url: "10/f.html"
    },
  },
  // 11
  {
    a: {
      name: "Access the short-term and extended marine forecast for a given location.",
      url: "11/a.html"
    },
    b: {
      name: "Access marine weather warnings and relate them to wind speeds and other hazards that could affect your voyage.",
      url: "11/b.html"
    },
    c: {
      name: "1. Recognize weather map features including highs, lows, fronts, isobars, and use them to infer winds, clouds and bad weather; and2. Utilize forecast maps and barometers to anticipate how future weather will affect your voyage.",
      url: "11/c.html"
    },
    d: {
      name: "Recognize areas of high and low pressure and fronts on satellite images.",
      url: "11/d.html"
    },
    e: {
      name: "Interpret different tides and currents from tide and current tables.",
      url: "11/e.html"
    },
  }
];

export { concepts, colour, topics }