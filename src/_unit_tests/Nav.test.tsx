// Nav.test.tsx

import React from "react";
import { render, screen } from "@testing-library/react";
import Nav from "@/app/Nav";
import { NAV_LINKS } from "@/constant"; // Assume NAV_LINKS is an array of objects

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, href }) => (
    <a className="mock-link" href={href}>
      {children}
    </a>
  ),
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, ...props }) => (
    <img className="mock-image" src={src} alt={alt} {...props} />
  ),
}));

jest.mock("./button", () => ({
  __esModule: true,
  default: ({ title, icon, variant }) => (
    <button className={`mock-button variant-${variant}`} title={title}>
      <img className="mock-button-icon" src={icon} alt="" />
    </button>
  ),
}));

describe("Nav component", () => {
  test("renders the logo", () => {
    render(<Nav />);
    const logoImage = screen.getByRole("img", { name: /logo/i });
    expect(logoImage).toBeInTheDocument();
  });

  test("renders navigation links from NAV_LINKS", () => {
    const mockNavLinks = [
      { key: 1, label: "Home", href: "/" },
      { key: 2, label: "About", href: "/about" },
    ];

    render(<Nav navLinks={mockNavLinks} />);

    const navLinks = screen.getAllByRole("link", { name: /home|about/i });
    expect(navLinks.length).toBe(mockNavLinks.length);
  });

  test("renders Login button on larger screens", () => {
    render(<Nav />);
    const loginButton = screen.getByRole("button", { name: /login/i });
    expect(loginButton).toBeInTheDocument();
    expect(loginButton).toHaveClass("mock-button variant-btn_dark_green"); // Assuming variant from Button component
  });

  test("renders mobile menu icon", () => {
    render(<Nav />);
    const menuIcon = screen.getByRole("img", { name: /menu/i });
    expect(menuIcon).toBeInTheDocument();
  });

  // Add more tests for different functionalities (e.g., hover effects, click behavior)
});
