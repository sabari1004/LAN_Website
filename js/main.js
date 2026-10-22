/**
 * LAN Innovations - Enterprise Frontend Controller
 * - Responsive mobile navigation drawer
 * - Smooth scroll with IntersectionObserver active nav link tracking
 * - Interactive Enterprise Architecture Flowchart & Live Telemetry Inspector
 * - Cursor-tracking spotlight cards
 * - Consultation form handler
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initHeaderScroll();
  initActiveNavScroll();
  initPracticeFilters();
  initSpotlightCards();
  initArchitectureFlowchart();
  initConsultationForm();
});

/**
 * Mobile Navigation Drawer & Backdrop Toggle
 */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const closeBtn = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !mobileMenu) return;

  const openMenu = () => {
    mobileMenu.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    toggleBtn.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    mobileMenu.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
    toggleBtn.setAttribute('aria-expanded', 'false');
  };

  toggleBtn.addEventListener('click', openMenu);

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMenu);
  }

  // Close when clicking mobile link
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close when pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
      closeMenu();
    }
  });

  // Close when clicking outer backdrop area
  mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
      closeMenu();
    }
  });
}

/**
 * Header Scroll Shadow & Contrast
 */
function initHeaderScroll() {
  const header = document.getElementById('main-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('shadow-lg', 'shadow-black/50', 'border-slate-800');
      header.classList.remove('border-border-slate/60');
    } else {
      header.classList.remove('shadow-lg', 'shadow-black/50', 'border-slate-800');
      header.classList.add('border-border-slate/60');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * Smooth Scroll with Active Link Tracking via IntersectionObserver
 */
function initActiveNavScroll() {
  const header = document.getElementById('main-header');
  const headerOffset = header ? header.offsetHeight : 70;
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Smooth click scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Active Link Observer
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));
  }
}

/**
 * Spotlight Cursor Effect (Linear/Stripe aesthetic)
 */
