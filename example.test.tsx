import { Home } from "./src/pages/Home";
import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import "@testing-library/jest-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router";
import { AuthProvider } from "./src/context/AuthContext";

test("saw recent posts text", () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  render(
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <Home />
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );

  expect(screen.getByText("Recent Posts")).toBeInTheDocument();
});
