const HISTORICAL_RUNS = [
  {
    model: "Porsche 911 GT3 RS (992)",
    year: 2023,
    hp: 518,
    weightKg: 1450,
    drivetrain: "RWD",
    tire: "cup2",
    aero: 8,
    tempC: 18,
    lapSeconds: 406.0,
  },
  {
    model: "Mercedes-AMG GT Black Series",
    year: 2021,
    hp: 720,
    weightKg: 1540,
    drivetrain: "RWD",
    tire: "semi",
    aero: 9,
    tempC: 17,
    lapSeconds: 403.0,
  },
  {
    model: "Lamborghini Aventador SVJ",
    year: 2018,
    hp: 759,
    weightKg: 1525,
    drivetrain: "AWD",
    tire: "cup2",
    aero: 8,
    tempC: 20,
    lapSeconds: 404.0,
  },
  {
    model: "Porsche 911 GT2 RS MR",
    year: 2018,
    hp: 690,
    weightKg: 1470,
    drivetrain: "RWD",
    tire: "semi",
    aero: 9,
    tempC: 16,
    lapSeconds: 398.0,
  },
  {
    model: "Nissan GT-R Nismo",
    year: 2020,
    hp: 600,
    weightKg: 1720,
    drivetrain: "AWD",
    tire: "sport",
    aero: 6,
    tempC: 19,
    lapSeconds: 431.0,
  },
  {
    model: "Chevrolet Corvette Z06 (C8)",
    year: 2024,
    hp: 670,
    weightKg: 1561,
    drivetrain: "RWD",
    tire: "cup2",
    aero: 7,
    tempC: 19,
    lapSeconds: 427.0,
  },
  {
    model: "BMW M4 CSL",
    year: 2022,
    hp: 543,
    weightKg: 1625,
    drivetrain: "RWD",
    tire: "cup2",
    aero: 6,
    tempC: 18,
    lapSeconds: 438.0,
  },
  {
    model: "Audi RS3",
    year: 2022,
    hp: 401,
    weightKg: 1570,
    drivetrain: "AWD",
    tire: "sport",
    aero: 4,
    tempC: 21,
    lapSeconds: 455.0,
  },
  {
    model: "Honda Civic Type R (FL5)",
    year: 2023,
    hp: 315,
    weightKg: 1420,
    drivetrain: "FWD",
    tire: "sport",
    aero: 4,
    tempC: 20,
    lapSeconds: 464.0,
  },
  {
    model: "Renault Megane R.S. Trophy-R",
    year: 2019,
    hp: 296,
    weightKg: 1306,
    drivetrain: "FWD",
    tire: "semi",
    aero: 5,
    tempC: 18,
    lapSeconds: 460.0,
  },
  {
    model: "Ford Mustang GTD",
    year: 2025,
    hp: 800,
    weightKg: 1770,
    drivetrain: "RWD",
    tire: "semi",
    aero: 9,
    tempC: 17,
    lapSeconds: 420.0,
  },
  {
    model: "Toyota GR Supra (A90)",
    year: 2021,
    hp: 382,
    weightKg: 1540,
    drivetrain: "RWD",
    tire: "road",
    aero: 4,
    tempC: 22,
    lapSeconds: 468.0,
  },
  {
    model: "Alfa Romeo Giulia Quadrifoglio",
    year: 2017,
    hp: 505,
    weightKg: 1620,
    drivetrain: "RWD",
    tire: "sport",
    aero: 5,
    tempC: 20,
    lapSeconds: 452.0,
  },
  {
    model: "Porsche Taycan Turbo GT",
    year: 2024,
    hp: 1092,
    weightKg: 2290,
    drivetrain: "AWD",
    tire: "semi",
    aero: 7,
    tempC: 19,
    lapSeconds: 446.0,
  },
  {
    model: "Tesla Model S Plaid Track Pack",
    year: 2023,
    hp: 1020,
    weightKg: 2160,
    drivetrain: "AWD",
    tire: "semi",
    aero: 6,
    tempC: 20,
    lapSeconds: 444.0,
  },
  {
    model: "Hyundai Ioniq 5 N",
    year: 2025,
    hp: 641,
    weightKg: 2230,
    drivetrain: "AWD",
    tire: "sport",
    aero: 5,
    tempC: 21,
    lapSeconds: 463.0,
  },
  {
    model: "McLaren 765LT",
    year: 2021,
    hp: 755,
    weightKg: 1339,
    drivetrain: "RWD",
    tire: "cup2",
    aero: 8,
    tempC: 18,
    lapSeconds: 410.0,
  },
  {
    model: "Ferrari 488 Pista",
    year: 2019,
    hp: 710,
    weightKg: 1385,
    drivetrain: "RWD",
    tire: "cup2",
    aero: 8,
    tempC: 19,
    lapSeconds: 414.0,
  },
  {
    model: "Porsche Cayman GT4 RS",
    year: 2022,
    hp: 493,
    weightKg: 1415,
    drivetrain: "RWD",
    tire: "cup2",
    aero: 7,
    tempC: 18,
    lapSeconds: 429.0,
  },
  {
    model: "Volkswagen Golf GTI Clubsport S",
    year: 2017,
    hp: 306,
    weightKg: 1360,
    drivetrain: "FWD",
    tire: "sport",
    aero: 4,
    tempC: 20,
    lapSeconds: 470.0,
  },
];