function initSpotlightCards() {
  const cards = document.querySelectorAll('.spotlight-card');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/**
 * Interactive Architecture Flowchart Component
 * Illustrates data flow:
 * Field Technician <-> Offline Sync / MDK Client <-> SAP BTP / OData Services <-> SAP S/4HANA Core
 * Flanked by: Asynchronous Enterprise AI Agent Layer
 */
function initArchitectureFlowchart() {
  const nodes = document.querySelectorAll('.arch-node');
  const inspectorTitle = document.getElementById('inspector-title');
  const inspectorBadge = document.getElementById('inspector-badge');
  const inspectorDescription = document.getElementById('inspector-description');
  const inspectorProtocol = document.getElementById('inspector-protocol');
  const inspectorLatency = document.getElementById('inspector-latency');
  const inspectorPayload = document.getElementById('inspector-payload');
  const simulateBtn = document.getElementById('simulate-pipeline-btn');
  const telemetryOutput = document.getElementById('sim-telemetry-output');

  if (!nodes.length) return;

  const nodeSpecs = {
    'field-tech': {
      title: 'Field Technician (SSAM, FSM & Dynamic Forms)',
      badge: 'Tier 1 &bull; Client UI Layer',
      desc: 'Native iOS/Android application running SAP Service & Asset Manager (SSAM) and Field Service Management (FSM) with custom Mobile Development Kit (MDK) UI metadata. Executes work order checklists, dynamic safety hazard assessments, and sensor barcoding.',
      protocol: 'Native Swift/Kotlin UI Engine &bull; MDK Dynamic Forms SDK',
      latency: '< 16ms Native Render Frame',
      payload: 'JSON / MDK Form Manifest :: WorkOrder #481920 (Offline Enqueued)'
    },
    'offline-mdk': {
      title: 'Offline Sync & MDK Client (Local Cache)',
      badge: 'Tier 2 &bull; Client Offline Database',
      desc: 'AES-256 encrypted local SQLite database managing bidirectional delta sync tokens. Stores full asset hierarchy and queued offline changes with localized conflict resolution.',
      protocol: 'Encrypted SQLite &bull; Client Delta Store &bull; MDK Engine',
      latency: 'Instant Local Read/Write (0ms WAN Latency)',
      payload: 'Delta Token Hash: 0x9F41B2 &bull; 8 Transactions Staged Offline'
    },
    'sap-btp': {
      title: 'SAP BTP, Integration Suite & CAP Services',
      badge: 'Tier 3 &bull; Cloud Integration Broker',
      desc: 'SAP Mobile Services, Integration Suite, and CAP microservices on BTP providing enterprise authentication, push notifications, and high-throughput OData v4 proxying into private S/4HANA endpoints via SAP Cloud Connector.',
      protocol: 'OAuth 2.0 PKCE &bull; CAP / OData v4 Batch &bull; Cloud Connector Tunnel',
      latency: 'p99: 42ms Cloud Connector Tunnel',
      payload: 'POST /sap/opu/odata4/pm/orders/v4/$batch (Chunked Stream)'
    },
    's4-core': {
      title: 'SAP S/4HANA Core & ABAP RAP Services',
      badge: 'Tier 4 &bull; Enterprise System of Record',
      desc: 'SAP S/4HANA digital core executing business logic through ABAP RESTful Application Programming (RAP), Core Data Services (CDS), and Mobile Asset Integration Framework (MAIF). ACID transaction commitment.',
      protocol: 'ABAP RAP Business Objects &bull; CDS Views &bull; MAIF Engine',
      latency: 'Transactional ACID Lock: 18ms',
      payload: 'BAPI_ALM_ORDER_MAINTAIN :: Status 0200 Committed'
    },
    'ai-layer': {
      title: 'Asynchronous Enterprise AI Agent Layer',
      badge: 'Supervisory &bull; Autonomous Sync Guard',
      desc: 'Continuous event-driven AI agents tapping Kafka/SAP Event Mesh sync logs. Automatically detects OData concurrency lockouts, validates transactional integrity, and applies self-healing retries.',
      protocol: 'Kafka Event Ingestion &bull; LLM Telemetry Classifier &bull; Auto-Remediate',
      latency: 'Continuous Async Observer (&lt; 2.4s Remediation)',
      payload: 'RECOVERY_EVENT: Auto-cleared lock collision for WorkOrder #481920'
    }
  };

  // Node selection logic
  nodes.forEach(node => {
    node.addEventListener('click', () => {
      nodes.forEach(n => n.classList.remove('selected', 'border-accent-sky-bright'));
      node.classList.add('selected', 'border-accent-sky-bright');

      const nodeId = node.getAttribute('data-node-id');
      const data = nodeSpecs[nodeId];
      if (data && inspectorTitle) {
        inspectorTitle.textContent = data.title;
        inspectorBadge.innerHTML = data.badge;
        inspectorDescription.textContent = data.desc;
        inspectorProtocol.innerHTML = data.protocol;
        inspectorLatency.textContent = data.latency;
        inspectorPayload.textContent = data.payload;
      }
    });
  });

  // Pipeline Simulation Button
  if (simulateBtn && telemetryOutput) {
    simulateBtn.addEventListener('click', () => {
      simulateBtn.disabled = true;
      simulateBtn.textContent = 'Simulating Pipeline Flow...';
      telemetryOutput.innerHTML = '<span class="text-sky-400">[00:00.00] Initiating offline field work order dispatch...</span>\n';

      const sequence = [
        { id: 'field-tech', log: '[00:00.32] SSAM & FSM Technician completes Dynamic Form #DF-901 on iOS. Stored to local MDK cache.' },
        { id: 'offline-mdk', log: '[00:00.85] MDK Sync Engine detects cellular link. Packing delta queue (8 changes, AES-256 verified).' },
        { id: 'sap-btp', log: '[00:01.40] SAP BTP Mobile Services & CAP proxy receive $batch OData payload via Cloud Connector mTLS.' },
        { id: 's4-core', log: '[00:02.05] S/4HANA ABAP RAP: Lock collision detected on equipment ledger #P-402A.' },
        { id: 'ai-layer', log: '[00:02.60] [AI SUPERVISOR] Intercepted lock exception. Generated deterministic backoff idempotency token.' },
        { id: 's4-core', log: '[00:03.20] Payload auto-recommitted to S/4HANA Plant Maintenance. Status: 100% COMPLETE.' }
      ];

      sequence.forEach((step, index) => {
        setTimeout(() => {
          // Select corresponding node
          const targetNode = document.querySelector(`.arch-node[data-node-id="${step.id}"]`);
          if (targetNode) {
            nodes.forEach(n => n.classList.remove('selected'));
            targetNode.classList.add('selected');
            targetNode.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }

          // Trigger inspector update
          const data = nodeSpecs[step.id];
          if (data && inspectorTitle) {
            inspectorTitle.textContent = data.title;
            inspectorBadge.innerHTML = data.badge;
            inspectorDescription.textContent = data.desc;
            inspectorProtocol.textContent = data.protocol;
            inspectorLatency.textContent = data.latency;
            inspectorPayload.textContent = data.payload;
          }

          // Append telemetry log
          telemetryOutput.innerHTML += `<span class="${index === 4 ? 'text-emerald-400 font-bold' : 'text-slate-300'}">${step.log}</span>\n`;
          telemetryOutput.scrollTop = telemetryOutput.scrollHeight;

          // When finished
          if (index === sequence.length - 1) {
            setTimeout(() => {
              simulateBtn.disabled = false;
              simulateBtn.textContent = 'Re-Run Pipeline Simulation';
              telemetryOutput.innerHTML += '<span class="text-emerald-400 font-semibold">[SUCCESS] Zero field data loss verified. Architecture pipeline nominal.</span>\n';
            }, 600);
          }
        }, (index + 1) * 750);
      });
    });
  }
}

/**
 * Practice Area Filter Buttons (All / Enterprise SAP / Full-Stack & Rapid AI)
 */
function initPracticeFilters() {
  const filterButtons = document.querySelectorAll('.practice-filter-btn');
  const cards = document.querySelectorAll('.practice-card');

  if (!filterButtons.length || !cards.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Update button active styling
      filterButtons.forEach(b => {
        b.classList.remove('active', 'border-sky-500/60', 'bg-sky-500/10', 'text-white');
        b.classList.add('border-border-slate', 'bg-surface-slate/80', 'text-text-muted');
      });

      btn.classList.add('active', 'border-sky-500/60', 'bg-sky-500/10', 'text-white');
      btn.classList.remove('border-border-slate', 'bg-surface-slate/80', 'text-text-muted');

      // Filter card visibility
      cards.forEach(card => {
        const cardPractice = card.getAttribute('data-practice');
        if (filter === 'all' || cardPractice === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/**
 * Consultation Request Form Handler
 */
function initConsultationForm() {
  const form = document.getElementById('consultation-form');
  const banner = document.getElementById('form-success-banner');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name')?.value || '';
    const email = document.getElementById('email')?.value || '';
    const landscape = document.getElementById('sap-landscape')?.value || '';
    const focus = document.getElementById('project-focus')?.value || '';
    const notes = document.getElementById('notes')?.value || '';

    const subject = encodeURIComponent(`Architecture Review Request: ${name} (${landscape})`);
    const bodyContent = 
`Hello LAN Innovations Team,

I would like to request an Architecture Review. Here are our project parameters:

- Name & Title: ${name}
- Corporate Email: ${email}
- Core Landscape / Tech Stack: ${landscape}
- Primary Objective: ${focus}

Project Scope & Architecture Notes:
${notes}

Looking forward to your technical response.`;

    const mailtoUrl = `mailto:contact@laninnovations.com?subject=${subject}&body=${encodeURIComponent(bodyContent)}`;

    if (banner) {
      banner.classList.remove('hidden');
    }

    // Trigger user mail client
    window.location.href = mailtoUrl;
  });
}
