import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { simulatorFlows, type SimulatorStep } from '../data/portfolio';
import vibraniumCoreImg from '../assets/vibranium-core.jpg';
import './ProjectSimulator.css';

export default function ProjectSimulator() {
  const [selectedFlowId, setSelectedFlowId] = useState<string>(simulatorFlows[0].id);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const currentFlow = simulatorFlows.find(f => f.id === selectedFlowId) || simulatorFlows[0];
  const steps: SimulatorStep[] = currentFlow.steps;
  const currentStep = steps[activeStepIndex] || steps[0];

  useEffect(() => {
    setActiveStepIndex(0);
    setIsPlaying(false);
  }, [selectedFlowId]);

  useEffect(() => {
    let timer: number | null = null;
    if (isPlaying) {
      timer = window.setInterval(() => {
        setActiveStepIndex(prev => {
          if (prev >= steps.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 2000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlaying, steps.length]);

  const handleNext = () => {
    if (activeStepIndex < steps.length - 1) {
      setActiveStepIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (activeStepIndex > 0) {
      setActiveStepIndex(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setActiveStepIndex(0);
    setIsPlaying(false);
  };

  return (
    <section id="simulator" className="section simulator-section" aria-label="System architecture simulator">
      <div className="container">
        <div className="section-header">
          <span className="section-identifier">04 // SIMULATION ENGINE</span>
          <h2 className="section-title">INTERACTIVE ARCHITECTURE SIMULATOR</h2>
          <p className="section-subtitle">
            Simulate real-world data pipelines, .NET request lifecycles, and high-performance database migrations step-by-step.
          </p>
        </div>

        {/* Flow selector tabs */}
        <div className="simulator-tabs" role="tablist">
          {simulatorFlows.map(flow => (
            <button
              key={flow.id}
              role="tab"
              aria-selected={selectedFlowId === flow.id}
              className={`simulator-tab ${selectedFlowId === flow.id ? 'simulator-tab--active' : ''}`}
              onClick={() => setSelectedFlowId(flow.id)}
            >
              <span className="tab-proj">{flow.project}</span>
              <span className="tab-title">{flow.title}</span>
            </button>
          ))}
        </div>

        {/* Main Holographic Simulator Console */}
        <div className="simulator-console card">
          <div className="console-hud-bar">
            <div className="console-hud-status">
              <span className="status-dot" />
              <span>PIPELINE ENGINE: ONLINE</span>
            </div>
            <div className="console-hud-metrics">
              <span>STEP {activeStepIndex + 1} OF {steps.length}</span>
              <span className="hud-sep">//</span>
              <span>{Math.round(((activeStepIndex + 1) / steps.length) * 100)}% COMPLETE</span>
            </div>
          </div>

          {/* Stepper Node Track */}
          <div className="simulator-track">
            {steps.map((step, idx) => {
              const isPast = idx < activeStepIndex;
              const isCurrent = idx === activeStepIndex;

              return (
                <div
                  key={step.id}
                  className={`track-node-wrapper ${isPast ? 'track-node--past' : ''} ${isCurrent ? 'track-node--current' : ''}`}
                  onClick={() => {
                    setActiveStepIndex(idx);
                    setIsPlaying(false);
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`Jump to step ${idx + 1}: ${step.label}`}
                >
                  <div className="track-node">
                    <span className="node-num">{idx + 1}</span>
                  </div>
                  <span className="node-label">{step.label}</span>
                  {idx < steps.length - 1 && (
                    <div className={`track-connector ${isPast ? 'track-connector--active' : ''}`} />
                  )}
                </div>
              );
            })}
          </div>

          {/* Active Step Hologram & Vibranium Reactor Grid */}
          <div className="simulator-active-row">
            <motion.div
              key={currentStep.id}
              className="step-display-card"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <div className="step-display-header">
                <div className="step-tag">
                  <span className={`component-chip chip--${currentStep.color}`}>
                    {currentStep.component}
                  </span>
                  <span className="step-phase">PHASE {activeStepIndex + 1}</span>
                </div>
                <span className="step-title-text">{currentStep.label}</span>
              </div>

              <p className="step-detail-description">{currentStep.description}</p>
            </motion.div>

            {/* Kinetic Reactor Status Hologram */}
            <div className="reactor-hologram-card">
              <img
                src={vibraniumCoreImg}
                alt="Vibranium Kinetic Core Reactor"
                className={`reactor-img ${isPlaying ? 'reactor-img--pulsing' : ''}`}
                loading="lazy"
              />
              <div className="reactor-tag-badge">
                <span className="status-dot" />
                <span>KINETIC FLUX: {isPlaying ? 'ACTIVE // 100%' : 'STABLE'}</span>
              </div>
            </div>
          </div>

          {/* Simulator Playback Controls */}
          <div className="simulator-controls">
            <button
              className="btn btn-secondary"
              onClick={handlePrev}
              disabled={activeStepIndex === 0}
            >
              PREVIOUS
            </button>

            <button
              className="btn btn-primary"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? 'PAUSE PIPELINE' : (activeStepIndex === steps.length - 1 ? 'REPLAY PIPELINE' : 'AUTO-RUN PIPELINE')}
            </button>

            <button
              className="btn btn-secondary"
              onClick={handleNext}
              disabled={activeStepIndex === steps.length - 1}
            >
              NEXT STEP
            </button>

            <button
              className="btn btn-ghost"
              onClick={handleReset}
            >
              RESET
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
