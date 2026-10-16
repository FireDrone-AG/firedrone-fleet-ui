"use strict";

// Fictional UI fixtures. No identifiers, people, customers, or evidence here refer to a real aircraft.
const drones = [
  {
    id: "FD-DEMO-003",
    name: "Drone C",
    customer: "Example Utility West",
    location: "Basel test site",
    status: "In service",
    release: "Demo R4",
    lastContact: "16 Oct 2026",
    attention: "Open camera investigation",
    accepted: "10 Oct 2026",
    capture: "CAP-DEMO-048",
    captureDate: "10 Oct 2026",
  },
  {
    id: "FD-DEMO-001",
    name: "Drone A",
    customer: "Example Utility East",
    location: "Zürich depot",
    status: "In service",
    release: "Demo R4",
    lastContact: "15 Oct 2026",
    attention: "None",
    accepted: "02 Oct 2026",
    capture: "CAP-DEMO-041",
    captureDate: "02 Oct 2026",
  },
  {
    id: "FD-DEMO-002",
    name: "Drone B",
    customer: "Example Forestry Co.",
    location: "Bern field base",
    status: "Service due",
    release: "Demo R3",
    lastContact: "13 Oct 2026",
    attention: "Scheduled battery inspection",
    accepted: "18 Sep 2026",
    capture: "CAP-DEMO-036",
    captureDate: "18 Sep 2026",
  },
  {
    id: "FD-DEMO-004",
    name: "Drone D",
    customer: "Internal engineering",
    location: "Lausanne workshop",
    status: "In build",
    release: "Demo R4 candidate",
    lastContact: "14 Oct 2026",
    attention: "Initial acceptance pending",
    accepted: "Pending",
    capture: "CAP-DEMO-051",
    captureDate: "14 Oct 2026",
  },
  {
    id: "FD-DEMO-005",
    name: "Drone E",
    customer: "Example Grid Services",
    location: "Lucerne field base",
    status: "In service",
    release: "Demo R3",
    lastContact: "12 Oct 2026",
    attention: "None",
    accepted: "24 Sep 2026",
    capture: "CAP-DEMO-039",
    captureDate: "24 Sep 2026",
  },
];
const parts = [
  {
    id: "PART-DEMO-001",
    type: "Computer",
    name: "Flight computer",
    serial: "EXAMPLE-SN-001",
    status: "Installed",
    drone: "FD-DEMO-003",
    location: "Drone C",
    received: "02 Sep 2026",
    history: [
      ["02 Sep 2026", "Installed on Drone C", "Assembly · engineer EK"],
      ["29 Aug 2026", "Received at workshop", "Incoming inspection passed"],
    ],
  },
  {
    id: "PART-DEMO-002",
    type: "Camera",
    name: "Front camera",
    serial: "EXAMPLE-SN-002",
    status: "Installed",
    drone: "FD-DEMO-003",
    location: "Drone C",
    received: "02 Sep 2026",
    history: [
      ["02 Sep 2026", "Installed on Drone C", "Assembly · engineer EK"],
    ],
  },
  {
    id: "PART-DEMO-003",
    type: "Camera",
    name: "Left camera",
    serial: "EXAMPLE-SN-003",
    status: "Installed",
    drone: "FD-DEMO-003",
    location: "Drone C",
    received: "18 Sep 2026",
    history: [
      [
        "18 Sep 2026",
        "Installed on Drone C",
        "Replacement · older unit removed",
      ],
      ["15 Sep 2026", "Received at workshop", "Incoming inspection passed"],
    ],
  },
  {
    id: "PART-DEMO-004",
    type: "Camera",
    name: "Right camera",
    serial: "EXAMPLE-SN-004",
    status: "Installed",
    drone: "FD-DEMO-003",
    location: "Drone C",
    received: "02 Sep 2026",
    history: [
      [
        "12 Oct 2026",
        "Inspection requested",
        "Right camera connection under investigation",
      ],
      ["02 Sep 2026", "Installed on Drone C", "Assembly · engineer EK"],
    ],
  },
  {
    id: "PART-DEMO-005",
    type: "Battery",
    name: "Flight battery 01",
    serial: "EXAMPLE-SN-005",
    status: "Installed",
    drone: "FD-DEMO-003",
    location: "Drone C",
    received: "02 Sep 2026",
    history: [
      ["02 Sep 2026", "Assigned to Drone C", "Battery pool assignment"],
    ],
  },
  {
    id: "PART-DEMO-006",
    type: "Radio",
    name: "Data link radio",
    serial: "EXAMPLE-SN-006",
    status: "Installed",
    drone: "FD-DEMO-003",
    location: "Drone C",
    received: "02 Sep 2026",
    history: [
      ["02 Sep 2026", "Installed on Drone C", "Assembly · engineer EK"],
    ],
  },
  {
    id: "PART-DEMO-007",
    type: "Computer",
    name: "Flight computer",
    serial: "EXAMPLE-SN-007",
    status: "Installed",
    drone: "FD-DEMO-001",
    location: "Drone A",
    received: "10 Aug 2026",
    history: [["10 Aug 2026", "Installed on Drone A", "Assembly"]],
  },
  {
    id: "PART-DEMO-008",
    type: "Camera",
    name: "Front camera",
    serial: "EXAMPLE-SN-008",
    status: "Installed",
    drone: "FD-DEMO-001",
    location: "Drone A",
    received: "10 Aug 2026",
    history: [["10 Aug 2026", "Installed on Drone A", "Assembly"]],
  },
  {
    id: "PART-DEMO-009",
    type: "Computer",
    name: "Flight computer",
    serial: "EXAMPLE-SN-009",
    status: "Installed",
    drone: "FD-DEMO-002",
    location: "Drone B",
    received: "22 Aug 2026",
    history: [["22 Aug 2026", "Installed on Drone B", "Assembly"]],
  },
  {
    id: "PART-DEMO-010",
    type: "Camera",
    name: "Front camera",
    serial: "EXAMPLE-SN-010",
    status: "Available",
    drone: null,
    location: "Zürich workshop · shelf R2",
    received: "08 Oct 2026",
    history: [
      [
        "08 Oct 2026",
        "Received at Zürich workshop",
        "Incoming inspection passed",
      ],
    ],
  },
  {
    id: "PART-DEMO-011",
    type: "Camera",
    name: "Left camera",
    serial: "EXAMPLE-SN-011",
    status: "Available",
    drone: null,
    location: "Zürich workshop · shelf R2",
    received: "08 Oct 2026",
    history: [
      [
        "08 Oct 2026",
        "Received at Zürich workshop",
        "Incoming inspection passed",
      ],
    ],
  },
  {
    id: "PART-DEMO-012",
    type: "Computer",
    name: "Flight computer",
    serial: "EXAMPLE-SN-012",
    status: "Available",
    drone: null,
    location: "Lausanne workshop · shelf V1",
    received: "09 Oct 2026",
    history: [
      [
        "09 Oct 2026",
        "Received at Lausanne workshop",
        "Incoming inspection passed",
      ],
    ],
  },
  {
    id: "PART-DEMO-013",
    type: "Battery",
    name: "Flight battery 02",
    serial: "EXAMPLE-SN-013",
    status: "Available",
    drone: null,
    location: "Basel depot · cabinet B",
    received: "11 Oct 2026",
    history: [
      ["11 Oct 2026", "Returned to depot", "Cycle check passed"],
      ["02 Oct 2026", "Used for field test", "Drone E · temporary assignment"],
    ],
  },
  {
    id: "PART-DEMO-014",
    type: "Radio",
    name: "Data link radio",
    serial: "EXAMPLE-SN-014",
    status: "Reserved",
    drone: "FD-DEMO-004",
    location: "Lausanne workshop · Drone D build",
    received: "10 Oct 2026",
    history: [
      ["12 Oct 2026", "Reserved for Drone D", "Pending assembly"],
      ["10 Oct 2026", "Received at workshop", "Incoming inspection passed"],
    ],
  },
  {
    id: "PART-DEMO-015",
    type: "Camera",
    name: "Former left camera",
    serial: "EXAMPLE-SN-015",
    status: "Service",
    drone: null,
    location: "Zürich workshop · repair bench",
    received: "01 Aug 2026",
    history: [
      [
        "18 Sep 2026",
        "Removed from Drone C",
        "Replaced after an intermittent connection issue",
      ],
      ["02 Sep 2026", "Installed on Drone C", "Initial assembly"],
    ],
  },
  {
    id: "PART-DEMO-016",
    type: "Battery",
    name: "Flight battery 03",
    serial: "EXAMPLE-SN-016",
    status: "Available",
    drone: null,
    location: "Bern field base",
    received: "01 Oct 2026",
    history: [
      [
        "01 Oct 2026",
        "Received at Bern field base",
        "Incoming inspection passed",
      ],
    ],
  },
  {
    id: "PART-DEMO-017",
    type: "Computer",
    name: "Flight computer",
    serial: "EXAMPLE-SN-017",
    status: "Installed",
    drone: "FD-DEMO-005",
    location: "Drone E",
    received: "04 Sep 2026",
    history: [["04 Sep 2026", "Installed on Drone E", "Assembly"]],
  },
];
const baseEvents = [
  {
    id: "EVT-DEMO-021",
    drone: "FD-DEMO-003",
    date: "16 Oct 2026",
    sort: "2026-10-16T10:23",
    type: "flight",
    title: "Flight 184 · field validation",
    summary:
      "34 min flight. Temperature log peaked at 44 °C ambient; a separate right camera warning also needs review.",
    actor: "Engineer EK",
    evidence: "Flight FL-DEMO-184 · 4 log references · warning WARN-DEMO-08",
    parts: [],
  },
  {
    id: "EVT-DEMO-020",
    drone: "FD-DEMO-003",
    date: "12 Oct 2026",
    sort: "2026-10-12T14:30",
    type: "service",
    title: "Investigated right camera timeout",
    summary:
      "Device intermittently unavailable. Connections checked; investigation remains open.",
    actor: "Engineer ML",
    evidence: "Session SVC-DEMO-026 · diagnostic log LOG-DEMO-159",
    parts: ["PART-DEMO-004"],
  },
  {
    id: "EVT-DEMO-019",
    drone: "FD-DEMO-003",
    date: "10 Oct 2026",
    sort: "2026-10-10T17:00",
    type: "change",
    title: "Upgraded from Demo R3 to R4",
    summary:
      "Computer software updated and settings reviewed. Before/after captures and supervised tests attached.",
    actor: "Engineer EK",
    evidence:
      "CAP-DEMO-047 → CAP-DEMO-048 · test RUN-DEMO-012 · signoff ACCEPT-DEMO-05",
    parts: ["PART-DEMO-001"],
  },
  {
    id: "EVT-DEMO-018",
    drone: "FD-DEMO-003",
    date: "03 Oct 2026",
    sort: "2026-10-03T16:40",
    type: "flight",
    title: "Flight 163 · customer site",
    summary:
      "Routine flight completed; camera recording retained in protected log storage.",
    actor: "Engineer EK",
    evidence: "Flight FL-DEMO-163 · protected log bundle LOG-DEMO-141",
    parts: [],
  },
  {
    id: "EVT-DEMO-017",
    drone: "FD-DEMO-003",
    date: "18 Sep 2026",
    sort: "2026-09-18T13:00",
    type: "service",
    title: "Replaced left camera",
    summary:
      "Removed intermittent unit, fitted new camera and recalibrated extrinsics.",
    actor: "Engineer ML",
    evidence:
      "SVC-DEMO-019 · calibration CAL-DEMO-011 · after capture CAP-DEMO-033",
    parts: ["PART-DEMO-015", "PART-DEMO-003"],
  },
  {
    id: "EVT-DEMO-016",
    drone: "FD-DEMO-003",
    date: "02 Sep 2026",
    sort: "2026-09-02T18:00",
    type: "assembly",
    title: "Assembly and initial acceptance",
    summary:
      "Computer, three cameras, radio and battery recorded. Baseline capture, calibration and checklist signed.",
    actor: "Engineer EK",
    evidence:
      "Assembly ASM-DEMO-003 · capture CAP-DEMO-014 · acceptance ACCEPT-DEMO-01",
    parts: [
      "PART-DEMO-001",
      "PART-DEMO-002",
      "PART-DEMO-004",
      "PART-DEMO-005",
      "PART-DEMO-006",
    ],
  },
  {
    id: "EVT-DEMO-032",
    drone: "FD-DEMO-001",
    date: "15 Oct 2026",
    sort: "2026-10-15T14:00",
    type: "flight",
    title: "Flight 92 · powerline survey",
    summary: "Routine sortie; logs available in protected storage.",
    actor: "Engineer ML",
    evidence: "Flight FL-DEMO-092 · log LOG-DEMO-171",
    parts: [],
  },
  {
    id: "EVT-DEMO-031",
    drone: "FD-DEMO-001",
    date: "02 Oct 2026",
    sort: "2026-10-02T17:00",
    type: "change",
    title: "Accepted Demo R4",
    summary: "Upgrade checks passed with before/after captures.",
    actor: "Engineer EK",
    evidence: "CAP-DEMO-040 → CAP-DEMO-041 · ACCEPT-DEMO-04",
    parts: [],
  },
  {
    id: "EVT-DEMO-030",
    drone: "FD-DEMO-001",
    date: "10 Aug 2026",
    sort: "2026-08-10T18:00",
    type: "assembly",
    title: "Assembly and initial acceptance",
    summary: "Parts installed, calibration captured and checks signed.",
    actor: "Engineer EK",
    evidence: "ASM-DEMO-001 · CAP-DEMO-006",
    parts: ["PART-DEMO-007", "PART-DEMO-008"],
  },
  {
    id: "EVT-DEMO-042",
    drone: "FD-DEMO-002",
    date: "13 Oct 2026",
    sort: "2026-10-13T15:00",
    type: "service",
    title: "Battery inspection scheduled",
    summary: "Engineer flagged a battery for next workshop visit.",
    actor: "Engineer ML",
    evidence: "SVC-DEMO-029 · pending",
    parts: [],
  },
  {
    id: "EVT-DEMO-041",
    drone: "FD-DEMO-002",
    date: "18 Sep 2026",
    sort: "2026-09-18T18:00",
    type: "change",
    title: "Accepted Demo R3",
    summary: "Release and configuration checks completed.",
    actor: "Engineer EK",
    evidence: "CAP-DEMO-036 · ACCEPT-DEMO-03",
    parts: [],
  },
  {
    id: "EVT-DEMO-040",
    drone: "FD-DEMO-002",
    date: "22 Aug 2026",
    sort: "2026-08-22T18:00",
    type: "assembly",
    title: "Initial assembly",
    summary: "Flight computer and first sensor set recorded.",
    actor: "Engineer EK",
    evidence: "ASM-DEMO-002",
    parts: ["PART-DEMO-009"],
  },
  {
    id: "EVT-DEMO-051",
    drone: "FD-DEMO-004",
    date: "14 Oct 2026",
    sort: "2026-10-14T11:00",
    type: "service",
    title: "Pre-acceptance checks",
    summary: "Initial setup under way; field acceptance has not been signed.",
    actor: "Engineer ML",
    evidence: "CAP-DEMO-051 · checklist pending",
    parts: ["PART-DEMO-014"],
  },
  {
    id: "EVT-DEMO-050",
    drone: "FD-DEMO-004",
    date: "09 Oct 2026",
    sort: "2026-10-09T13:00",
    type: "assembly",
    title: "Assembly started",
    summary: "Frame and electronics assembly started at Lausanne workshop.",
    actor: "Engineer ML",
    evidence: "ASM-DEMO-004",
    parts: [],
  },
  {
    id: "EVT-DEMO-061",
    drone: "FD-DEMO-005",
    date: "12 Oct 2026",
    sort: "2026-10-12T13:00",
    type: "flight",
    title: "Flight 48 · inspection",
    summary: "Normal flight; no open issues.",
    actor: "Engineer EK",
    evidence: "FL-DEMO-048 · LOG-DEMO-164",
    parts: [],
  },
  {
    id: "EVT-DEMO-060",
    drone: "FD-DEMO-005",
    date: "24 Sep 2026",
    sort: "2026-09-24T17:00",
    type: "change",
    title: "Accepted Demo R3",
    summary: "Software and sensor check passed.",
    actor: "Engineer EK",
    evidence: "CAP-DEMO-039 · ACCEPT-DEMO-06",
    parts: [],
  },
  {
    id: "EVT-DEMO-059",
    drone: "FD-DEMO-005",
    date: "04 Sep 2026",
    sort: "2026-09-04T16:00",
    type: "assembly",
    title: "Assembly and calibration",
    summary: "Initial parts and calibration recorded.",
    actor: "Engineer ML",
    evidence: "ASM-DEMO-005 · CAL-DEMO-009",
    parts: ["PART-DEMO-017"],
  },
];
// Fictional records for exploring the shape of a future fleet store.
// Generic names and versions illustrate ownership; they are not a supported release.
const softwareCatalog = [
  { group: "Computer", name: "System image", repo: "example-source/system-image", target: "image-v4-demo", observed: "image-v4-demo", kind: "image" },
  { group: "Computer", name: "Platform services", repo: "example-source/platform-services", target: "services-v4-demo", observed: "services-v4-demo", kind: "package" },
  { group: "Computer", name: "Log recorder", repo: "example-source/log-recorder", target: "logger-v4-demo", observed: "logger-v4-demo", kind: "package" },
  { group: "Computer", name: "Camera pipeline", repo: "example-source/camera-pipeline", target: "pipeline-v4-demo", observed: "pipeline-v4-demo", kind: "package" },
  { group: "Computer", name: "Camera service settings", repo: "example-source/setup-config", target: "profile-R4-demo", observed: "profile-R4-demo", kind: "settings" },
  { group: "Front camera", name: "Camera firmware", repo: "example-source/camera-firmware", target: "firmware-v2-demo", observed: "Version reported; build unknown", kind: "firmware" },
  { group: "Front camera", name: "Capture profile", repo: "example-source/setup-config", target: "profile-A-demo", observed: "profile-A-demo", kind: "settings" },
  { group: "Left camera", name: "Camera firmware", repo: "example-source/camera-firmware", target: "firmware-v2-demo", observed: "Version reported; build unknown", kind: "firmware" },
  { group: "Left camera", name: "Capture profile", repo: "example-source/setup-config", target: "profile-B-demo", observed: "profile-B-demo", kind: "settings" },
  { group: "Right camera", name: "Camera firmware", repo: "example-source/camera-firmware", target: "firmware-v2-demo", observed: "Unknown · device unavailable", kind: "firmware" },
  { group: "Right camera", name: "Capture profile", repo: "example-source/setup-config", target: "profile-A-demo", observed: "File present · load unverified", kind: "settings" },
  { group: "Other devices", name: "Ground station app", repo: "example-source/ground-app", target: "app-v2-demo", observed: "app-v2-demo", kind: "application" },
  { group: "Other devices", name: "Data link firmware", repo: "example-source/link-firmware", target: "link-v2-demo", observed: "link-v2-demo", kind: "firmware" },
];
const flightLogs = [
  {
    id: "FL-DEMO-184", drone: "FD-DEMO-003", date: "16 Oct 2026", title: "Field validation · Route North",
    duration: "34 min", distance: "12.8 km", altitude: "74 m AGL", operator: "Engineer EK",
    site: "Fictional training area", result: "Warning to review", release: "Demo R4",
    note: "High ambient temperature was recorded. Right camera status was also intermittent after takeoff; no causal link is implied. Both need review.",
    logs: [["Flight log", "FLIGHT-DEMO-184.log", "Available"], ["Camera recording", "CAMERA-DEMO-184.mp4", "Partial"], ["Temperature telemetry", "TEMP-DEMO-184.csv", "Available"], ["Tablet session", "TABLET-DEMO-184.json", "Available"]],
    temperature: {minutes: [0, 5, 10, 15, 20, 25, 30, 34], ambient: [38, 40, 41, 43, 44, 44, 42, 41], computer: [54, 60, 66, 71, 76, 79, 77, 74], battery: [34, 37, 40, 44, 47, 49, 50, 48], note: "Hot-environment review pending; compare these channels with approved operating limits before drawing a safety conclusion."},
    checks: [["Front camera", "Recording"], ["Left camera", "Recording"], ["Right camera", "Intermittent"]],
    route: "24,145 54,124 93,115 135,86 168,92 203,56 248,61 286,40 323,57 350,32",
  },
  {
    id: "FL-DEMO-163", drone: "FD-DEMO-003", date: "03 Oct 2026", title: "Routine inspection · Route West",
    duration: "28 min", distance: "9.6 km", altitude: "62 m AGL", operator: "Engineer EK",
    site: "Fictional training area", result: "Complete", release: "Demo R3",
    note: "Routine demonstration flight. Log references represent protected storage, not downloadable files in this public demo.",
    logs: [["Flight log", "FLIGHT-DEMO-163.log", "Available"], ["Camera recording", "CAMERA-DEMO-163.mp4", "Available"], ["Temperature telemetry", "TEMP-DEMO-163.csv", "Available"], ["Tablet session", "TABLET-DEMO-163.json", "Available"]],
    temperature: {minutes: [0, 5, 10, 15, 20, 25, 28], ambient: [29, 30, 32, 33, 32, 31, 30], computer: [48, 54, 59, 63, 65, 64, 62], battery: [31, 34, 36, 39, 41, 40, 39], note: "Temperature channels were recorded throughout this example flight."},
    checks: [["Front camera", "Recording"], ["Left camera", "Recording"], ["Right camera", "Recording"]],
    route: "28,122 55,99 89,107 116,75 157,80 201,47 241,71 283,48 326,72 356,52",
  },
  {
    id: "FL-DEMO-092", drone: "FD-DEMO-001", date: "15 Oct 2026", title: "Powerline survey · Route East",
    duration: "41 min", distance: "15.2 km", altitude: "68 m AGL", operator: "Engineer ML",
    site: "Fictional training area", result: "Complete", release: "Demo R4",
    note: "All recorded streams arrived in protected storage.",
    logs: [["Flight log", "FLIGHT-DEMO-092.log", "Available"], ["Camera recording", "CAMERA-DEMO-092.mp4", "Available"], ["Temperature telemetry", "TEMP-DEMO-092.csv", "Available"]],
    temperature: {minutes: [0, 8, 16, 24, 32, 41], ambient: [32, 34, 36, 37, 36, 34], computer: [50, 57, 63, 68, 69, 66], battery: [33, 36, 40, 44, 45, 43], note: "Example temperature trace; no release limit has been applied."},
    checks: [["Front camera", "Recording"]], route: "25,139 66,107 104,117 140,73 185,77 224,54 273,68 313,38 356,57",
  },
  {
    id: "FL-DEMO-048", drone: "FD-DEMO-005", date: "12 Oct 2026", title: "Inspection · Route South",
    duration: "22 min", distance: "7.4 km", altitude: "55 m AGL", operator: "Engineer EK",
    site: "Fictional training area", result: "Complete", release: "Demo R3",
    note: "Routine flight with no open warnings.",
    logs: [["Flight log", "FLIGHT-DEMO-048.log", "Available"], ["Camera recording", "CAMERA-DEMO-048.mp4", "Available"], ["Temperature telemetry", "TEMP-DEMO-048.csv", "Available"]],
    temperature: {minutes: [0, 4, 8, 12, 16, 22], ambient: [26, 27, 29, 30, 29, 28], computer: [46, 52, 57, 61, 60, 58], battery: [29, 32, 35, 37, 37, 36], note: "Example temperature trace; no release limit has been applied."},
    checks: [["Front camera", "Recording"]], route: "24,136 64,120 98,82 144,93 184,55 230,65 269,43 315,59 356,37",
  },
];
const partSpecs = {
  Computer: { model: "Generic computer", revision: "Demo revision", lifecycle: "Power-on hours", reading: "186 h", interval: "Visual and connection check", supplier: "Example inventory" },
  Camera: { model: "Generic camera", revision: "Demo revision", lifecycle: "Power-on hours", reading: "112 h", interval: "Connection and mounting check", supplier: "Example inventory" },
  Battery: { model: "Generic battery", revision: "Demo revision", lifecycle: "Charge cycles", reading: "34 cycles", interval: "Capacity check", supplier: "Example inventory" },
  Radio: { model: "Generic data link", revision: "Demo revision", lifecycle: "Power-on hours", reading: "92 h", interval: "Connection check", supplier: "Example inventory" },
};
const partOverrides = {
  "PART-DEMO-004": { reading: "141 h", inspection: "Review required · connection issue", inspected: "12 Oct 2026" },
  "PART-DEMO-005": { reading: "46 cycles", inspection: "Passed · cell balance", inspected: "10 Oct 2026" },
  "PART-DEMO-010": { reading: "0 h", inspection: "Passed · incoming check", inspected: "08 Oct 2026" },
  "PART-DEMO-013": { reading: "18 cycles", inspection: "Passed · cycle check", inspected: "11 Oct 2026" },
  "PART-DEMO-015": { reading: "208 h", inspection: "Service hold · connection issue", inspected: "18 Sep 2026" },
};
const app = document.getElementById("app");
const demoCustomer = "Example Utility West";
let savedRole = "engineering";
try {
  if (sessionStorage.getItem("firedrone-fleet-demo-role") === "customer") savedRole = "customer";
} catch { /* Storage may be disabled; the selector still works for this page. */ }
const state = {
  role: savedRole,
  view: "fleet",
  id: null,
  search: "",
  filter: "all",
  timeline: "all",
  expanded: null,
  section: "history",
  selectedFlight: null,
};
const H = (s) =>
  String(s ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const slug = (s) => encodeURIComponent(s);
const drone = (id) => drones.find((d) => d.id === id);
const part = (id) => parts.find((p) => p.id === id);
const partLink = (id) =>
  `<button class="button link" data-open-part="${H(id)}">${H(part(id)?.serial || id)}</button>`;
const droneLink = (id) =>
  `<button class="button link" data-open-drone="${H(id)}">${H(drone(id)?.name || id)}</button>`;
const statusClass = (s) =>
  ({
    "In service": "green",
    "Service due": "amber",
    "In build": "blue",
    Installed: "green",
    Available: "green",
    Reserved: "blue",
    Service: "amber",
  })[s] || "grey";
const badge = (s) => `<span class="status ${statusClass(s)}">${H(s)}</span>`;
const notesKey = "firedrone-fleet-demo-notes-v1";
function getNotes() {
  try {
    const v = JSON.parse(localStorage.getItem(notesKey) || "[]");
    return Array.isArray(v) ? v : [];
  } catch {
    return [];
  }
}
function saveNote(note) {
  try {
    localStorage.setItem(notesKey, JSON.stringify([note, ...getNotes()]));
    return true;
  } catch {
    return false;
  }
}
function allEvents() {
  return [...getNotes(), ...baseEvents];
}
function navigate(view, id) {
  location.hash = `#/${view}${id ? "/" + slug(id) : ""}`;
  if (location.hash === `#/${view}${id ? "/" + slug(id) : ""}`) route();
}
function route() {
  let [, view, id, section, selectedFlight] =
    location.hash.match(/^#\/(fleet|inventory|drone|part)(?:\/([^/]+))?(?:\/(history|software|flights|parts))?(?:\/([^/]+))?$/) || [];
  id = id ? decodeURIComponent(id) : null;
  if (state.role === "customer" &&
      (view === "inventory" || view === "part" ||
       (view === "drone" && drone(id)?.customer !== demoCustomer))) {
    location.replace("#/fleet");
    return;
  }
  if ((view === "drone" && !drone(id)) || (view === "part" && !part(id))) {
    view = "fleet";
    id = null;
  }
  state.view = view || "fleet";
  state.id = id;
  state.search = "";
  state.filter = "all";
  state.type = "all";
  state.timeline = "all";
  state.expanded = null;
  state.section = section || "history";
  state.selectedFlight = selectedFlight || null;
  render();
  window.scrollTo({ top: 0, behavior: "instant" });
}
function setBreadcrumb(items) {
  document.getElementById("breadcrumb").innerHTML = items
    .map((item, i) =>
      i === items.length - 1
        ? `<b>${H(item.label)}</b>`
        : `<button data-nav="${H(item.view)}">${H(item.label)}</button><span>/</span>`,
    )
    .join("");
}
function render() {
  const customer = state.role === "customer";
  document.getElementById("roleSelect").value = state.role;
  document.getElementById("workspaceName").textContent = customer ? "CUSTOMER" : "ENGINEERING";
  document.getElementById("fleetNavLabel").textContent = customer ? "My drones" : "Fleet";
  document.getElementById("inventoryNav").hidden = customer;
  document.querySelector(".user-avatar").textContent = customer ? "CW" : "EK";
  document.querySelector(".user-avatar").title = customer ? "Example Utility West" : "Example engineer";
  document
    .querySelectorAll("[data-nav]")
    .forEach((el) =>
      el.classList.toggle(
        "active",
        el.dataset.nav ===
          (state.view === "drone"
            ? "fleet"
            : state.view === "part"
              ? "inventory"
              : state.view),
      ),
    );
  document.getElementById("navFleetCount").textContent = customer ? drones.filter((d) => d.customer === demoCustomer).length : drones.length;
  document.getElementById("navInventoryCount").textContent = parts.length;
  if (customer) {
    if (state.view === "drone") renderCustomerDrone();
    else renderCustomerHome();
    return;
  }
  if (state.view === "fleet") renderFleet();
  if (state.view === "inventory") renderInventory();
  if (state.view === "drone") renderDrone();
  if (state.view === "part") renderPart();
}
function customerFlightStatus(f) {
  return f.result === "Complete" ? "Complete" : "Review in progress";
}
function renderCustomerHome() {
  const own = drones.filter((d) => d.customer === demoCustomer);
  const ownFlights = flightLogs.filter((f) => own.some((d) => d.id === f.drone));
  const minutes = ownFlights.reduce((sum, f) => sum + Number.parseInt(f.duration, 10), 0);
  const peakAmbient = ownFlights.length ? Math.max(...ownFlights.map((f) => Math.max(...f.temperature.ambient))) : null;
  const complete = ownFlights.filter((f) => f.result === "Complete").length;
  const review = ownFlights.length - complete;
  const completeShare = ownFlights.length ? Math.round(complete / ownFlights.length * 100) : 0;
  const reviewShare = ownFlights.length ? 100 - completeShare : 0;
  setBreadcrumb([{ label: "My drones" }]);
  app.innerHTML = `
    <section class="customer-hero"><div><div class="eyebrow">Customer workspace · ${H(demoCustomer)}</div><h1>Fleet overview</h1><p>Your aircraft and flight activity in one place.</p></div><span>FICTIONAL CUSTOMER VIEW</span></section>
    <div class="customer-notice">Demo role switch only. This public prototype has no sign-in or access control; a production service must enforce customer permissions on the server.</div>
    <section class="customer-stats" aria-label="Customer flight summary">
      <div class="customer-stat"><small>Assigned aircraft</small><strong>${own.length}</strong><span>${own.filter((d) => d.status === "In service").length} in service</span></div>
      <div class="customer-stat"><small>Recorded flights</small><strong>${ownFlights.length}</strong><span>Across your aircraft</span></div>
      <div class="customer-stat"><small>Total flight time</small><strong>${Math.floor(minutes / 60)}h ${String(minutes % 60).padStart(2, "0")}m</strong><span>Sample flight records</span></div>
      <div class="customer-stat warm"><small>Highest ambient</small><strong>${peakAmbient === null ? "—" : `${peakAmbient} °C`}</strong><span>Peak in recorded flights</span></div>
    </section>
    <section class="panel customer-activity"><div class="customer-activity-head"><div><div class="eyebrow">Flight activity</div><h2>Record status</h2><p>${complete} complete · ${review} ${review === 1 ? "flight" : "flights"} under review</p></div><strong>${ownFlights.length} <small>flights</small></strong></div><div class="customer-status-bar" role="img" aria-label="${complete} complete flights and ${review} flights under review"><span class="complete" style="width:${completeShare}%"></span><span class="review" style="width:${reviewShare}%"></span></div><div class="customer-status-legend"><span><i class="complete"></i> Complete <b>${complete}</b></span><span><i class="review"></i> Review in progress <b>${review}</b></span></div></section>
    <div class="customer-overview"><section class="panel"><div class="panel-head"><h2>My drones</h2><small>${own.length} assigned</small></div><div class="customer-list">${own.map((d) => `<button class="customer-row" data-open-drone="${H(d.id)}"><span class="customer-row-icon">✳</span><span><strong>${H(d.name)}</strong><small>${H(d.id)} · ${H(d.location)}</small></span>${badge(d.status)}<b>›</b></button>`).join("")}</div></section><section class="panel"><div class="panel-head"><h2>Recent flights</h2><small>${ownFlights.length} sample records</small></div><div class="customer-list">${ownFlights.map((f) => `<button class="customer-row" data-customer-flight="${H(f.id)}"><span class="customer-row-icon flight">↗</span><span><strong>${H(f.title)}</strong><small>${H(drone(f.drone).name)} · ${H(f.date)} · ${H(f.duration)}</small></span><span class="status ${f.result === "Complete" ? "green" : "amber"}">${customerFlightStatus(f)}</span><b>›</b></button>`).join("")}</div></section></div>`;
}
function renderCustomerDrone() {
  const d = drone(state.id);
  if (!d || d.customer !== demoCustomer) return renderCustomerHome();
  const flights = flightLogs.filter((f) => f.drone === d.id);
  const f = flights.find((item) => item.id === state.selectedFlight) || flights[0];
  setBreadcrumb([{ label: "My drones", view: "fleet" }, { label: d.name }]);
  app.innerHTML = `<button class="back-link" data-nav="fleet">← My drones</button><div class="page-head"><div><div class="eyebrow">${H(demoCustomer)} · Aircraft</div><h1>${H(d.name)}</h1><p>${H(d.id)} · ${H(d.location)}</p></div>${badge(d.status)}</div><div class="customer-notice">Customer preview with flight summaries, in-flight temperatures and log references. Files shown here are fictional and cannot be downloaded from this demo.</div><div class="customer-drone-summary"><div><small>Last contact</small><strong>${H(d.lastContact)}</strong></div><div><small>Flights shown</small><strong>${flights.length}</strong></div><div><small>Current status</small><strong>${H(d.status)}</strong></div></div>${f ? `<div class="flight-layout"><section class="panel"><div class="panel-head"><h2>Flights</h2><small>${flights.length} records</small></div><div class="flight-list">${flights.map((item) => `<button class="flight-item ${item.id === f.id ? "selected" : ""}" data-flight="${H(item.id)}"><span><strong>${H(item.title)}</strong><small>${H(item.date)} · ${H(item.duration)} · ${Math.max(...item.temperature.ambient)} °C ambient peak</small></span><span class="status ${item.result === "Complete" ? "green" : "amber"}">${customerFlightStatus(item)}</span></button>`).join("")}</div></section><section class="panel flight-detail"><div class="panel-head"><div><h2>${H(f.title)}</h2><small>${H(f.date)} · ${H(f.id)}</small></div><span class="status ${f.result === "Complete" ? "green" : "amber"}">${customerFlightStatus(f)}</span></div>${routeMap(f)}<div class="flight-metrics customer-metrics"><div><small>Duration</small><strong>${H(f.duration)}</strong></div><div><small>Distance</small><strong>${H(f.distance)}</strong></div><div><small>Max height</small><strong>${H(f.altitude)}</strong></div></div>${temperaturePanel(f)}<div class="flight-body"><p>${f.result === "Complete" ? "Flight completed. The log references below are available in protected storage." : "Flight completed. An engineering review is in progress."}</p><h3>Flight logs</h3><div class="customer-logs">${f.logs.map(([label, file, status]) => `<div class="file-row"><span>▤</span><div><strong>${H(label)}</strong><small class="mono">${H(file)}</small></div><em>${H(status)}</em></div>`).join("")}</div><p class="privacy-note">These are fictional references. A production customer portal would provide permitted files through authenticated links.</p></div></section></div>` : `<section class="panel"><div class="empty-state">No flights are recorded for this aircraft in the demo.</div></section>`}`;
}
function renderFleet() {
  setBreadcrumb([{ label: "Fleet" }]);
  const live = drones.filter((d) => d.status === "In service").length;
  const attention = drones.filter((d) => d.attention !== "None").length;
  app.innerHTML = `<div class="page-head"><div><div class="eyebrow">Operations overview</div><h1>Fleet</h1><p>One place to follow each aircraft from assembly through service and flight.</p></div><span class="demo-badge">FICTIONAL EXAMPLE RECORDS</span></div><section class="stats" aria-label="Fleet summary"><div class="stat"><span class="stat-label">Total aircraft</span><span class="stat-value">${drones.length}</span><span class="stat-note">In this demo fleet</span></div><div class="stat"><span class="stat-label">In service</span><span class="stat-value">${live}</span><span class="stat-note">Accepted for operation</span></div><div class="stat"><span class="stat-label">Needs attention</span><span class="stat-value">${attention}</span><span class="stat-note">Open work or pending checks</span></div><div class="stat"><span class="stat-label">Tracked parts</span><span class="stat-value">${parts.length}</span><span class="stat-note">Across inventory</span></div></section><section class="panel"><div class="panel-head"><h2>Aircraft registry</h2><small id="fleetCount"></small></div><div class="toolbar"><label class="search"><span aria-hidden="true">⌕</span><input id="fleetSearch" type="search" placeholder="Search drone, customer, release or part serial" aria-label="Search fleet" value="${H(state.search)}"></label><select id="fleetFilter" class="select" aria-label="Filter fleet by status"><option value="all">All statuses</option><option value="In service">In service</option><option value="Service due">Service due</option><option value="In build">In build</option></select></div><div class="table-wrap"><table class="data-table fleet-table"><thead><tr><th>Aircraft</th><th>Status</th><th>Current release</th><th>Location</th><th>Last contact</th><th>Attention</th><th></th></tr></thead><tbody id="fleetRows"></tbody></table></div></section>`;
  document.getElementById("fleetFilter").value = state.filter;
  updateFleetRows();
}
function updateFleetRows() {
  const q = state.search.toLowerCase().trim();
  const shown = drones.filter(
    (d) =>
      (state.filter === "all" || d.status === state.filter) &&
      (!q ||
        [
          d.name,
          d.id,
          d.customer,
          d.release,
          d.location,
          ...parts.filter((p) => p.drone === d.id).map((p) => p.serial),
        ]
          .join(" ")
          .toLowerCase()
          .includes(q)),
  );
  document.getElementById("fleetCount").textContent = `${shown.length} shown`;
  document.getElementById("fleetRows").innerHTML = shown.length
    ? shown
        .map(
          (d) =>
            `<tr data-open-drone="${H(d.id)}"><td><div class="table-title"><span class="device-icon">✳</span><span>${H(d.name)}<small>${H(d.id)} · ${H(d.customer)}</small></span></div></td><td>${badge(d.status)}</td><td>${H(d.release)}</td><td>${H(d.location)}</td><td>${H(d.lastContact)}</td><td>${d.attention === "None" ? "—" : `<span class="status amber">${H({ "Open camera investigation": "Camera investigation", "Scheduled battery inspection": "Battery inspection", "Initial acceptance pending": "Acceptance pending" }[d.attention] || d.attention)}</span>`}</td><td class="row-arrow">›</td></tr>`,
        )
        .join("")
    : `<tr><td colspan="7"><div class="empty-state"><strong>No aircraft found</strong>Try another search or status.</div></td></tr>`;
}
function renderInventory() {
  setBreadcrumb([{ label: "Inventory" }]);
  const available = parts.filter((p) => p.status === "Available").length;
  const installed = parts.filter((p) => p.status === "Installed").length;
  app.innerHTML = `<div class="page-head"><div><div class="eyebrow">Hardware register</div><h1>Inventory</h1><p>Find a part, see where it is, and follow its assignment history.</p></div><span class="demo-badge">FICTIONAL EXAMPLE RECORDS</span></div><div class="inventory-intro"><div class="inventory-highlight"><div><h2>Ready for the next build or repair</h2><p>Available parts have a recorded location and can be found by serial.</p></div><strong>${available} available</strong></div><div class="panel inventory-help"><strong>One part, one history</strong><p>Installed parts link to their aircraft. Removed parts keep their earlier assignment in the movement history.</p></div></div><section class="stats"><div class="stat"><span class="stat-label">Tracked parts</span><span class="stat-value">${parts.length}</span></div><div class="stat"><span class="stat-label">Installed</span><span class="stat-value">${installed}</span></div><div class="stat"><span class="stat-label">Available</span><span class="stat-value">${available}</span></div><div class="stat"><span class="stat-label">Service / reserved</span><span class="stat-value">${parts.length - installed - available}</span></div></section><section class="panel"><div class="panel-head"><h2>Parts register</h2><small id="partCount"></small></div><div class="toolbar"><label class="search"><span aria-hidden="true">⌕</span><input id="partSearch" type="search" placeholder="Search part, serial, drone or location" aria-label="Search inventory" value="${H(state.search)}"></label><select id="partFilter" class="select" aria-label="Filter inventory by availability"><option value="all">All statuses</option><option value="Available">Available</option><option value="Installed">Installed</option><option value="Reserved">Reserved</option><option value="Service">In service</option></select><select id="typeFilter" class="select" aria-label="Filter inventory by type"><option value="all">All types</option>${[...new Set(parts.map((p) => p.type))].map((t) => `<option value="${H(t)}">${H(t)}</option>`).join("")}</select></div><div class="table-wrap"><table class="data-table"><thead><tr><th>Part</th><th>Serial number</th><th>Status</th><th>Current location</th><th>Assigned to</th><th></th></tr></thead><tbody id="partRows"></tbody></table></div></section>`;
  document.getElementById("partFilter").value = state.filter;
  document.getElementById("typeFilter").value = state.type || "all";
  updatePartRows();
}
function updatePartRows() {
  const q = state.search.toLowerCase().trim(),
    type = state.type || "all";
  const shown = parts.filter(
    (p) =>
      (state.filter === "all" || p.status === state.filter) &&
      (type === "all" || p.type === type) &&
      (!q ||
        [p.name, p.type, p.serial, p.location, p.id, drone(p.drone)?.name]
          .join(" ")
          .toLowerCase()
          .includes(q)),
  );
  document.getElementById("partCount").textContent = `${shown.length} shown`;
  document.getElementById("partRows").innerHTML = shown.length
    ? shown
        .map(
          (p) =>
            `<tr data-open-part="${H(p.id)}"><td><div class="table-title"><span class="part-icon">▦</span><span>${H(p.name)}<small>${H(p.type)} · ${H(p.id)}</small></span></div></td><td class="mono">${H(p.serial)}</td><td>${badge(p.status)}</td><td>${H(p.location)}</td><td>${p.drone ? droneLink(p.drone) : "—"}</td><td class="row-arrow">›</td></tr>`,
        )
        .join("")
    : `<tr><td colspan="6"><div class="empty-state"><strong>No parts found</strong>Try another search or filter.</div></td></tr>`;
}
function repoLabel(repo) {
  return H(repo);
}
function softwareRows(d) {
  let rows = softwareCatalog.map((row) => ({ ...row }));
  const installed = parts.filter((p) => p.drone === d.id && p.status === "Installed");
  if (d.id !== "FD-DEMO-003") {
    rows = rows.filter((row) => !["Left camera", "Right camera"].includes(row.group));
    if (!installed.some((p) => p.type === "Camera")) rows = rows.filter((row) => row.group !== "Front camera");
  }
  if (d.release.includes("R3")) {
    rows = rows.map((row) => {
      if (row.name === "Log recorder") return { ...row, target: "logger-v3-demo", observed: "logger-v3-demo" };
      if (row.name === "Camera pipeline") return { ...row, target: "pipeline-v3-demo", observed: "pipeline-v3-demo" };
      if (row.name === "Camera service settings") return { ...row, target: "profile-R3-demo", observed: "profile-R3-demo" };
      return row;
    });
  }
  if (d.id === "FD-DEMO-002") {
    rows = rows.map((row) => row.name === "Log recorder"
      ? { ...row, observed: "logger-v2-demo" }
      : row);
  }
  if (d.status === "In build") rows = rows.map((row) => ({ ...row, observed: "Not captured" }));
  return rows;
}
function softwareStatus(row) {
  if (row.observed.includes("build unknown")) return "Partial";
  if (/Unknown|unverified|Not captured/.test(row.observed)) return "Unknown";
  return row.target === row.observed ? "Matches" : "Drift";
}
function renderSoftware(d) {
  const rows = softwareRows(d);
  const review = rows.filter((row) => softwareStatus(row) !== "Matches").length;
  return `<section class="panel software-panel"><div class="panel-head"><div><h2>Intended release vs observed capture</h2><small>${H(d.release)} · ${H(d.capture)} from ${H(d.captureDate)} · not live telemetry</small></div><span class="count-pill">${review} need review</span></div><div class="record-callout"><strong>Intended state and dated observation.</strong> The release describes what should be installed. The capture records what could be read on the aircraft when it was taken. A reported device version alone does not verify its exact firmware or settings.</div><div class="software-list">${rows.map((row) => `<div class="software-row"><div class="software-identity"><span class="eyebrow">${H(row.group)} · ${H(row.kind)}</span><strong>${H(row.name)}</strong><small>Source: ${repoLabel(row.repo)}</small></div><div class="software-values"><div><small>Intended</small><strong class="mono">${H(row.target)}</strong></div><div><small>Observed</small><strong class="mono">${H(row.observed)}</strong></div><span class="comparison ${softwareStatus(row).toLowerCase()}">${softwareStatus(row)}</span></div></div>`).join("")}</div><div class="record-footer">Example comparison only. Packages, settings and device firmware require different capture methods; this view keeps their results together.</div></section>`;
}
function routeMap(f) {
  return `<div class="route-map" role="img" aria-label="Illustrative schematic route for ${H(f.id)}; not actual flight geography"><svg viewBox="0 0 380 180" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><path class="map-grid" d="M0 45H380 M0 90H380 M0 135H380 M76 0V180 M152 0V180 M228 0V180 M304 0V180"/><path class="map-feature" d="M7 165C55 135 71 150 126 121S217 138 273 102S346 90 386 68"/><path class="map-feature light" d="M0 61C68 42 92 59 153 33S265 45 380 11"/><polyline class="flight-path" points="${H(f.route)}"/><circle class="map-start" cx="${H(f.route.split(" ")[0].split(",")[0])}" cy="${H(f.route.split(" ")[0].split(",")[1])}" r="6"/><circle class="map-end" cx="${H(f.route.split(" ").at(-1).split(",")[0])}" cy="${H(f.route.split(" ").at(-1).split(",")[1])}" r="6"/></svg><span class="map-label">SCHEMATIC ROUTE · NOT ACTUAL GEOGRAPHY</span></div>`;
}
function temperaturePanel(f) {
  const data = f.temperature;
  if (!data) return "";
  const series = [
    { key: "ambient", label: "Ambient", className: "ambient" },
    { key: "computer", label: "Computer", className: "computer" },
    { key: "battery", label: "Battery", className: "battery" },
  ];
  const duration = data.minutes.at(-1);
  const x = (minute) => 42 + (minute / duration) * 526;
  const y = (degrees) => 153 - ((degrees - 20) / 70) * 119;
  const ticks = [20, 40, 60, 80]
    .map((degrees) => `<line x1="42" x2="568" y1="${y(degrees)}" y2="${y(degrees)}"/><text x="32" y="${y(degrees) + 3}" text-anchor="end">${degrees}°</text>`)
    .join("");
  const traces = series
    .map(({ key, className }) => `<polyline class="temperature-line ${className}" points="${data[key].map((degrees, index) => `${x(data.minutes[index])},${y(degrees)}`).join(" ")}"/>`)
    .join("");
  const peaks = series
    .map(({ key, label, className }) => `<div class="temperature-peak"><span class="temperature-key ${className}">${H(label)}</span><strong>${Math.max(...data[key])} °C</strong><small>peak</small></div>`)
    .join("");
  const file = f.logs.find(([label]) => label === "Temperature telemetry")?.[1] || "Temperature log unavailable";
  return `<section class="temperature-panel" aria-label="In-flight temperature record"><div class="temperature-head"><div><h3>In-flight temperatures</h3><p>${H(file)} · ${data.minutes.length} example samples across ${duration} min</p></div><span class="temperature-badge">${f.id === "FL-DEMO-184" ? "Review open" : "Recorded"}</span></div><div class="temperature-peaks">${peaks}</div><figure class="temperature-figure"><svg viewBox="0 0 600 185" role="img" aria-label="Example ambient, computer and battery temperatures across the flight, from ${data.minutes[0]} to ${duration} minutes"><g class="temperature-grid">${ticks}</g>${traces}<text class="temperature-axis" x="42" y="179">Takeoff</text><text class="temperature-axis" x="568" y="179" text-anchor="end">${duration} min</text></svg><figcaption>Fictional trace. ${H(data.note)} No automatic pass/fail temperature threshold is defined here.</figcaption></figure></section>`;
}
function renderFlights(d) {
  const flights = flightLogs.filter((f) => f.drone === d.id);
  if (!flights.length) return `<section class="panel"><div class="panel-head"><h2>Flights & logs</h2></div><div class="empty-state"><strong>No sample flights for this aircraft</strong>Assembly and service records are still available in History.</div></section>`;
  const f = flights.find((item) => item.id === state.selectedFlight) || flights[0];
  return `<div class="flight-layout"><section class="panel"><div class="panel-head"><h2>Flight records</h2><small>${flights.length} sample flights</small></div><div class="flight-list">${flights.map((item) => `<button class="flight-item ${item.id === f.id ? "selected" : ""}" data-flight="${H(item.id)}"><span><strong>${H(item.title)}</strong><small>${H(item.date)} · ${H(item.id)} · ${Math.max(...item.temperature.ambient)} °C ambient peak</small></span><span class="status ${item.result === "Complete" ? "green" : "amber"}">${H(item.result)}</span></button>`).join("")}</div></section><section class="panel flight-detail"><div class="panel-head"><div><h2>${H(f.title)}</h2><small>${H(f.id)} · ${H(f.date)} · ${H(f.release)} · ${H(f.site)}</small></div><span class="status ${f.result === "Complete" ? "green" : "amber"}">${H(f.result)}</span></div>${routeMap(f)}<div class="flight-metrics"><div><small>Duration</small><strong>${H(f.duration)}</strong></div><div><small>Distance</small><strong>${H(f.distance)}</strong></div><div><small>Max height</small><strong>${H(f.altitude)}</strong></div><div><small>Operator</small><strong>${H(f.operator)}</strong></div></div>${temperaturePanel(f)}<div class="flight-body"><p>${H(f.note)}</p><div class="flight-subgrid"><div><h3>Log bundle</h3>${f.logs.map(([label, file, status]) => `<div class="file-row"><span>▤</span><div><strong>${H(label)}</strong><small class="mono">${H(file)}</small></div><em>${H(status)}</em></div>`).join("")}</div><div><h3>Sensor summary</h3>${f.checks.map(([label, status]) => `<div class="check-row"><span>${H(label)}</span><strong>${H(status)}</strong></div>`).join("")}<p class="privacy-note">Fictional filenames only. A production record would link to protected logs, with access controls and retention rules.</p></div></div></div></section></div>`;
}
function renderDroneParts(d) {
  const assigned = parts.filter((p) => p.drone === d.id && p.status === "Installed");
  const former = parts.filter((p) => p.history.some((h) => h[1].includes(`from ${d.name}`)));
  return `<section class="panel"><div class="panel-head"><h2>Installed hardware</h2><small>${assigned.length} currently assigned · ${former.length} previously removed</small></div><div class="hardware-grid">${assigned.map((p) => `<button class="hardware-card" data-open-part="${H(p.id)}"><span class="part-icon">▦</span><span><small>${H(p.type)} · ${H(p.id)}</small><strong>${H(p.name)}</strong><em class="mono">${H(p.serial)}</em><small>${H((partOverrides[p.id] || {}).inspection || "Passed · last recorded check")}</small></span><b>↗</b></button>`).join("") || `<div class="empty-state">No parts installed yet in this demo.</div>`}</div>${former.length ? `<div class="record-footer">Formerly fitted: ${former.map((p) => partLink(p.id)).join(", ")}. Its part record retains removal and service history.</div>` : ""}</section>`;
}
function renderHistory(d, events, installed, flights) {
  return `<div class="content-grid"><section class="panel"><div class="panel-head"><h2>History</h2><small>${events.length} events · ${flights} flights shown in demo</small></div><div class="timeline-tools" role="group" aria-label="Filter timeline">${[["all", "All activity"], ["service", "Service / debug"], ["change", "Upgrades"], ["flight", "Flights / logs"], ["assembly", "Assembly"], ["note", "Notes"]].map(([k,v]) => `<button class="filter-chip ${state.timeline === k ? "active" : ""}" data-timeline="${k}">${v}</button>`).join("")}</div><div class="timeline" id="timeline"></div></section><aside class="detail-sidebar"><section class="panel"><div class="panel-head"><h2>Installed parts</h2><span class="count-pill">${installed.length}</span></div><div class="mini-list">${installed.length ? installed.map((p) => `<div class="mini-row"><div class="mini-icon"><span class="part-icon">▦</span><div><strong>${H(p.name)}</strong><small>${H(p.serial)}</small></div></div>${partLink(p.id)}</div>`).join("") : `<div class="empty-state">No installed parts recorded in this demo.</div>`}<button class="button small" data-section="parts">See hardware history ↗</button></div></section><section class="panel"><div class="panel-head"><h2>Record at a glance</h2></div><div class="key-value"><div class="mini-row"><span>Intended release</span><strong>${H(d.release)}</strong></div><div class="mini-row"><span>Latest capture</span><strong class="mono">${H(d.capture)}</strong></div><div class="mini-row"><span>Acceptance</span><strong>${H(d.accepted)}</strong></div><div class="mini-row"><span>Open work</span><strong>${H(d.attention)}</strong></div></div></section><section class="panel"><div class="panel-head"><h2>Linked records</h2></div><div class="mini-list"><button class="record-nav" data-section="software"><strong>Software & capture</strong><small>Intended vs observed versions ↗</small></button><button class="record-nav" data-section="flights"><strong>Flights & logs</strong><small>${flights} sample flight records ↗</small></button><button class="record-nav" data-section="parts"><strong>Hardware & serials</strong><small>Current and former assignments ↗</small></button></div></section></aside></div>`;
}
function renderDrone() {
  const d = drone(state.id);
  setBreadcrumb([{ label: "Fleet", view: "fleet" }, { label: d.name }]);
  const installed = parts.filter((p) => p.drone === d.id && p.status === "Installed");
  const events = allEvents().filter((e) => e.drone === d.id);
  const flights = flightLogs.filter((f) => f.drone === d.id).length;
  const section = state.section || "history";
  app.innerHTML = `<button class="back-link" data-nav="fleet">← All aircraft</button><div class="page-head"><div class="identity-head"><span class="identity-icon">✳</span><div><h1>${H(d.name)}</h1><p><span class="mono">${H(d.id)}</span> &nbsp; ${badge(d.status)}</p></div></div><div class="head-actions"><button class="button primary" id="addNote">＋ Add note</button></div></div><div class="detail-hero"><section class="hero-card"><div><small>Current assignment</small><h2>${H(d.customer)}</h2></div><div class="hero-meta"><div><small>Location</small><span>${H(d.location)}</span></div><div><small>Intended release</small><span>${H(d.release)}</span></div><div><small>Last contact</small><span>${H(d.lastContact)}</span></div></div></section><section class="panel capture-card"><div><h2>Latest observed state</h2><div class="capture-value">${H(d.capture)}</div><p>Captured ${H(d.captureDate)} · last acceptance ${H(d.accepted)}</p></div><button class="button small" data-section="software">Compare software ↗</button></section></div><nav class="record-tabs" aria-label="Drone record sections">${[["history","Timeline"],["software","Software & capture"],["flights","Flights & logs"],["parts","Hardware"]].map(([key,label]) => `<button data-section="${key}" class="${section === key ? "active" : ""}" aria-current="${section === key ? "page" : "false"}">${label}</button>`).join("")}</nav>${section === "history" ? renderHistory(d, events, installed, flights) : section === "software" ? renderSoftware(d) : section === "flights" ? renderFlights(d) : renderDroneParts(d)}`;
  if (section === "history") updateTimeline();
}
function updateTimeline() {
  const events = allEvents()
    .filter(
      (e) =>
        e.drone === state.id &&
        (state.timeline === "all" || e.type === state.timeline),
    )
    .sort((a, b) => b.sort.localeCompare(a.sort));
  let date = "";
  const html = events
    .map((e) => {
      const newGroup = e.date !== date;
      date = e.date;
      const flightId = e.evidence?.match(/FL-DEMO-\d+/)?.[0];
      return `${newGroup ? `<div class="timeline-group"><div class="timeline-date">${H(e.date)}</div>` : ""}<div class="timeline-event"><span class="timeline-dot ${H(e.type)}">${{ flight: "↗", service: "⚙", change: "↑", assembly: "✳", note: "✎" }[e.type] || "·"}</span><div class="timeline-body"><div class="timeline-title"><button data-event="${H(e.id)}" aria-expanded="${state.expanded === e.id}">${H(e.title)}</button><small>· ${H(e.actor)}</small></div><p>${H(e.summary)}</p><div class="tag-row"><span class="tag">${H(e.type === "change" ? "UPGRADE" : e.type.toUpperCase())}</span>${e.evidence ? `<span class="tag">EVIDENCE LINKED</span>` : ""}${e.parts?.length ? `<span class="tag">${e.parts.length} PART${e.parts.length > 1 ? "S" : ""}</span>` : ""}</div>${state.expanded === e.id ? `<div class="event-detail"><dl><dt>Record</dt><dd class="mono">${H(e.id)}</dd><dt>Engineer</dt><dd>${H(e.actor)}</dd><dt>Evidence</dt><dd>${H(e.evidence || "Local demo note; no uploaded evidence")}</dd>${e.parts?.length ? `<dt>Related parts</dt><dd>${e.parts.map(partLink).join(", ")}</dd>` : ""}</dl>${flightId && flightLogs.some((f) => f.id === flightId) ? `<button class="button small event-link" data-view-flight="${H(flightId)}">Open flight record ↗</button>` : ""}</div>` : ""}</div></div>${events[events.indexOf(e) + 1]?.date !== e.date ? "</div>" : ""}`;
    })
    .join("");
  document.getElementById("timeline").innerHTML =
    html ||
    `<div class="empty-state"><strong>No events in this category</strong>Choose another timeline filter.</div>`;
}
function renderPart() {
  const p = part(state.id);
  const spec = { ...partSpecs[p.type], ...(partOverrides[p.id] || {}) };
  const inspection = spec.inspection || "Passed · last recorded check";
  const inspected = spec.inspected || p.received;
  setBreadcrumb([{ label: "Inventory", view: "inventory" }, { label: p.serial }]);
  app.innerHTML = `<button class="back-link" data-nav="inventory">← All parts</button><div class="page-head"><div><div class="eyebrow">Part record · ${H(p.type)}</div><h1>${H(p.name)}</h1><p><span class="mono">${H(p.serial)}</span> &nbsp; ${badge(p.status)}</p></div><span class="demo-badge">FICTIONAL EXAMPLE PART</span></div><div class="part-summary"><div><small>Model</small><strong>${H(spec.model)}</strong></div><div><small>Hardware revision</small><strong>${H(spec.revision)}</strong></div><div><small>${H(spec.lifecycle)}</small><strong>${H(spec.reading)}</strong></div><div><small>Last inspection</small><strong>${H(inspected)}</strong></div></div><div class="part-detail-grid"><section class="panel"><div class="panel-head"><h2>Movement & service history</h2><small>${p.history.length} entries</small></div><div class="movement">${p.history.map(([date, title, desc]) => `<div class="movement-row"><time>${H(date)}</time><div><strong>${H(title)}</strong><p>${H(desc)}</p>${title.includes("Drone") ? `<span class="tag">ASSIGNMENT</span>` : ""}</div></div>`).join("")}</div></section><aside class="detail-sidebar"><section class="panel"><div class="panel-head"><h2>Current assignment</h2></div><div class="key-value"><div class="mini-row"><span>Status</span>${badge(p.status)}</div><div class="mini-row"><span>Where</span><strong>${H(p.location)}</strong></div><div class="mini-row"><span>Aircraft</span><strong>${p.drone ? droneLink(p.drone) : "Unassigned"}</strong></div><div class="mini-row"><span>Received</span><strong>${H(p.received)}</strong></div></div></section><section class="panel"><div class="panel-head"><h2>Identity & maintenance</h2></div><div class="key-value"><div class="mini-row"><span>Serial number</span><strong class="mono">${H(p.serial)}</strong></div><div class="mini-row"><span>Part ID</span><strong class="mono">${H(p.id)}</strong></div><div class="mini-row"><span>Supplier</span><strong>${H(spec.supplier)}</strong></div><div class="mini-row"><span>Check</span><strong>${H(spec.interval)}</strong></div><div class="mini-row"><span>Result</span><strong>${H(inspection)}</strong></div></div></section></aside></div>`;
}
function showNoteModal() {
  const d = drone(state.id);
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  backdrop.id = "noteModal";
  backdrop.innerHTML = `<form class="modal" id="noteForm"><div class="modal-head"><div><div class="eyebrow">Demo interaction</div><h2>Add a note to ${H(d.name)}</h2><p>This note appears in the timeline and stays in this browser only.</p></div><button type="button" class="icon-button" id="closeModal" aria-label="Close">×</button></div><div class="field"><label for="noteTitle">Title</label><input id="noteTitle" name="title" required maxlength="80" placeholder="e.g. Followed up on camera warning"></div><div class="field"><label for="noteText">Note</label><textarea id="noteText" name="text" required maxlength="600" placeholder="What happened, and what should the next engineer know?"></textarea></div><div class="form-actions"><button type="button" class="button" id="cancelModal">Cancel</button><button type="submit" class="button primary">Save demo note</button></div></form>`;
  document.body.appendChild(backdrop);
  document.getElementById("noteTitle").focus();
}
function toast(message) {
  const el = document.getElementById("toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove("show"), 3200);
}
function switchRole(value) {
  const next = value === "customer" ? "customer" : "engineering";
  if (next === state.role) return;
  state.role = next;
  try { sessionStorage.setItem("firedrone-fleet-demo-role", next); } catch { /* Optional demo preference. */ }
  location.hash = "#/fleet";
  route();
  document.querySelector(".sidebar").classList.remove("open");
  document.getElementById("mobileMenu").setAttribute("aria-expanded", "false");
}
document.addEventListener("click", (e) => {
  const nav = e.target.closest("[data-nav]");
  if (nav) {
    navigate(nav.dataset.nav);
    document.querySelector(".sidebar").classList.remove("open");
    return;
  }
  const d = e.target.closest("[data-open-drone]");
  if (d) {
    navigate("drone", d.dataset.openDrone);
    return;
  }
  const customerFlight = e.target.closest("[data-customer-flight]");
  if (customerFlight && state.role === "customer") {
    const f = flightLogs.find((item) => item.id === customerFlight.dataset.customerFlight);
    if (f && drone(f.drone)?.customer === demoCustomer) {
      location.hash = `#/drone/${slug(f.drone)}/flights/${slug(f.id)}`;
    }
    return;
  }
  const p = e.target.closest("[data-open-part]");
  if (p) {
    navigate("part", p.dataset.openPart);
    return;
  }
  const section = e.target.closest("[data-section]");
  if (section && state.view === "drone") {
    location.hash = `#/drone/${slug(state.id)}/${section.dataset.section}`;
    return;
  }
  const selectedFlight = e.target.closest("[data-flight], [data-view-flight]");
  if (selectedFlight && state.view === "drone") {
    location.hash = `#/drone/${slug(state.id)}/flights/${slug(selectedFlight.dataset.flight || selectedFlight.dataset.viewFlight)}`;
    return;
  }
  const t = e.target.closest("[data-timeline]");
  if (t) {
    state.timeline = t.dataset.timeline;
    state.expanded = null;
    renderDrone();
    return;
  }
  const ev = e.target.closest("[data-event]");
  if (ev) {
    state.expanded =
      state.expanded === ev.dataset.event ? null : ev.dataset.event;
    updateTimeline();
    return;
  }
  if (e.target.closest("#addNote")) {
    showNoteModal();
    return;
  }
  if (e.target.closest("#mobileMenu")) {
    const sidebar = document.querySelector(".sidebar");
    const open = sidebar.classList.toggle("open");
    document
      .getElementById("mobileMenu")
      .setAttribute("aria-expanded", String(open));
    return;
  }
  if (
    e.target.id === "closeModal" ||
    e.target.id === "cancelModal" ||
    e.target.id === "noteModal"
  ) {
    document.getElementById("noteModal")?.remove();
  }
});
document.addEventListener("input", (e) => {
  if (e.target.id === "roleSelect") switchRole(e.target.value);
  if (e.target.id === "fleetSearch") {
    state.search = e.target.value;
    updateFleetRows();
  }
  if (e.target.id === "partSearch") {
    state.search = e.target.value;
    updatePartRows();
  }
});
document.addEventListener("change", (e) => {
  if (e.target.id === "roleSelect") {
    switchRole(e.target.value);
    return;
  }
  if (e.target.id === "fleetFilter") {
    state.filter = e.target.value;
    updateFleetRows();
  }
  if (e.target.id === "partFilter") {
    state.filter = e.target.value;
    updatePartRows();
  }
  if (e.target.id === "typeFilter") {
    state.type = e.target.value;
    updatePartRows();
  }
});
document.addEventListener("submit", (e) => {
  if (e.target.id !== "noteForm") return;
  e.preventDefault();
  const title = e.target.elements.title.value.trim(),
    summary = e.target.elements.text.value.trim();
  if (!title || !summary) return;
  const now = new Date(),
    date = new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(now),
    note = {
      id: `NOTE-DEMO-${now.getTime()}`,
      drone: state.id,
      date,
      sort: now.toISOString(),
      type: "note",
      title,
      summary,
      actor: "You · local demo",
      evidence: "",
      parts: [],
    };
  if (!saveNote(note)) {
    toast("This browser could not save the note.");
    return;
  }
  document.getElementById("noteModal")?.remove();
  state.timeline = "all";
  state.section = "history";
  state.expanded = note.id;
  history.replaceState(null, "", `#/drone/${slug(state.id)}/history`);
  renderDrone();
  toast("Demo note added to this browser.");
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") document.getElementById("noteModal")?.remove();
});
window.addEventListener("hashchange", route);
route();
