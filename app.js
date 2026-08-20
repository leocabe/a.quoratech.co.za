// ===== MODAL DATA =====
const modalData = {
  micro1: {
    title: "Microwave Not Heating",
    tag: "Microwave Issue",
    color: "blue",
    intro: "When a microwave runs but doesn't heat food, the magnetron, diode, or capacitor are the most likely culprits.",
    steps: [
      { title: "Safety First", text: "Unplug the microwave. Wait at least 60 seconds. Discharge the high-voltage capacitor using an insulated discharge tool before touching any internal component." },
      { title: "Check the Door Switches", text: "The microwave has 2–3 interlock switches on the door. Test each with a multimeter (continuity mode). A faulty switch will show no continuity and must be replaced — they're cheap and model-specific." },
      { title: "Test the Thermal Fuse", text: "Locate the thermal fuse (usually on the magnetron or near the cavity). Test for continuity. A blown fuse means overheating occurred — find the root cause before replacing." },
      { title: "Test the High-Voltage Diode", text: "Remove the diode from the capacitor circuit. Test with a multimeter on diode mode — it should conduct in one direction only. A shorted or open diode stops heating." },
      { title: "Inspect the Magnetron", text: "If all other components test fine, the magnetron itself may have failed. Magnetron replacement is expensive and complex. For budget microwaves, replacement of the unit may be more economical." }
    ]
  },
  micro2: {
    title: "Sparking Inside Microwave",
    tag: "Safety Issue",
    color: "red",
    intro: "Sparking during operation is dangerous. Stop the microwave immediately and investigate before using it again.",
    steps: [
      { title: "Stop Immediately", text: "Stop the microwave at once. Do not continue using it. Remove all contents and unplug from the wall socket." },
      { title: "Check for Metal Objects", text: "The most common cause. Even small pieces of foil, metal twist-ties, or metallic decorations on dishes will cause arcing. Remove all items and inspect thoroughly." },
      { title: "Inspect the Waveguide Cover", text: "This cardboard/mica panel covers the magnetron opening on the interior wall. If it has black spots, burn marks, or holes, it must be replaced. Clean off any burnt residue carefully." },
      { title: "Check the Rack Support Clips", text: "If your microwave has a wire rack, the plastic rack support clips can burn. Inspect all clips — replace any that are burnt or cracked." },
      { title: "Inspect Interior Walls", text: "Burn marks or peeling paint on the interior walls can cause arcing. Use food-safe cavity paint to seal any exposed areas. If damage is severe, consult a technician." }
    ]
  },
  micro3: {
    title: "Turntable Not Spinning",
    tag: "Mechanical Issue",
    color: "blue",
    intro: "A non-spinning turntable means uneven cooking. This is usually one of the easiest microwave repairs.",
    steps: [
      { title: "Clean the Roller Ring Guide", text: "Remove the glass tray and the 3-wheel roller ring. Clean both in warm soapy water. Food debris under the ring is the #1 cause of rotation issues." },
      { title: "Inspect the Roller Ring", text: "Check for cracked or missing wheels on the roller ring. All three wheels must be present and roll freely. Replacements cost $5–15 and are universal fit by diameter." },
      { title: "Check the Coupling", text: "The plastic drive coupling connects the motor to the glass tray. Inspect for cracks or stripping on the D-shaped shaft. Replace if damaged — costs under $10." },
      { title: "Test the Turntable Motor", text: "Unplug the unit. Access the motor (usually from beneath). Test with a multimeter for continuity. Most turntable motors run at 3–5 RPM at 120V AC and cost $10–25 to replace." }
    ]
  },
  micro4: {
    title: "Unusual Noises",
    tag: "Microwave Issue",
    color: "orange",
    intro: "Different sounds indicate different problems. Identify the type of noise to narrow down the cause.",
    steps: [
      { title: "Loud Humming / Buzzing", text: "Normal microwave operation produces some hum. Abnormally loud or increased buzzing often points to a failing magnetron or high-voltage transformer. These are advanced repairs — consider a technician." },
      { title: "Rattling", text: "Usually caused by the glass tray not seated properly, a loose roller ring wheel, or an object inside the cavity. Remove and clean the tray system, then reassemble correctly." },
      { title: "Grinding Noise", text: "Grinding typically means the turntable motor is struggling or the roller ring is damaged. Clean the roller ring pathway thoroughly. If it persists, replace the roller ring and/or motor." },
      { title: "Clicking / Crackling", text: "Arcing or sparking causes a crackling sound. Stop immediately and inspect the waveguide cover and interior walls for burn marks. See the 'Sparking' guide for full steps." }
    ]
  },
  micro5: {
    title: "Door Won't Close / Latch",
    tag: "Door Issue",
    color: "orange",
    intro: "A microwave won't operate if the door doesn't properly latch. The interlock switches prevent operation for safety.",
    steps: [
      { title: "Inspect the Door Latch Hooks", text: "Open and close the door slowly. Examine the 2 plastic latch hooks that extend from the door — they engage the switches in the frame. Look for cracks, breaks, or worn tips." },
      { title: "Check the Strike Plate", text: "The metal or plastic plate that the hooks engage may be bent or damaged. Visually inspect the frame opening. Carefully bend any deformed metal back into position." },
      { title: "Test the Door Interlock Switches", text: "With the microwave unplugged, access the switch panel behind the door frame. Use a multimeter to test each switch for continuity when the latch is pressed. Replace any failed switches." },
      { title: "Door Alignment", text: "A misaligned door can prevent proper latching. Check the door hinges for wear. The door should hang evenly and create a tight seal around the entire perimeter when closed." }
    ]
  },
  micro6: {
    title: "Display Not Working",
    tag: "Electronics Issue",
    color: "purple",
    intro: "A blank or malfunctioning display can indicate issues from a simple power problem to a faulty control board.",
    steps: [
      { title: "Reset the Microwave", text: "Unplug from the wall for 3 full minutes, then plug back in. This resets the control board's memory. Many display glitches are resolved by a full power cycle." },
      { title: "Check the Power Supply", text: "Test the outlet with another device. Check if the microwave's internal fuse is blown — a blown fuse will kill power to everything including the display." },
      { title: "Inspect the Control Panel", text: "Individual buttons can short-circuit the panel. Press each button and check if any feel 'stuck' or trigger erratic behavior. If a specific button causes the display to blank, the membrane keypad needs replacement." },
      { title: "Control Board Replacement", text: "If the display is completely dead after checking power and fuses, the main control board has likely failed. Board replacement is model-specific, expensive, and should be evaluated against the unit's age and value." }
    ]
  },
  ac1: {
    title: "AC Not Cooling",
    tag: "AC Issue",
    color: "cyan",
    intro: "The most common AC complaint. Work through these checks systematically before calling a technician.",
    steps: [
      { title: "Check the Air Filter", text: "A clogged air filter is the #1 cause of poor cooling. Remove and inspect the filter — if you can't see light through it, clean or replace it. A dirty filter can reduce efficiency by 15–20%." },
      { title: "Check the Thermostat Settings", text: "Ensure the thermostat is set to COOL mode, not FAN ONLY. Verify the set temperature is below the current room temperature. Try lowering it by 5°F to force a cooling cycle." },
      { title: "Inspect the Outdoor Unit", text: "Check that the outdoor condenser unit is running. Clear any debris (leaves, grass, dirt) blocking the fins. Ensure at least 2 feet of clearance around the unit." },
      { title: "Check for Ice on Indoor Coil", text: "Turn off the AC and run only the fan for 1–2 hours to thaw any ice. Ice formation indicates low refrigerant or restricted airflow. After thawing, check filter again." },
      { title: "Call a Technician if Needed", text: "If all the above checks pass and the unit still isn't cooling, refrigerant levels may be low (indicating a leak) or the compressor may have failed. Both require a certified HVAC technician." }
    ]
  },
  ac2: {
    title: "Water Leaking Inside",
    tag: "AC Issue",
    color: "cyan",
    intro: "Water dripping from the indoor unit is messy and can cause property damage. The fix is usually straightforward.",
    steps: [
      { title: "Check the Drain Line", text: "The condensate drain line removes water collected by the evaporator coil. Locate the drain outlet (usually outside). If no water drips out during operation, the line is clogged." },
      { title: "Clear the Clog", text: "Turn off the AC. Find the drain access port (usually a PVC T-piece near the indoor unit). Pour a mixture of 1 cup white vinegar into the line. This dissolves algae and slime buildup. Repeat quarterly." },
      { title: "Check the Drain Pan", text: "The drain pan sits below the evaporator coil. Check for cracks, misalignment, or overflow. Clean the pan with an anti-mold solution. A cracked pan must be replaced." },
      { title: "Dirty Air Filter", text: "A clogged filter restricts airflow, causing the evaporator coil to freeze. When it thaws, the excess water overwhelms the drain pan. Always check the filter when water leaks occur." }
    ]
  },
  ac3: {
    title: "Loud / Unusual Noises",
    tag: "AC Issue",
    color: "orange",
    intro: "Identify the noise type and its location (indoor vs outdoor unit) to diagnose efficiently.",
    steps: [
      { title: "Rattling or Vibrating", text: "Usually loose panels or screws on the unit housing. Turn off the unit and tighten all accessible screws on the indoor and outdoor covers. Also check if the outdoor unit is level and vibration pads are in place." },
      { title: "Squealing / Screeching", text: "Indicates a failing fan motor bearing or a worn belt (in older systems). In the outdoor unit, a failing compressor can also produce a high-pitched squeal. Turn off immediately and call a technician." },
      { title: "Banging or Clanking", text: "A serious noise indicating a loose or broken component inside the compressor or fan blade. Shut down the system immediately — continued operation can cause catastrophic damage. Requires professional service." },
      { title: "Hissing or Bubbling", text: "Refrigerant leaking from the system makes a hissing sound. Bubbling indicates refrigerant in liquid form escaping (more serious). Both require an immediate call to a certified HVAC technician." }
    ]
  },
  ac4: {
    title: "Frozen Evaporator Coil",
    tag: "AC Issue",
    color: "cyan",
    intro: "Ice on the indoor coil completely blocks airflow and can damage the compressor if left unaddressed.",
    steps: [
      { title: "Thaw the Coil First", text: "Turn the AC thermostat to OFF but set the fan to ON. Run the fan only for 1–3 hours until all ice has melted. Have towels ready to absorb dripping water from the drain pan." },
      { title: "Check the Air Filter", text: "The #1 cause of frozen coils is a dirty air filter that restricts airflow. Clean or replace the filter before restarting the system." },
      { title: "Check for Blocked Vents", text: "Ensure all supply and return vents in the home are open and unobstructed. Blocked vents reduce airflow across the coil, causing it to freeze." },
      { title: "Check Refrigerant Level", text: "Low refrigerant causes the coil pressure to drop, making it too cold and freezing moisture from the air. If the coil refreezes after the filter is cleaned, refrigerant is likely low. Call an HVAC technician." }
    ]
  },
  ac5: {
    title: "Weak Airflow",
    tag: "AC Issue",
    color: "blue",
    intro: "Poor airflow means the system can't distribute conditioned air effectively, leading to uneven temperatures.",
    steps: [
      { title: "Clean the Air Filter", text: "Always start here. A severely clogged filter can reduce airflow by 50% or more. Remove, clean (or replace), and reinstall. Test immediately after — this is the fix in most cases." },
      { title: "Check All Vents", text: "Ensure no furniture, curtains, or objects are blocking supply or return vents. All dampers in the ductwork should be in the open position." },
      { title: "Clean the Blower Fan", text: "The indoor air handler's blower wheel collects dust and lint over time. A dirty blower wheel runs harder but moves less air. This is a more involved cleaning — refer to your unit's manual for access." },
      { title: "Inspect Ductwork", text: "Leaking, disconnected, or crushed ductwork in the attic or walls can divert conditioned air before it reaches the living space. Inspect accessible sections and seal leaks with mastic sealant or metallic tape." }
    ]
  },
  ac6: {
    title: "AC Won't Turn On",
    tag: "AC Issue",
    color: "purple",
    intro: "Before assuming a major failure, work through these electrical checks systematically.",
    steps: [
      { title: "Check the Circuit Breaker", text: "Go to your electrical panel and locate the AC breaker. If it's tripped (in the middle position), turn it completely OFF then back ON. If it trips again immediately, there's a short or overload — call an electrician." },
      { title: "Check the Disconnect Box", text: "Outdoor units have a disconnect box nearby. Open it and check that the pull-out disconnect block is fully inserted and fuses are intact. Test fuses with a multimeter." },
      { title: "Check the Thermostat", text: "Replace the thermostat batteries. Ensure it's set to COOL and the set temperature is below room temperature. Try turning the system on from the air handler directly if possible." },
      { title: "Check the Safety Float Switch", text: "If the drain pan is full of water, the safety float switch cuts power to prevent overflow damage. Empty and clean the drain pan and line, then retry." }
    ]
  }
};

