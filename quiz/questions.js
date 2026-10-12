// Quiz data for the Washington driving practice test.
//
// Facts come from the Washington Driver Guide (DOL, 2025 edition); section
// numbers are noted in each explanation. Where the guide doesn't state a rule,
// the explanation names the RCW it comes from instead.
//
// Each question: { question, choices, answer (index into choices), explanation,
// image (optional key into SIGNS) }. The bank holds more than 40 questions;
// each attempt draws a random 40, then shuffles the choices (keeping
// "...of the above" choices last).

const SIGNS = {
    slowMoving: `
<svg viewBox="0 0 100 100" role="img" aria-label="Orange triangle with a red border">
  <polygon points="50,8 95,88 5,88" fill="#c8102e"/>
  <polygon points="50,30 77,78 23,78" fill="#ff7a00"/>
</svg>`,

    school: `
<svg viewBox="0 0 100 100" role="img" aria-label="Five-sided fluorescent yellow-green sign showing two children walking">
  <polygon points="50,4 95,40 95,96 5,96 5,40" fill="#1f1f1f"/>
  <polygon points="50,10 90,42 90,91 10,91 10,42" fill="#c6e816"/>
  <g fill="#1f1f1f">
    <circle cx="38" cy="44" r="6"/>
    <path d="M32 52 h12 l3 18 h-5 l-2 16 h-4 l-1-12 l-1 12 h-4 l-2-16 h-5 z"/>
    <circle cx="62" cy="50" r="5"/>
    <path d="M57 57 h10 l3 15 h-4 l-2 13 h-3 l-1-10 l-1 10 h-3 l-2-13 h-4 z"/>
  </g>
</svg>`,

    noPassing: `
<svg viewBox="0 0 100 100" role="img" aria-label="Sideways yellow pennant-shaped sign reading NO PASSING ZONE">
  <polygon points="4,18 4,82 97,50" fill="#1f1f1f"/>
  <polygon points="8,23 8,77 88,50" fill="#ffd200"/>
  <g font-family="Arial, Helvetica, sans-serif" font-weight="700" fill="#1f1f1f" text-anchor="middle">
    <text x="32" y="44" font-size="11">NO</text>
    <text x="35" y="55" font-size="9">PASSING</text>
    <text x="32" y="65" font-size="9">ZONE</text>
  </g>
</svg>`,

    crossbuck: `
<svg viewBox="0 0 100 100" role="img" aria-label="White X-shaped sign reading RAILROAD CROSSING">
  <g transform="rotate(35 50 50)">
    <rect x="2" y="40" width="96" height="20" fill="#fff" stroke="#1f1f1f" stroke-width="3"/>
    <g font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="11" text-anchor="middle" fill="#1f1f1f">
      <text x="23" y="54">RAIL</text><text x="77" y="54">ROAD</text>
    </g>
  </g>
  <g transform="rotate(-35 50 50)">
    <rect x="2" y="40" width="96" height="20" fill="#fff" stroke="#1f1f1f" stroke-width="3"/>
    <g font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="11" text-anchor="middle" fill="#1f1f1f">
      <text x="23" y="54">CROSS</text><text x="77" y="54">ING</text>
    </g>
  </g>
</svg>`,
};

