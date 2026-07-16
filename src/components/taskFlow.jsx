import React, { useState, useEffect, useRef } from 'react';
import '../style/taskFlow.css'

const TaskFlow = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    // Header Scroll Effect
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for Bento Cards
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll('.bento-animate');
    cards.forEach(card => observerRef.current.observe(card));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <div className="bg-background text-on-surface text-body-md overflow-hidden">
      
      {/* TopAppBar */}
      <header className={`app-header w-100 ${isScrolled ? 'scrolled' : 'top'}`}>
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2" style={{ cursor: 'pointer' }}>
            <span className="material-symbols-outlined text-primary text-headline-md fill-1">dashboard</span>
            <span className="text-headline-md text-primary m-0">TaskFlow</span>
          </div>
          
          <div className="d-none d-md-flex align-items-center gap-4">
            <a className="text-label-md text-primary text-decoration-none border-b-primary pb-1" href="#product">Product</a>
            <a className="text-label-md text-on-surface-variant text-decoration-none" href="#teams">Teams</a>
            <a className="text-label-md text-on-surface-variant text-decoration-none" href="#pricing">Pricing</a>
          </div>
          
          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-link text-label-md text-on-surface text-decoration-none d-none d-sm-block">Log In</button>
            <button className="btn-custom-primary text-label-md shadow-sm">Get Started</button>
            <button className="btn btn-link d-md-none p-1 text-on-surface">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="position-relative hero-py px-3 overflow-hidden">
          <div className="container position-relative z-1 d-flex flex-column align-items-center text-center">
            <div className="badge-custom mb-4">
              <span className="pulse-dot"></span>
              <span className="text-label-sm text-primary m-0">New: AI Workflow Automation</span>
            </div>
            
            <h1 className="text-headline-lg text-on-background mb-3" style={{ maxWidth: '800px' }}>
              Focus on the flow, not the busywork
            </h1>
            
            <p className="text-body-lg text-on-surface-variant mb-5" style={{ maxWidth: '650px' }}>
              Streamline teams, projects, and tasks in one intuitive platform. Reclaim 20% of your week with automated task distribution and real-time collaboration.
            </p>
            
            <div className="d-flex flex-column flex-sm-row gap-3 mb-5 pb-4">
              <button className="btn-custom-primary btn-xl text-label-md">
                Get Started for Free
              </button>
              <button className="btn-outline-custom text-label-md">
                <span className="material-symbols-outlined">play_circle</span> Watch Demo
              </button>
            </div>

            {/* Dashboard Mockup */}
            <div className="w-100 mockup-container bg-surface" style={{ maxWidth: '1024px' }}>
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-10 pe-none" style={{ opacity: 0.05, zIndex: 2 }}></div>
              <img 
                className="w-100 h-auto" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdavPwXd3nx051qXMHDEDi6RxEzg7JM_5h5HA-7LqiNrd_Hnlao0EAxY8OoZE3EAw21WXmfFfsipOZ3s9MhWyG4AKpssx29paeNY9pnbMIpjhdEbhqeZEnm1-uS4RaIzIlAMTm8RnRoIUxPz_RF-DdIPCSR8hb8Rkwor2kXxMj3zWMke0c0ymZBlRucVk7yAoJfIR51hL0VZqASTW4fiRr0qtTq65zENca9sfBlk1Ppbg65_AuPaE_6oK2lw54okeEkwWZJDjQfJce" 
                alt="TaskFlow Dashboard Mockup" 
              />
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-5 logo-row">
        <div className="logo-placeholder" style={{ width: '128px' }}></div>
        <div className="logo-placeholder" style={{ width: '112px' }}></div>
        <div className="logo-placeholder" style={{ width: '144px' }}></div>
        <div className="logo-placeholder" style={{ width: '96px' }}></div>
        <div className="logo-placeholder" style={{ width: '120px' }}></div>
        </div>

        {/* Features Bento Grid */}
        <section className="section-py-xl px-3" id="features">
          <div className="container">
            <div className="mb-5 text-center text-md-start">
              <h2 className="text-headline-md text-on-background mb-2">Engineered for High-Performance Teams</h2>
              <p className="text-body-md text-on-surface-variant" style={{ maxWidth: '600px' }}>
                Every feature is designed to eliminate friction and maximize output.
              </p>
            </div>
            
            <div className="row g-4">
              {/* Big Feature: Team Management */}
              <div className="col-12 col-md-7 bento-animate">
                <div className="bg-white bento-card shadow-sm position-relative overflow-hidden" style={{ minHeight: '420px' }}>
                  <div>
                    <div className="icon-box primary">
                      <span className="material-symbols-outlined">groups</span>
                    </div>
                    <h3 className="text-headline-sm mb-2">Team Management</h3>
                    <p className="text-body-md text-on-surface-variant" style={{ maxWidth: '400px' }}>
                      Create custom permission groups, organize departments into nested folders, and synchronize efforts across the entire organization without the chaos.
                    </p>
                  </div>
                  <div className="mt-4 me-n4 mb-n4">
                    <img 
                      className="w-100 object-fit-cover rounded-top-start border-start border-top border-outline-variant" 
                      style={{ height: '192px' }}
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDwxqYBrvVuGdofNvBJj-bQgD0KlY_hIxcCL9kc0lItwW3hvPgmR0ud5CzlDZH-ubV4Ejsq8fSC9XSaq8eNngfapUEGHtYdIRSCzvjpsW5kB1aJDu1gRQQzHFUvdpg2NrMlFSVyglTKlM9wl0L7KbhMpsLseruTh6lX7A0QdfYE9mB8uc9Ec7f7zGor7kI9xgK5g6_ifKqHeTdKsiD5y35vIpSlBvXP08nIGRQfW_AcboFuYrkDP-BFmhX51ANg1wVhjYAI5fu_Mcj" 
                      alt="Team Hierarchy Illustration" 
                    />
                  </div>
                </div>
              </div>

              {/* Side Feature: Project Tracking */}
              <div className="col-12 col-md-5 bento-animate">
                <div className="bg-surface-container-high bento-card shadow-sm">
                  <div>
                    <div className="icon-box secondary">
                      <span className="material-symbols-outlined">account_tree</span>
                    </div>
                    <h3 className="text-headline-sm mb-2">Project Tracking</h3>
                    <p className="text-body-md text-on-surface-variant">
                      Visualize velocity with interactive Gantt charts and Kanban boards that update instantly as work progresses.
                    </p>
                  </div>
                  <div className="mt-4 bg-white p-3 rounded-2 border border-outline-variant">
                    <div className="progress-track">
                      <div className="progress-fill"></div>
                    </div>
                    <div className="d-flex justify-content-between mt-2 text-label-sm">
                      <span>Project Beta</span>
                      <span className="text-secondary">75% Complete</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Small Feature: Instant Communication */}
              <div className="col-12 col-md-5 bento-animate">
                <div className="bg-white bento-card shadow-sm">
                  <div className="icon-box tertiary">
                    <span className="material-symbols-outlined">chat</span>
                  </div>
                  <h3 className="text-headline-sm mb-2">Instant Communication</h3>
                  <p className="text-body-md text-on-surface-variant m-0">
                    Contextual threads on every task. Stop switching between your project manager and Slack; keep the conversation where the work happens.
                  </p>
                </div>
              </div>

              {/* Small Feature: Smart Assignments */}
              <div className="col-12 col-md-7 bento-animate">
                <div className="bg-inverse-surface bento-card shadow-lg">
                  <div className="row align-items-center h-100">
                    <div className="col-12 col-md-6 mb-4 mb-md-0">
                      <div className="icon-box inverse">
                        <span className="material-symbols-outlined fill-1">bolt</span>
                      </div>
                      <h3 className="text-headline-sm text-inverse-primary mb-2">Smart Assignments</h3>
                      <p className="text-body-md" style={{ color: 'var(--surface-variant)' }}>
                        Our workload balancer automatically suggests the best person for a task based on current capacity and historical skill sets.
                      </p>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="d-flex gap-2">
                        <div className="flex-fill text-center rounded border p-2" style={{ backgroundColor: 'rgba(217, 227, 246, 0.1)', borderColor: 'rgba(217, 227, 246, 0.2)'}}>
                          <span className="text-headline-md fw-bold d-block">12%</span>
                          <span className="text-label-sm text-white opacity-50">Wait reduction</span>
                        </div>
                        <div className="flex-fill text-center rounded border p-2" style={{ backgroundColor: 'rgba(217, 227, 246, 0.1)', borderColor: 'rgba(217, 227, 246, 0.2)'}}>
                          <span className="text-headline-md fw-bold d-block">24/7</span>
                          <span className="text-label-sm text-white opacity-50">Syncing</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-py-xl bg-primary text-center px-3 position-relative overflow-hidden">
          <div className="container position-relative z-1 d-flex flex-column align-items-center">
            <h2 className="text-headline-lg text-on-primary mb-3">Ready to transform your workflow?</h2>
            <p className="text-body-lg text-white opacity-75 mb-5" style={{ maxWidth: '600px' }}>
              Join over 10,000 teams building the future of collaboration. No credit card required to start.
            </p>
            <button className="btn bg-white text-primary text-headline-sm rounded-pill shadow-lg" style={{ padding: '16px 40px', fontWeight: '600' }}>
              Start for Free
            </button>
            <p className="mt-3 text-white opacity-50 text-label-sm m-0">Free forever for teams up to 5 members.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-100 pt-5 bg-surface-container-highest border-top border-outline-variant mt-5">
        <div className="container pb-5">
          <div className="row gy-5">
            <div className="col-12 col-md-4 pe-md-5">
              <div className="d-flex align-items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-primary text-headline-sm fill-1">dashboard</span>
                <span className="text-headline-sm text-on-surface m-0">TaskFlow</span>
              </div>
              <p className="text-body-sm text-on-surface-variant">
                Empowering modern teams to achieve clarity and speed through intelligent project architecture.
              </p>
            </div>
            
            <div className="col-12 col-md-8">
              <div className="row">
                <div className="col-6 col-md-4 d-flex flex-column gap-2">
                  <span className="text-label-md text-on-surface mb-2">Product</span>
                  <a className="text-body-sm text-on-surface-variant text-decoration-none" href="#features">Features</a>
                  <a className="text-body-sm text-on-surface-variant text-decoration-none" href="#pricing">Pricing</a>
                  <a className="text-body-sm text-on-surface-variant text-decoration-none" href="#security">Security</a>
                </div>
                <div className="col-6 col-md-4 d-flex flex-column gap-2">
                  <span className="text-label-md text-on-surface mb-2">Company</span>
                  <a className="text-body-sm text-on-surface-variant text-decoration-none" href="#about">About Us</a>
                  <a className="text-body-sm text-on-surface-variant text-decoration-none" href="#careers">Careers</a>
                  <a className="text-body-sm text-on-surface-variant text-decoration-none" href="#blog">Blog</a>
                </div>
                <div className="col-12 col-md-4 mt-4 mt-md-0 d-flex flex-column gap-2">
                  <span className="text-label-md text-on-surface mb-2">Support</span>
                  <a className="text-body-sm text-on-surface-variant text-decoration-none" href="#help">Help Center</a>
                  <a className="text-body-sm text-on-surface-variant text-decoration-none" href="#privacy">Privacy Policy</a>
                  <a className="text-body-sm text-on-surface-variant text-decoration-none" href="#terms">Terms</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-top border-outline-variant border-opacity-25 py-4">
          <div className="container d-flex justify-content-between align-items-center">
            <span className="text-label-sm text-on-surface-variant opacity-75">© 2024 TaskFlow Inc. All rights reserved.</span>
            <div className="d-flex gap-3">
              <span className="material-symbols-outlined text-on-surface-variant" style={{ cursor: 'pointer' }}>language</span>
              <span className="material-symbols-outlined text-on-surface-variant" style={{ cursor: 'pointer' }}>share</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TaskFlow;