const BASE_CAR_PRESETS = [
  {
    model: "Porsche 911 GT3 RS (992)",
    year: 2023,
    hp: 518,
    weightKg: 1450,
    drivetrain: "RWD",
    tire: "cup2",
    aero: 8,
    tempC: 18,
  },
  {
    model: "BMW M4 CSL",
    year: 2022,
    hp: 543,
    weightKg: 1625,
    drivetrain: "RWD",
    tire: "cup2",
    aero: 6,
    tempC: 18,
  },
  {
    model: "Nissan GT-R Nismo",
    year: 2020,
    hp: 600,
    weightKg: 1720,
    drivetrain: "AWD",
    tire: "sport",
    aero: 6,
    tempC: 19,
  },
  {
    model: "Honda Civic Type R (FL5)",
    year: 2023,
    hp: 315,
    weightKg: 1420,
    drivetrain: "FWD",
    tire: "sport",
    aero: 4,
    tempC: 20,
  },
  {
    model: "Tesla Model S Plaid Track Pack",
    year: 2023,
    hp: 1020,
    weightKg: 2160,
    drivetrain: "AWD",
    tire: "semi",
    aero: 6,
    tempC: 20,
  },
  {
    model: "Chevrolet Corvette Z06 (C8)",
    year: 2024,
    hp: 670,
    weightKg: 1561,
    drivetrain: "RWD",
    tire: "cup2",
    aero: 7,
    tempC: 19,
  },
  {
    model: "Toyota GR Supra (A90)",
    year: 2021,
    hp: 382,
    weightKg: 1540,
    drivetrain: "RWD",
    tire: "road",
    aero: 4,
    tempC: 22,
  },
  {
    model: "Porsche Taycan Turbo GT",
    year: 2024,
    hp: 1092,
    weightKg: 2290,
    drivetrain: "AWD",
    tire: "semi",
    aero: 7,
    tempC: 19,
  },
];

const TIRE_GRIP_MULTIPLIER = {
  road: 0.88,
  sport: 0.94,
  cup2: 1.0,
  semi: 1.05,
  slick: 1.1,
};

const DRIVETRAIN_EFFICIENCY = {
  RWD: 1.0,
  AWD: 0.985,
  FWD: 0.965,
};

const form = document.getElementById("predictor-form");
const carSelect = document.getElementById("car-select");
const yearInput = document.getElementById("year-input");
const hpInput = document.getElementById("hp-input");
const weightInput = document.getElementById("weight-input");
const drivetrainSelect = document.getElementById("drivetrain-select");
const tireSelect = document.getElementById("tire-select");
const tempInput = document.getElementById("temp-input");
const aeroInput = document.getElementById("aero-input");
const aeroValue = document.getElementById("aero-value");

const predictedTimeEl = document.getElementById("predicted-time");
const deltaLineEl = document.getElementById("delta-line");
const confidenceChipEl = document.getElementById("confidence-chip");
const neighborsChipEl = document.getElementById("neighbors-chip");
const factorListEl = document.getElementById("factor-list");
const historyBodyEl = document.getElementById("history-body");

function pad2(value) {
  return String(value).padStart(2, "0");
}

function formatLap(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remaining = seconds - minutes * 60;
  const whole = Math.floor(remaining);
  const millis = Math.round((remaining - whole) * 1000);
  return `${minutes}:${pad2(whole)}.${String(millis).padStart(3, "0")}`;
}

function getPowerToWeightScore(car) {
  const grip = TIRE_GRIP_MULTIPLIER[car.tire] ?? 1;
  const drivetrain = DRIVETRAIN_EFFICIENCY[car.drivetrain] ?? 1;
  const aeroFactor = 0.92 + car.aero * 0.02;
  return (car.hp / car.weightKg) * grip * drivetrain * aeroFactor;
}

function getTempPenalty(tempC) {
  // Around 18C is treated as ideal for this simplified model.
  return Math.abs(tempC - 18) * 0.65;
}

function getWeightedDistance(candidate, input) {
  const p2wA = getPowerToWeightScore(candidate);
  const p2wB = getPowerToWeightScore(input);
  const p2wDiff = Math.abs(p2wA - p2wB) / 0.08;
  const yearDiff = Math.abs(candidate.year - input.year) / 4;
  const tempDiff = Math.abs(candidate.tempC - input.tempC) / 6;
  const weightDiff = Math.abs(candidate.weightKg - input.weightKg) / 220;
  const drivePenalty = candidate.drivetrain === input.drivetrain ? 0 : 0.75;
  const tirePenalty = Math.abs(
    (TIRE_GRIP_MULTIPLIER[candidate.tire] ?? 1) -
      (TIRE_GRIP_MULTIPLIER[input.tire] ?? 1)
  );

  return p2wDiff + yearDiff + tempDiff + weightDiff + drivePenalty + tirePenalty * 4;
}