const QUESTIONS = [
    // ---- Signs ----
    {
        question: "This sign on the rear of a vehicle means:",
        image: "slowMoving",
        choices: [
            "The vehicle is designed to travel 25 mph or less.",
            "The vehicle is carrying hazardous materials.",
            "The vehicle is about to make a wide right turn.",
            "The vehicle is an emergency vehicle and has the right-of-way.",
        ],
        answer: 0,
        explanation: "The orange triangle marks a slow-moving vehicle, such as farm equipment designed to go 25 mph or less. Slow down, be patient, and pass only when it's safe. (Guide 4.8)",
    },
    {
        question: "A five-sided sign like this one warns you that:",
        image: "school",
        choices: [
            "You are near a school or a school crossing.",
            "A pedestrian-only street is ahead.",
            "A playground parking lot is ahead.",
            "There is a public park entrance ahead.",
        ],
        answer: 0,
        explanation: "Fluorescent yellow-green signs warn of school, pedestrian, and bicycle activity, and the five-sided (pentagon) shape is used for school zones and school crossings. (Guide 4.12)",
    },
    {
        question: "What does this pennant-shaped sign on the left side of the road mean?",
        image: "noPassing",
        choices: [
            "You are entering a no-passing zone.",
            "The road narrows to one lane ahead.",
            "Traffic must merge to the right.",
            "Passing is allowed with caution.",
        ],
        answer: 0,
        explanation: "The yellow pennant marks the start of a no-passing zone, usually where hills, curves, or intersections hide oncoming traffic. (Guide 4.12)",
    },
    {
        question: "When you see this sign, you should:",
        image: "crossbuck",
        choices: [
            "Look and listen for trains and be ready to stop. Trains always have the right-of-way.",
            "Stop only if a crossing gate is down.",
            "Speed up to cross the tracks quickly.",
            "Stop only if you can see a train.",
        ],
        answer: 0,
        explanation: "The crossbuck marks a railroad crossing. Trains always have the right-of-way and can take up to a mile to stop. Trust the signals even if you don't see a train. (Guide 4.7)",
    },

    // ---- Signals ----
    {
        question: "A flashing red traffic light means:",
        choices: [
            "Come to a complete stop, then go when it's safe and it's your turn.",
            "Slow down and proceed with caution without stopping.",
            "The light is about to turn green.",
            "Stop only if there is cross traffic.",
        ],
        answer: 0,
        explanation: "A flashing red light works like a stop sign: come to a full stop, then go when it's your turn. (Guide 4.11)",
    },
    {
        question: "You come to an intersection where the traffic signal isn't working. You should:",
        choices: [
            "Treat it as a four-way stop: stop completely, yield to traffic on your right, and go when it's safe.",
            "Continue through if you're on the larger road.",
            "Slow down and proceed without stopping.",
            "Turn around and find another route.",
        ],
        answer: 0,
        explanation: "If a traffic signal isn't working, treat the intersection like a four-way stop. (Guide 4.10)",
    },
    {
        question: "You are on a two-way street, stopped at a red light. Can you legally turn left onto a one-way street?",
        choices: [
            "Yes, after a complete stop, if traffic allows and no sign prohibits it.",
            "Only if there is a green arrow with the red light.",
            "Only if a sign says left turns on red are allowed.",
            "No, you must wait for the green light.",
        ],
        answer: 0,
        explanation: "After a complete stop at a red light, you may turn left onto a one-way street (or right onto any street) unless a \"no turn on red\" sign is posted and you have room to enter traffic. (Guide 4.11)",
    },

    // ---- Right-of-way ----
    {
        question: "Two vehicles arrive at a four-way stop at about the same time. Who goes first?",
        choices: [
            "The vehicle on the right.",
            "The vehicle on the left.",
            "The larger vehicle.",
            "The vehicle going faster.",
        ],
        answer: 0,
        explanation: "At a four-way stop, first to arrive goes first. If two vehicles arrive at about the same time, yield to the one on the right. (Guide 4.13)",
    },
    {
        question: "You are turning left at an intersection on a solid green light (no arrow). You must:",
        choices: [
            "Yield to oncoming traffic and turn when there is a safe gap.",
            "Go first because you have a green light.",
            "Wait for the light to turn yellow before turning.",
            "Turn left before oncoming cars can start moving.",
        ],
        answer: 0,
        explanation: "When turning left on a green light, oncoming traffic has the right-of-way. Wait in a spot with a clear view and turn when there's a break in traffic. (Guide 4.11)",
    },
    {
        question: "At an uncontrolled intersection (no signs or signals), you must yield the right-of-way when:",
        choices: [
            "You are entering a paved road from an unpaved road.",
            "You are on the wider of the two roads.",
            "You are going straight and the other driver is turning left.",
            "You reach the intersection first.",
        ],
        answer: 0,
        explanation: "At an uncontrolled intersection you must yield if a vehicle is already in it, if you're entering a state highway from a secondary road, if you're entering a paved road from an unpaved one, or if you're turning left in front of oncoming traffic. (Guide 4.15)",
    },
    {
        question: "When entering a roundabout, you should:",
        choices: [
            "Yield to all traffic already in the roundabout and travel counterclockwise.",
            "Enter quickly. Traffic entering has the right-of-way.",
            "Travel clockwise around the center island.",
            "Stop inside the roundabout to let others enter.",
        ],
        answer: 0,
        explanation: "All vehicles yield on entry to traffic already in the roundabout, then travel counterclockwise and exit at the street they want. (Guide 4.15)",
    },
    {
        question: "An ambulance with flashing lights and a siren is approaching behind you. You should:",
        choices: [
            "Pull to the right side of the road and stop until it passes.",
            "Speed up to stay ahead of it.",
            "Stop immediately in your lane.",
            "Keep going at the same speed but move to the left lane.",
        ],
        answer: 0,
        explanation: "As soon as you see or hear an emergency vehicle using lights or sirens, pull to the right side of the road and stop. Wait until it has passed before signaling and reentering traffic. (Guide 4.9)",
    },
    {
        question: "A pedestrian is crossing in front of you at an intersection. You may go after the pedestrian has:",
        choices: [
            "Cleared your lane and one additional lane.",
            "Stepped off the curb.",
            "Reached the middle of the street.",
            "Made eye contact with you.",
        ],
        answer: 0,
        explanation: "Wait until a pedestrian has cleared your lane and one more lane. If they use a wheelchair, cane, guide dog, or other service animal, wait until they have crossed the whole street. (Guide 4.1)",
    },

    // ---- Speed ----
    {
        question: "Unless otherwise posted, the speed limit on city and town streets in Washington is:",
        choices: ["25 mph", "20 mph", "30 mph", "35 mph"],
        answer: 0,
        explanation: "Washington law (RCW 46.61.400) sets 25 mph on city and town streets, 50 mph on county roads, and 60 mph on state highways unless other limits are posted.",
    },
    {
        question: "What is the speed limit in a school zone when children are present or signs say the limit applies?",
        choices: ["20 mph", "15 mph", "25 mph", "30 mph"],
        answer: 0,
        explanation: "The school zone speed limit is 20 mph, because higher speeds increase the risk of fatal crashes. Signs may show when it applies. (Guide 4.17)",
    },
    {
        question: "You are approaching a tow truck stopped on the shoulder with its lights flashing. Washington law requires you to:",
        choices: [
            "Move over into a farther lane, or slow to at least 10 mph below the posted limit.",
            "Honk to warn the tow truck operator.",
            "Stop completely until the tow truck leaves.",
            "Keep going at the speed limit. The law only applies to police cars.",
        ],
        answer: 0,
        explanation: "When a roadside response vehicle has flashing lights, move over or slow to at least 10 mph below the speed limit, and never above 50 mph. This includes tow trucks, police, fire, ambulances, and road crews. (Guide 4.17)",
    },

    // ---- School buses ----
    {
        question: "You are on a two-lane road. A school bus coming toward you stops and turns on its red lights. You must:",
        choices: [
            "Stop until the red lights stop flashing and the stop sign is pulled back.",
            "Slow down and pass carefully.",
            "Continue, because you're traveling in the opposite direction.",
            "Stop only if children are crossing in front of you.",
        ],
        answer: 0,
        explanation: "On a two-lane road, vehicles in both directions must stop when a school bus flashes its red lights and extends its stop sign. (Guide 4.2)",
    },
    {
        question: "When are you NOT required to stop for a school bus with flashing red lights?",
        choices: [
            "When you're traveling in the opposite direction on a road with three or more lanes, or one divided by a median or barrier.",
            "When you're behind the bus and in a center turn lane.",
            "When no children are visible near the bus.",
            "When the bus is stopped on the opposite side of a two-lane road.",
        ],
        answer: 0,
        explanation: "Traffic going the other way doesn't need to stop if there are three or more lanes, or the lanes are separated by a median or barrier. Drivers behind the bus, including those in turn lanes, must always stop. (Guide 4.2)",
    },

    // ---- Impaired driving ----
    {
        question: "For drivers 21 and older, a blood alcohol concentration (BAC) of ___ or higher is considered driving under the influence.",
        choices: ["0.08%", "0.02%", "0.05%", "0.10%"],
        answer: 0,
        explanation: "For drivers 21 and older, a BAC of 0.08% or higher is a DUI. (Guide 1.15)",
    },
    {
        question: "A driver under 21 can be charged for driving with a blood alcohol concentration of:",
        choices: ["0.02% or more", "0.08% or more", "0.05% or more", "0.10% or more"],
        answer: 0,
        explanation: "Drivers under 21 face DUI consequences at a BAC of 0.02% or more. (Guide 1.15)",
    },
    {
        question: "For drivers 21 and older, it's a DUI to have more than ___ of active THC per milliliter of blood.",
        choices: ["5 nanograms", "0 nanograms", "2 nanograms", "10 nanograms"],
        answer: 0,
        explanation: "The THC limit is 5 nanograms per milliliter of blood for drivers 21 and older. For drivers under 21, anything above 0 nanograms counts. (Guide 1.15)",
    },
    {
        question: "Under Washington's Implied Consent Law, if you refuse a breath or blood test when an officer suspects you are impaired:",
        choices: [
            "You could lose your driving privilege for 90 days to 2 years, or until age 21, whichever is longer.",
            "Nothing happens unless you are convicted of DUI.",
            "You will receive a warning on your first refusal.",
            "You can take the test at a later date instead.",
        ],
        answer: 0,
        explanation: "Everyone who drives in Washington agrees to be tested. Refusing can cost you your driving privilege for 90 to 730 days, or until you turn 21, whichever is longer. (Guide 1.15)",
    },
    {
        question: "Alcohol- and drug-related offenses stay on your driving record for:",
        choices: ["Life", "3 years", "5 years", "10 years"],
        answer: 0,
        explanation: "Alcohol- and drug-related offenses appear on your driving record for life. (Guide 1.15)",
    },
    {
        question: "Under the open container law, an opened bottle of alcohol may be carried in a vehicle only:",
        choices: [
            "In the trunk or truck bed.",
            "In the glove compartment.",
            "Under the driver's seat.",
            "In the back seat if a passenger holds it.",
        ],
        answer: 0,
        explanation: "Opened alcohol and cannabis products can only be carried in a trunk or truck bed, never in storage compartments the driver can reach. (Guide 1.15)",
    },

    // ---- Phones and seat belts ----
    {
        question: "Which statement about electronic devices is true for ALL Washington drivers?",
        choices: [
            "You may not hold a phone, tablet, or other electronic device while driving.",
            "You may text only while stopped at a red light.",
            "You may hold your phone if you are on speaker.",
            "Drivers over 18 may use a handheld phone on the freeway.",
        ],
        answer: 0,
        explanation: "No driver of any age may hold an electronic device while driving. Hands-free use is allowed for licensed adults, but it's still a distraction. (Guide 3.4)",
    },
    {
        question: "Who must wear a seat belt in a moving vehicle in Washington?",
        choices: [
            "Every person in the vehicle, or be secured in an approved child restraint.",
            "Only the driver and front-seat passenger.",
            "Only passengers under 16.",
            "Only people riding on the freeway.",
        ],
        answer: 0,
        explanation: "Every person in a moving vehicle must wear a seat belt or be fastened into an approved child restraint (RCW 46.61.687 and 46.61.688). Children under 13 should ride in the back seat. (Guide 2.6)",
    },

    // ---- Parking ----
    {
        question: "You may not park within ___ of a fire hydrant.",
        choices: ["15 feet", "5 feet", "10 feet", "30 feet"],
        answer: 0,
        explanation: "Don't park within 15 feet of a fire hydrant. Other limits include 30 feet from a stop sign, yield sign, or traffic signal and 50 feet from a railroad crossing. (Guide 4.18)",
    },
    {
        question: "When parking facing downhill next to a curb, you should turn your front wheels:",
        choices: [
            "Toward the curb.",
            "Away from the curb.",
            "Straight ahead.",
            "It doesn't matter if the parking brake is set.",
        ],
        answer: 0,
        explanation: "Facing downhill, turn your wheels toward the curb so the car rolls into it if the brake fails. Always set your parking brake on a hill. (Guide 4.18)",
    },

    // ---- Teen licensing ----
    {
        question: "To get an intermediate license at 16 or 17, how much supervised driving practice must you complete?",
        choices: [
            "At least 40 hours of day driving and 10 hours of night driving.",
            "At least 30 hours total, with 5 at night.",
            "At least 20 hours of day driving and 20 hours of night driving.",
            "No practice is required if you pass driver training.",
        ],
        answer: 0,
        explanation: "Teens need at least 50 hours of supervised practice (40 day and 10 night) and must hold their instruction permit for at least 6 months. (Guide 1.8)",
    },
    {
        question: "During the first 6 months with an intermediate license, you may NOT carry:",
        choices: [
            "Any passengers under age 20 who aren't immediate family.",
            "More than 3 passengers of any age.",
            "Any passengers at all.",
            "Passengers over age 25.",
        ],
        answer: 0,
        explanation: "For the first 6 months, no passengers under 20 except immediate family. After that, until 18 or one year (whichever is first), no more than 3 passengers under 20 except immediate family. (Guide 1.8)",
    },
    {
        question: "An intermediate license holder may not drive between ___ unless accompanied by a parent, guardian, or licensed driver at least 25 years old.",
        choices: [
            "1 a.m. and 5 a.m.",
            "10 p.m. and 5 a.m.",
            "Midnight and 6 a.m.",
            "11 p.m. and 4 a.m.",
        ],
        answer: 0,
        explanation: "Intermediate license holders may not drive between 1 a.m. and 5 a.m. unless accompanied by a parent, guardian, or licensed driver at least 25 years old. (Guide 1.8)",
    },
    {
        question: "If you have an instruction permit or intermediate license, you may use a cell phone while driving:",
        choices: [
            "Only to report an emergency.",
            "If it's in hands-free mode.",
            "When stopped at a red light.",
            "To use GPS navigation by hand.",
        ],
        answer: 0,
        explanation: "Permit and intermediate license holders can't use a phone or wireless device while driving, even hands-free, except to report an emergency. (Guide 1.8, 3.0)",
    },

    // ---- Lanes and markings ----
    {
        question: "On roads with more than two lanes traveling in the same direction, you should:",
        choices: [
            "Use the left lane for passing.",
            "Use the middle lane for slower speeds.",
            "Speed up so no one can pass you in the right lane.",
            "None of the above.",
        ],
        answer: 0,
        explanation: "Keep right except to pass. Use the left lane to pass slower traffic, and follow the speed limit while passing. (Guide 4.10)",
    },
    {
        question: "Bicycle lanes are marked with:",
        choices: [
            "Solid white lines and a bicycle symbol.",
            "Double yellow lines.",
            "One solid white line and one solid yellow line.",
            "Dashed white lines.",
        ],
        answer: 0,
        explanation: "Bike lanes use solid white lines and a bicycle symbol, and are often painted green. Drive in a bike lane only to turn or to reach the curb to park. (Guide 4.6, 4.16)",
    },
    {
        question: "A shared center lane marked with left-turn arrows in both directions may be used:",
        choices: [
            "Only for left turns (or U-turns where allowed), traveling no farther than 300 feet in it.",
            "To pass slow vehicles.",
            "As a merge lane when entering traffic, for any distance.",
            "By traffic going one way in the morning and the other way at night.",
        ],
        answer: 0,
        explanation: "Shared center lanes are for left turns in either direction (and U-turns where permitted). They must not be used for passing, and you shouldn't travel more than 300 feet in one. (Guide 4.16)",
    },
    {
        question: "The center of a two-way road is marked with a solid yellow line and a dashed yellow line. You may pass:",
        choices: [
            "Only when the dashed line is on your side and it's safe.",
            "Only when the solid line is on your side.",
            "From either side if no cars are coming.",
            "Never. Passing is not allowed on this type of road.",
        ],
        answer: 0,
        explanation: "You may not pass when the solid yellow line is on your side. If the dashed line is on your side, you may pass when it's safe. (Guide 4.16)",
    },

    // ---- Lights, signals, emergencies ----
    {
        question: "When using high beams, you must switch to low beams when an oncoming vehicle is within:",
        choices: ["500 feet", "100 feet", "200 feet", "1,000 feet"],
        answer: 0,
        explanation: "Dim your high beams within 500 feet of an oncoming vehicle and within 300 feet when you're following another vehicle. (Guide 2.5)",
    },
    {
        question: "Your vehicle starts to skid on a slippery road. You should:",
        choices: [
            "Take your foot off the gas and steer in the direction the vehicle is moving.",
            "Press the gas to regain traction.",
            "Steer hard in the opposite direction of the skid.",
            "Turn off the engine immediately.",
        ],
        answer: 0,
        explanation: "In a skid, take your foot off the accelerator, brake carefully (ABS lets you keep steering), and steer the way the vehicle is going until the tires grip again. (Guide 5.6)",
    },
    {
        question: "When is it safe to move back into the lane in front of a large truck after passing it?",
        choices: [
            "When you can see both of the truck's headlights in your rearview mirror.",
            "As soon as your back bumper passes the truck's front bumper.",
            "When the truck driver flashes their lights.",
            "After you've passed the truck's cab.",
        ],
        answer: 0,
        explanation: "Wait until you can clearly see both headlights in your rearview mirror before moving in front of a large vehicle. A loaded truck at 55 mph needs about 450 feet to stop. (Guide 4.4)",
    },
    {
        question: "If a law enforcement officer doesn't file a report after your collision, you must file a collision report with the state within:",
        choices: ["4 days", "24 hours", "10 days", "30 days"],
        answer: 0,
        explanation: "State law requires you to file a collision report within 4 days of a crash if a law enforcement officer doesn't file one for you. (Guide 5.9)",
    },

    // ---- Signals and signs ----
    {
        question: "A flashing yellow traffic light means:",
        choices: [
            "Slow down and proceed with caution, yielding as you would at a yield sign.",
            "Come to a complete stop before entering.",
            "The light is about to turn green.",
            "Speed up to clear the intersection.",
        ],
        answer: 0,
        explanation: "A flashing yellow light means the same as a yield sign. Treat it as an uncontrolled intersection and go when you have the right-of-way. (Guide 4.11)",
    },
    {
        question: "A steady yellow light comes on as you approach an intersection. You should:",
        choices: [
            "Slow down and prepare to stop. The light is about to turn red.",
            "Speed up to get through before it turns red.",
            "Stop immediately, even if you're already in the intersection.",
            "Continue at the same speed. Yellow means go with caution.",
        ],
        answer: 0,
        explanation: "Yellow means the light is changing to red, so slow down and prepare to stop. If you're already in the intersection, continue through at the posted speed. You may never speed up past the limit to beat the light. (Guide 4.11)",
    },
    {
        question: "A green arrow pointing left means:",
        choices: [
            "You may turn left. Oncoming traffic should be stopped.",
            "You may turn left only after yielding to oncoming traffic.",
            "Left turns are not allowed.",
            "Go straight only.",
        ],
        answer: 0,
        explanation: "A green arrow gives you the right-of-way to go in that direction. There should be no oncoming vehicles, crossing traffic, or pedestrians while it's green. (Guide 4.11)",
    },
    {
        question: "A freeway on-ramp has a ramp meter showing a red light. You should:",
        choices: [
            "Stop at the white stop line and go when the light turns green.",
            "Ignore it if the freeway looks clear.",
            "Slow down but keep moving.",
            "Use the shoulder to get around waiting cars.",
        ],
        answer: 0,
        explanation: "Ramp meters work like regular traffic signals. When the light is red, stop at the white stop line, and continue when it turns green. (Guide 4.11)",
    },
    {
        question: "Orange signs on the road warn you about:",
        choices: [
            "Construction and maintenance work.",
            "Schools and pedestrian crossings.",
            "Motorist services such as gas and food.",
            "Parks and recreation areas.",
        ],
        answer: 0,
        explanation: "Orange signs warn of construction and maintenance. Fluorescent yellow-green signs mark schools, pedestrians, and bicycles, blue signs mark motorist services, and brown signs mark recreation areas. (Guide 4.12)",
    },
    {
        question: "Fines for traffic offenses in a construction zone are doubled when:",
        choices: [
            "Workers are present.",
            "It is nighttime.",
            "It is raining.",
            "The zone is on a freeway.",
        ],
        answer: 0,
        explanation: "Fines double for offenses committed in construction areas when workers are present. (Guide 4.12)",
    },
    {
        question: "Over a reversible lane, you see a steady red X. This means:",
        choices: [
            "You may not drive in that lane.",
            "The lane is open in your direction.",
            "The lane is changing direction. Move out of it soon.",
            "The lane is for buses only.",
        ],
        answer: 0,
        explanation: "On reversible lanes, a green arrow means you can use the lane, a red X means you can't, and a steady yellow X means it's changing direction and you should move out of it as soon as it's safe. (Guide 4.16)",
    },

    // ---- Right-of-way and turns ----
    {
        question: "At a two-way stop, you are stopped and want to turn. A vehicle stopped across from you is going straight. Who has the right-of-way?",
        choices: [
            "The vehicle going straight.",
            "You, because turning vehicles go first.",
            "Whoever stopped first.",
            "The vehicle on the left.",
        ],
        answer: 0,
        explanation: "At a two-way stop, turning vehicles must yield to the vehicle going straight. (Guide 4.13)",
    },
    {
        question: "When turning left or right at an intersection, you must turn into:",
        choices: [
            "The lane closest to the direction you are coming from.",
            "Any open lane.",
            "The far lane, to leave room for others.",
            "The lane with the least traffic.",
        ],
        answer: 0,
        explanation: "State law requires you to turn into the lane closest to the direction you are coming from. With multiple turn lanes, stay in your own lane through the turn. You can change lanes after the turn. (Guide 4.14)",
    },
    {
        question: "In Washington, U-turns are:",
        choices: [
            "Generally allowed unless a sign says otherwise, but never on a curve or near the crest of a hill.",
            "Never allowed in cities.",
            "Allowed only at traffic lights.",
            "Allowed anywhere, as long as you signal.",
        ],
        answer: 0,
        explanation: "U-turns are generally allowed unless a sign prohibits them. You must be able to see clearly in every direction, so don't make one on a curve or near the top of a hill. (Guide 4.14)",
    },
    {
        question: "You are merging onto an interstate from an on-ramp. Who has the right-of-way?",
        choices: [
            "Drivers already on the interstate.",
            "You, because you are entering the road.",
            "Whoever is going faster.",
            "Whoever signals first.",
        ],
        answer: 0,
        explanation: "Drivers already on the interstate have the right-of-way. Use the whole on-ramp, your signal, and your mirrors, and adjust your speed to merge into a safe space. (Guide 5.3)",
    },
    {
        question: "Traffic is backed up because one lane is closed ahead. The \"zipper merge\" means you should:",
        choices: [
            "Use both lanes up to the merge point, then take turns merging.",
            "Merge as early as possible, even if the other lane is empty.",
            "Stop in the closing lane until someone waves you in.",
            "Drive on the shoulder to reach the front.",
        ],
        answer: 0,
        explanation: "When traffic is slow, stay in your lane until the merge area, then take turns like the teeth of a zipper. It improves traffic flow by about 60 percent. (Guide 5.3)",
    },
    {
        question: "Bicyclists riding through a crosswalk are:",
        choices: [
            "Treated as pedestrians. You must yield to them.",
            "Required to yield to all cars.",
            "Breaking the law.",
            "Treated as vehicles, so the first to arrive goes first.",
        ],
        answer: 0,
        explanation: "Bicyclists in crosswalks are considered pedestrians, and you must yield to them in both marked and unmarked crosswalks. (Guide 4.6)",
    },
    {
        question: "Is every intersection a crosswalk, even if there are no painted lines?",
        choices: [
            "Yes. Every intersection is legally a crosswalk, marked or not.",
            "No. Only painted crosswalks count.",
            "Only intersections with traffic lights.",
            "Only in school zones.",
        ],
        answer: 0,
        explanation: "Every intersection is legally a crosswalk, whether it's marked or unmarked. Yield to pedestrians there. (Guide 4.13, 4.16)",
    },

    // ---- Sharing the road ----
    {
        question: "When passing a bicyclist, you should leave at least ___ between the bicyclist and the widest part of your vehicle.",
        choices: ["3 feet", "1 foot", "2 feet", "10 feet"],
        answer: 0,
        explanation: "Leave at least 3 feet. Move over a full lane if there are two lanes in your direction, and never cross into oncoming traffic to pass. (Guide 4.6)",
    },
    {
        question: "A motorcyclist is riding on the far right side of a wide lane. You should:",
        choices: [
            "Never move into the same lane alongside the motorcycle.",
            "Share the lane if there's enough room.",
            "Honk so the rider knows you're passing.",
            "Pass on the right shoulder.",
        ],
        answer: 0,
        explanation: "Motorcyclists are entitled to a full lane. Never move into the same lane alongside one, even if the lane is wide and the rider is far to one side. (Guide 4.5)",
    },
    {
        question: "If you can't see a large truck's side mirrors while driving next to it:",
        choices: [
            "The truck driver can't see you, so get out of its blind zone.",
            "You are at a safe distance.",
            "You should honk to let the driver know you're there.",
            "The truck is about to turn.",
        ],
        answer: 0,
        explanation: "If you can't see a large vehicle's mirrors, the driver can't see you. Avoid driving alongside large vehicles for long. (Guide 2.13, 4.4)",
    },
    {
        question: "When red lights are flashing at a railroad crossing, you must stop:",
        choices: [
            "Between 15 and 50 feet from the nearest rail.",
            "Right next to the tracks so you can see better.",
            "At least 100 feet from the tracks.",
            "Only if the crossing gate is down.",
        ],
        answer: 0,
        explanation: "Stop 15 to 50 feet from the nearest rail when signals flash, a gate is lowering or down, a flagger signals, or a train is close. You must stop whether or not the gate is down. (Guide 4.7)",
    },
    {
        question: "Your vehicle stalls on railroad tracks. What should you do?",
        choices: [
            "Get everyone out of the vehicle immediately.",
            "Stay in the vehicle and try to restart it.",
            "Turn on your hazard lights and wait for help.",
            "Push the vehicle off the tracks yourself.",
        ],
        answer: 0,
        explanation: "If your vehicle gets stuck at a crossing, get everyone out right away. Then call the number on the blue Emergency Notification sign, or 911. (Guide 4.7)",
    },

    // ---- Speed and conditions ----
    {
        question: "Can you get a ticket for driving under the posted speed limit?",
        choices: [
            "Yes, if you're driving too fast for road or weather conditions.",
            "No, the posted limit is always legal.",
            "Only in a school zone.",
            "Only on the freeway.",
        ],
        answer: 0,
        explanation: "Speed limits are for ideal conditions. You must drive at a speed that's safe for current conditions, and you can be ticketed for going too fast for conditions even under the limit. (Guide 4.12, 5.1)",
    },
    {
        question: "It starts to rain on a hot day. When is the road most slippery?",
        choices: [
            "During the first few minutes of rain.",
            "After it has rained for several hours.",
            "Only once puddles form.",
            "Rain doesn't make roads slippery in summer.",
        ],
        answer: 0,
        explanation: "Heat brings oil in the asphalt to the surface, so the road is very slippery for the first few minutes of rain, until the oil washes away. (Guide 5.6)",
    },
    {
        question: "In near-freezing weather, which part of the road is likely to ice over first?",
        choices: [
            "Bridges and overpasses.",
            "Sunny stretches of highway.",
            "Busy city intersections.",
            "Freshly paved roads.",
        ],
        answer: 0,
        explanation: "Bridges and overpasses can have icy spots when the rest of the road doesn't, and shady spots can be icy on cold, wet days. (Guide 5.6)",
    },
    {
        question: "Your car begins to hydroplane on a wet road. You should:",
        choices: [
            "Take your foot off the gas, brake gently, and keep the steering wheel steady.",
            "Brake hard to stop quickly.",
            "Accelerate to push through the water.",
            "Jerk the steering wheel to regain traction.",
        ],
        answer: 0,
        explanation: "Ease off the accelerator, press the brakes gently, keep the wheel steady, and look where you want to go. The best prevention is to slow down when the road is wet. (Guide 5.6)",
    },
    {
        question: "At night, you should drive at a speed that lets you:",
        choices: [
            "Stop within the distance lit by your headlights.",
            "Keep up with the vehicle ahead of you.",
            "Use your high beams at all times.",
            "Arrive before it gets too late.",
        ],
        answer: 0,
        explanation: "Drive slowly enough to stop within the glow of your headlights (usually about 400 feet), and increase your following distance at night. (Guide 5.6)",
    },
    {
        question: "Washington law requires your headlights to be on:",
        choices: [
            "From a half hour after sunset to a half hour before sunrise.",
            "Only when it's completely dark.",
            "From sunset to sunrise only.",
            "Only on highways at night.",
        ],
        answer: 0,
        explanation: "Headlights are required from a half hour after sunset to a half hour before sunrise. It's also smart to use them in rain, snow, fog, or smoke. (Guide 2.5)",
    },
    {
        question: "When following another vehicle at night with your high beams on, switch to low beams within:",
        choices: ["300 feet", "100 feet", "500 feet", "1,000 feet"],
        answer: 0,
        explanation: "Switch to low beams within 300 feet when you're behind another vehicle and within 500 feet of an oncoming vehicle. (Guide 2.5)",
    },
    {
        question: "You should turn on your turn signal at least ___ before you turn.",
        choices: ["100 feet", "25 feet", "50 feet", "300 feet"],
        answer: 0,
        explanation: "Signal at least 100 feet before you turn or change lanes. (Guide 2.5, 4.14)",
    },
    {
        question: "Your brake lights stop working. Which hand signal tells drivers behind you that you're stopping or slowing?",
        choices: [
            "Left arm out the window, pointing down.",
            "Left arm out the window, pointing straight out.",
            "Left arm out the window, bent upward.",
            "Right arm out the passenger window.",
        ],
        answer: 0,
        explanation: "Stop or slow: left arm out, fingers pointing down. Left turn: arm straight out. Right turn: arm bent so your fingers point up. (Guide 2.5)",
    },

    // ---- Emergencies and collisions ----
    {
        question: "A tire suddenly blows out while you're driving. You should:",
        choices: [
            "Grip the wheel firmly, keep going straight, and slow down gradually without braking hard.",
            "Brake hard right away.",
            "Steer quickly onto the shoulder.",
            "Speed up to keep control.",
        ],
        answer: 0,
        explanation: "Hold the wheel firmly, keep the car straight, and take your foot off the gas. Don't brake hard. Let the car slow down, then pull off in a safe place. (Guide 5.7)",
    },
    {
        question: "Your accelerator sticks and the vehicle keeps speeding up. You should:",
        choices: [
            "Keep your eyes on the road and shift to neutral, then pull off when safe and turn off the engine.",
            "Turn off the engine immediately while moving fast.",
            "Pump the gas pedal to free it.",
            "Open the door and look at the pedal.",
        ],
        answer: 0,
        explanation: "Keep your eyes on the road, quickly shift to neutral, pull off when it's safe, and then turn off the engine. (Guide 5.7)",
    },
    {
        question: "Your vehicle breaks down on the highway. To warn other drivers, place emergency flares:",
        choices: [
            "200 to 300 feet behind the vehicle.",
            "Directly in front of the vehicle.",
            "50 feet behind the vehicle.",
            "On the roof of the vehicle.",
        ],
        answer: 0,
        explanation: "Get off the road if you can, turn on your flashers, and place flares 200 to 300 feet behind your vehicle. (Guide 5.7)",
    },
    {
        question: "After a collision, a power line falls onto your car. You should:",
        choices: [
            "Stay inside, call 911, and wait for help unless the car catches fire.",
            "Get out quickly and run away.",
            "Touch the door handle to test for electricity.",
            "Drive forward to get off the line.",
        ],
        answer: 0,
        explanation: "Assume power lines are energized. Stay in the vehicle and call 911. Only if there's a fire should you jump clear without touching the car and shuffle 35 feet away. (Guide 5.9)",
    },
    {
        question: "You hit a parked car and can't find the owner. You must:",
        choices: [
            "Leave a note where it's easy to see, with the date, time, and your contact information.",
            "Drive away. No one was hurt.",
            "Wait at the car for up to 24 hours.",
            "Report it only if the damage is over $1,000.",
        ],
        answer: 0,
        explanation: "If you hit a parked vehicle, try to find the owner. If you can't, leave a note they will easily see with the date and time of the collision and your contact information. (Guide 5.9)",
    },
    {
        question: "An officer signals you to pull over. After stopping on the right side of the road, you should:",
        choices: [
            "Stay in the vehicle with your hands on the steering wheel unless told otherwise.",
            "Get out and walk back to the patrol car.",
            "Reach for your license and registration right away.",
            "Keep the engine running and the radio on.",
        ],
        answer: 0,
        explanation: "Turn off the engine and audio, stay in the vehicle, keep your hands on the wheel, turn on interior lights at night, and wait for instructions before reaching for documents. (Guide 5.10)",
    },

    // ---- Parking ----
    {
        question: "You may not park within ___ of a stop sign, yield sign, or traffic signal.",
        choices: ["30 feet", "10 feet", "15 feet", "50 feet"],
        answer: 0,
        explanation: "Don't park within 30 feet of a traffic signal, stop sign, or yield sign. (Guide 4.18)",
    },
    {
        question: "You may not park within ___ of a railroad crossing.",
        choices: ["50 feet", "15 feet", "30 feet", "100 feet"],
        answer: 0,
        explanation: "Don't park within 50 feet of a railroad crossing, and never on the tracks. (Guide 4.18)",
    },
    {
        question: "When parallel parking, your vehicle must be no more than ___ from the curb.",
        choices: ["12 inches", "6 inches", "18 inches", "24 inches"],
        answer: 0,
        explanation: "Park no more than 12 inches from the curb. (Guide 4.18)",
    },
    {
        question: "You park on a hill where there is no curb. Which way should you turn your wheels?",
        choices: [
            "Toward the edge of the road.",
            "Toward the center of the road.",
            "Straight ahead.",
            "It depends on whether you face uphill or downhill.",
        ],
        answer: 0,
        explanation: "With no curb, turn your wheels toward the edge of the road so that if the car rolls, it rolls away from traffic. (Guide 4.18)",
    },
    {
        question: "Before opening your car door after parking on the street, a good habit is to:",
        choices: [
            "Check your mirrors and open the door with your far hand (the \"Dutch Reach\").",
            "Open the door quickly so you don't block traffic.",
            "Honk to warn bicyclists.",
            "Open the door partway and wait for traffic to go around.",
        ],
        answer: 0,
        explanation: "Check your mirrors, then open the door with the hand farthest from it. This turns your body so you can see approaching bicyclists and keeps the door from flying open. (Guide 4.18)",
    },

    // ---- Lane markings ----
    {
        question: "Double solid white lines between lanes mean:",
        choices: [
            "It is illegal to cross them.",
            "You may cross them to pass.",
            "The lane is ending.",
            "You may cross them to turn left.",
        ],
        answer: 0,
        explanation: "Double solid white lines are a barrier between lanes, and it's illegal to cross them. (Guide 4.16)",
    },
    {
        question: "Double solid yellow lines in the center of a two-way road mean:",
        choices: [
            "No passing in either direction.",
            "Passing is allowed with caution.",
            "Only one direction may pass.",
            "The road is one-way.",
        ],
        answer: 0,
        explanation: "Double solid yellow centerlines mean you may not pass in either direction. (Guide 4.16)",
    },
    {
        question: "Short, wide dashed white lines next to your lane mean:",
        choices: [
            "Your lane is ending, so you will need to merge or exit.",
            "It's a bicycle lane.",
            "No lane changes are allowed.",
            "It's a passing lane.",
        ],
        answer: 0,
        explanation: "Shorter dashed white lines mean the lane is ending, and you'll need to merge or exit. (Guide 4.16)",
    },
    {
        question: "HOV (carpool) lanes are marked with:",
        choices: [
            "A diamond symbol on signs and the pavement.",
            "Green paint and a bicycle symbol.",
            "Red stripes along the curb.",
            "Double dashed yellow lines.",
        ],
        answer: 0,
        explanation: "HOV lanes are marked with a diamond symbol and reserved for vehicles meeting the posted occupancy, plus buses, vanpools, and motorcycles. They are not passing lanes. (Guide 4.16)",
    },

    // ---- Impaired, distracted, fatigued ----
    {
        question: "A driver under 21 has any active THC in their blood (more than 0 nanograms). This is:",
        choices: [
            "Grounds for DUI consequences.",
            "Legal if it is below 5 nanograms.",
            "Legal if they have a medical card.",
            "Only a warning for first-time drivers.",
        ],
        answer: 0,
        explanation: "Drivers under 21 face DUI consequences for any active THC above 0 nanograms per milliliter of blood. Driving after consuming any cannabis is illegal at every age. (Guide 1.15, 3.1)",
    },
    {
        question: "You just started a new prescription medication. Before driving, you should:",
        choices: [
            "Wait until you know how it affects your judgment, coordination, and reaction time.",
            "Drive normally. Prescription drugs can't cause a DUI.",
            "Drink coffee to stay alert.",
            "Drive only on familiar roads.",
        ],
        answer: 0,
        explanation: "Legal drugs can still impair you, and impaired driving is a crime no matter where the drug came from. Wait until you know how a new medication affects you. (Guide 3.1)",
    },
    {
        question: "Mixing alcohol with cannabis, medication, or other drugs before driving:",
        choices: [
            "Can cause impairment greater than any one substance alone.",
            "Cancels out the effects of each substance.",
            "Is safe if you take only a small amount of each.",
            "Is only illegal for drivers under 21.",
        ],
        answer: 0,
        explanation: "Mixing substances (polydrug use) can produce effects greater than any one drug on its own, and it is the most common impairment involved in fatal crashes. (Guide 3.1)",
    },
    {
        question: "You're driving alone on a long trip and start feeling drowsy. You should:",
        choices: [
            "Pull off the road somewhere safe and take a short nap (about 20 minutes).",
            "Open the window and turn up the radio.",
            "Drive faster to arrive sooner.",
            "Keep going. Drowsiness passes on its own.",
        ],
        answer: 0,
        explanation: "If you get tired, pull off and take a 20-minute nap. On long trips, plan to stop about every 100 miles or 2 hours. (Guide 3.1)",
    },
    {
        question: "Wearing headphones or earbuds that cover both ears while driving is:",
        choices: [
            "Illegal. Only a hands-free device in one ear is allowed.",
            "Legal if the volume is low.",
            "Legal for drivers over 18.",
            "Legal on the freeway only.",
        ],
        answer: 0,
        explanation: "It's against the law to drive wearing earbuds, earphones, or headsets that play sound or cancel noise. You may use a hands-free device in one ear. (Guide 3.0)",
    },
    {
        question: "Driving under the influence (DUI) laws also apply if you are:",
        choices: [
            "In physical control of a parked vehicle, such as sitting in the driver's seat with the keys.",
            "A passenger in someone else's car.",
            "Walking across a parking lot toward your car.",
            "Riding home in a taxi or rideshare.",
        ],
        answer: 0,
        explanation: "DUI laws also cover being in physical control of a vehicle, even a parked one. If you can operate the engine, you are considered to be in control. (Guide 1.15)",
    },

    // ---- Licensing ----
    {
        question: "If you're enrolled in a driver training course, the earliest age you can apply for an instruction permit is:",
        choices: ["15", "14", "15½", "16"],
        answer: 0,
        explanation: "You can get a permit at 15 if you're enrolling in driver training. If not, you can take the knowledge exam at 15½. (Guide 1.8)",
    },
    {
        question: "How long must a 16- or 17-year-old hold an instruction permit before getting an intermediate license?",
        choices: ["At least 6 months", "At least 30 days", "At least 3 months", "At least 1 year"],
        answer: 0,
        explanation: "Teens must hold their instruction permit for at least 6 months, complete driver training, and be free of traffic violations for the 6 months before applying. (Guide 1.8)",
    },
    {
        question: "An intermediate license holder gets a second traffic violation. What happens?",
        choices: [
            "The license is suspended for 6 months or until age 18, whichever comes first.",
            "Nothing, until a third violation.",
            "The license is permanently revoked.",
            "The driver must retake only the knowledge test.",
        ],
        answer: 0,
        explanation: "For intermediate license holders, a first violation means restrictions apply until 18, a second means a 6-month suspension (or until 18, whichever comes first), and a third means suspension until 18. (Guide 1.8)",
    },
    {
        question: "If you move, you must update your address with DOL within:",
        choices: ["10 days", "30 days", "60 days", "1 year"],
        answer: 0,
        explanation: "Update your address in License Express within 10 days of moving. (Guide 1.16)",
    },
    {
        question: "Which is required of every Washington driver?",
        choices: [
            "Carry proof of liability insurance in the vehicle or with you.",
            "Keep the vehicle title in the glove box.",
            "Carry a spare driver license.",
            "Carry a copy of the driver guide.",
        ],
        answer: 0,
        explanation: "You must have liability insurance and carry proof of it. Keep your title somewhere safe, not in the vehicle. (Guide 2.0, 2.3)",
    },

    // ---- Children and occupants ----
    {
        question: "Under Washington law, children must ride in a rear-facing car seat until at least age:",
        choices: ["2", "1", "4", "6"],
        answer: 0,
        explanation: "Children up to age 2 must ride rear-facing. From 2 to 4 they need a harness seat, and after that a booster until the adult belt fits (about 4'9\"). (Guide 2.6)",
    },
    {
        question: "Children under what age should never ride in the front seat because of airbags?",
        choices: ["13", "8", "10", "16"],
        answer: 0,
        explanation: "Children under 13 should never ride in the front seat. They could be seriously injured or killed if an airbag deploys. (Guide 2.6)",
    },
    {
        question: "It is a crime to leave a child under what age unattended in a parked vehicle?",
        choices: ["12", "6", "10", "16"],
        answer: 0,
        explanation: "It's a crime to leave a child under 12 unattended in a parked vehicle, or a child under 16 alone in a vehicle with the motor running. (Guide 4.18)",
    },

    // ---- Washington-specific ----
    {
        question: "Where in Washington is driving allowed on ocean beaches, and what is the speed limit?",
        choices: [
            "Only in Grays Harbor and Pacific counties, at 25 mph.",
            "On any public beach, at 15 mph.",
            "Only on Puget Sound beaches, at 35 mph.",
            "Driving on beaches is never allowed.",
        ],
        answer: 0,
        explanation: "Beach driving is allowed only in Grays Harbor and Pacific counties. The beach counts as a state highway, the limit is 25 mph, and pedestrians and bicyclists always have the right-of-way. (Guide 4.20)",
    },
    {
        question: "At a ferry terminal, cutting into the ferry line ahead of waiting vehicles is:",
        choices: [
            "A traffic offense that can lead to a fine.",
            "Allowed if you have a ticket.",
            "Allowed for local residents.",
            "Allowed if there's an empty space.",
        ],
        answer: 0,
        explanation: "Washington State Ferries are part of the state highway system, so all rules of the road apply. Cutting the ferry line is a traffic offense. (Guide 4.20)",
    },
];
