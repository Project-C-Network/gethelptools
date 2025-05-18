// src/router.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import MainLayout from "@/layouts/MainLayout";

// Lazy load your routes
const Home = lazy(() => import("@/routes/Home"));
const BmiTool = lazy(() => import("@/routes/BMICalculatorTool"));
const QuoteGenerator = lazy(() => import("@/routes/QuoteGeneratorTool"));
const AgeCalculator = lazy(() => import("@/routes/AgeCalculatorTool"));
const NotFound = lazy(() => import("@/routes/NotFound"));

const AppRouter = () => (
  <BrowserRouter>
    <MainLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bmi" element={<BmiTool />} />
          <Route path="/quotes" element={<QuoteGenerator />} />
          <Route path="/age-calculator" element={<AgeCalculator />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </MainLayout>
  </BrowserRouter>
);

export default AppRouter;