function estimateLapSeconds(inputCar) {
  const neighbors = HISTORICAL_RUNS.map((run) => {
    const distance = getWeightedDistance(run, inputCar);
    return {
      ...run,
      distance,
      similarity: 1 / (1 + distance),
      weight: 1 / (0.2 + distance),
    };
  })
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 5);

  const weightedLapSum = neighbors.reduce((sum, n) => sum + n.lapSeconds * n.weight, 0);
  const totalWeight = neighbors.reduce((sum, n) => sum + n.weight, 0);
  const baseline = weightedLapSum / totalWeight;

  const idealInput = {
    ...inputCar,
    tempC: 18,
    tire: "slick",
    aero: Math.max(8, inputCar.aero),
  };
  const idealScore = getPowerToWeightScore(idealInput);
  const currentScore = getPowerToWeightScore(inputCar);
  const performanceGap = Math.max(0, idealScore - currentScore);
  const performancePenalty = performanceGap * 46;
  const tempPenalty = getTempPenalty(inputCar.tempC);

  const predicted = baseline + performancePenalty + tempPenalty;
  const confidence = Math.max(
    42,
    Math.min(97, Math.round(100 - neighbors[0].distance * 14 - neighbors[1].distance * 5))
  );

  return {
    predicted,
    confidence,
    neighbors,
    baseline,
    performancePenalty,
    tempPenalty,
  };
}

function getFormCar() {
  return {
    model: carSelect.value,
    year: Number(yearInput.value),
    hp: Number(hpInput.value),
    weightKg: Number(weightInput.value),
    drivetrain: drivetrainSelect.value,
    tire: tireSelect.value,
    tempC: Number(tempInput.value),
    aero: Number(aeroInput.value),
  };
}

function fillFormFromPreset(modelName) {
  const preset = BASE_CAR_PRESETS.find((car) => car.model === modelName);
  if (!preset) {
    return;
  }

  yearInput.value = preset.year;
  hpInput.value = preset.hp;
  weightInput.value = preset.weightKg;
  drivetrainSelect.value = preset.drivetrain;
  tireSelect.value = preset.tire;
  tempInput.value = preset.tempC;
  aeroInput.value = preset.aero;
  aeroValue.textContent = String(preset.aero);
}

function updateFactorList(result, currentCar) {
  const items = [];
  const p2w = (currentCar.hp / currentCar.weightKg).toFixed(3);
  items.push(`Power-to-weight ratio: ${p2w} hp/kg`);
  items.push(
    `Estimated grip package: ${(TIRE_GRIP_MULTIPLIER[currentCar.tire] * 100).toFixed(
      0
    )}% baseline`
  );
  items.push(`Performance adjustment: +${result.performancePenalty.toFixed(1)}s`);
  items.push(`Temperature adjustment: +${result.tempPenalty.toFixed(1)}s`);

  factorListEl.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function renderHistory(neighbors) {
  historyBodyEl.innerHTML = neighbors
    .map(
      (run) => `
        <tr>
          <td>${run.model}</td>
          <td>${run.year}</td>
          <td>${run.hp}hp / ${run.weightKg}kg / ${run.tire.toUpperCase()}</td>
          <td>${formatLap(run.lapSeconds)}</td>
          <td>${Math.round(run.similarity * 100)}%</td>
        </tr>
      `
    )
    .join("");
}

function updatePrediction() {
  const car = getFormCar();
  const result = estimateLapSeconds(car);
  const nearest = result.neighbors[0];
  const delta = result.predicted - nearest.lapSeconds;

  predictedTimeEl.textContent = formatLap(result.predicted);
  deltaLineEl.textContent = `vs closest record (${nearest.model}): ${
    delta >= 0 ? "+" : ""
  }${delta.toFixed(2)}s`;
  confidenceChipEl.textContent = `Confidence: ${result.confidence}%`;
  neighborsChipEl.textContent = `Similar runs: ${result.neighbors.length}`;

  updateFactorList(result, car);
  renderHistory(result.neighbors);
}

function initCarSelect() {
  BASE_CAR_PRESETS.forEach((car, index) => {
    const option = document.createElement("option");
    option.value = car.model;
    option.textContent = car.model;
    if (index === 0) {
      option.selected = true;
    }
    carSelect.append(option);
  });
}

function bindEvents() {
  carSelect.addEventListener("change", () => {
    fillFormFromPreset(carSelect.value);
    updatePrediction();
  });

  aeroInput.addEventListener("input", () => {
    aeroValue.textContent = aeroInput.value;
    updatePrediction();
  });

  const trackedFields = [
    yearInput,
    hpInput,
    weightInput,
    drivetrainSelect,
    tireSelect,
    tempInput,
  ];

  trackedFields.forEach((field) =>
    field.addEventListener("input", () => {
      updatePrediction();
    })
  );
}

function bootstrap() {
  initCarSelect();
  fillFormFromPreset(BASE_CAR_PRESETS[0].model);
  updatePrediction();
  bindEvents();
}

bootstrap();
