import { describe, it, expect, vi, afterEach } from "vitest";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HeroSection, { SLIDE_INTERVAL } from "./HeroSection";

const selectedTab = () => screen.getAllByRole("tab").findIndex((t) => t.getAttribute("aria-selected") === "true");

describe("HeroSection slider", () => {
  afterEach(() => vi.useRealTimers());

  const setup = () =>
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>,
    );

  it("navigates with next, previous and tabs, wrapping around", () => {
    setup();
    expect(selectedTab()).toBe(0);
    fireEvent.click(screen.getByLabelText("Next slide"));
    expect(selectedTab()).toBe(1);
    fireEvent.click(screen.getByLabelText("Previous slide"));
    fireEvent.click(screen.getByLabelText("Previous slide"));
    expect(selectedTab()).toBe(2);
    fireEvent.click(screen.getAllByRole("tab")[0]);
    expect(selectedTab()).toBe(0);
  });

  it("auto-advances on a timer and stops when paused", () => {
    vi.useFakeTimers();
    setup();
    // Each slide's timer is scheduled after the re-render, so step one interval at a time
    const tick = () => act(() => void vi.advanceTimersByTime(SLIDE_INTERVAL));
    tick();
    expect(selectedTab()).toBe(1);
    tick();
    tick();
    expect(selectedTab()).toBe(0);
    fireEvent.click(screen.getByLabelText("Pause slideshow"));
    tick();
    tick();
    expect(selectedTab()).toBe(0);
    fireEvent.click(screen.getByLabelText("Play slideshow"));
    tick();
    expect(selectedTab()).toBe(1);
  });

  it("hides inactive slides from assistive tech", () => {
    setup();
    const slides = screen.getAllByRole("group", { hidden: true }).filter((g) => g.getAttribute("aria-roledescription") === "slide");
    expect(slides.filter((s) => s.getAttribute("aria-hidden") === "false")).toHaveLength(1);
  });
});