// ===== MODAL OPEN/CLOSE =====
const overlay  = document.getElementById('modalOverlay');
const modalBox = document.getElementById('modalBox');
const modalContent = document.getElementById('modalContent');
const modalClose   = document.getElementById('modalClose');

function openModal(id) {
  const d = modalData[id];
  if (!d) return;
  const colorMap = { blue: '#3b82f6', cyan: '#06b6d4', red: '#ef4444', orange: '#f59e0b', purple: '#8b5cf6' };
  const color = colorMap[d.color] || '#3b82f6';
  modalContent.innerHTML = `
    <h2>${d.title}</h2>
    <div class="section-tag modal-tag" style="background:${color}18;color:${color};border:1px solid ${color}44;">${d.tag}</div>
    <p style="color:var(--text-muted);font-size:0.95rem;line-height:1.7;margin-bottom:4px;">${d.intro}</p>
    <div class="modal-steps">
      ${d.steps.map((s, i) => `
        <div class="modal-step">
          <div class="modal-step-num">${String(i+1).padStart(2,'0')}</div>
          <div>
            <strong style="display:block;margin-bottom:4px;font-size:0.92rem;">${s.title}</strong>
            <p>${s.text}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

document.querySelectorAll('[data-modal]').forEach(card => {
  card.addEventListener('click', () => openModal(card.dataset.modal));
});
modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ===== TABS =====
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
    document.getElementById('tab-' + tab).classList.remove('hidden');
  });
});

// ===== FAQ =====
document.querySelectorAll('.faq-item').forEach(item => {
  item.querySelector('.faq-q').addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ===== HAMBURGER =====
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== SCROLL NAV HIGHLIGHT =====
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navAnchors.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--cyan)' : '';
  });
}, { passive: true });

// ===== ANIMATE ON SCROLL =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.issue-card, .tool-card, .safety-card, .step-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
