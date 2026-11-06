import { chromium } from "playwright";

const base = process.env.BASE_URL || "http://127.0.0.1:3000";
const browser = await chromium.launch({ headless: true, args: ["--no-sandbox"] });
const errors = [];
const routes = [
  "/", "/research", "/studio", "/contact", "/privacy", "/cookies", "/legal",
  "/project/autonomous-operations", "/project/document-intelligence", "/project/flowos",
  "/project/intelligence-grid", "/project/agent-network", "/project/knowledge-engine",
  "/project/research-lab", "/project/processos", "/lab/industry-os"
];
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  page.on("pageerror", error => errors.push(error.message));
  for (const route of routes) {
    const response = await page.goto(base + route, { waitUntil: "domcontentloaded" });
    if (!response || response.status() !== 200) throw new Error("Route failed: " + route);
  }
  await page.goto(base + "/lab/industry-os", { waitUntil: "networkidle" });
  if (await page.locator(".iol-industries button").count() !== 6) throw new Error("Industry lab should expose six vertical workspaces");
  await page.getByRole("button", { name: "Healthcare & life sciences" }).click();
  await page.waitForFunction(() => document.querySelector(".iol-page-head h1")?.textContent?.includes("Healthcare"));
  await page.getByRole("button", { name: "Pain points" }).click();
  if (await page.locator(".iol-pain-list article").count() !== 6) throw new Error("Each vertical should expose six researched pain points");
  await page.goto(base, { waitUntil: "networkidle" });
  await page.waitForFunction(() => document.querySelectorAll(".unveil-mode-switch button").length === 2);
  await page.locator(".unveil-mode-switch button").nth(1).click();
  await page.waitForSelector(".unveil-index-row");
  if (await page.locator(".unveil-index-row").count() !== 8) throw new Error("Index should list all eight projects");
  await page.getByRole("button", { name: "AI Agents" }).click();
  await page.waitForFunction(() => document.querySelectorAll(".unveil-index-row").length === 2);
  if (await page.locator(".unveil-index-row").count() !== 2) throw new Error("AI Agents filter should return two projects");
  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  await mobile.goto(base, { waitUntil: "networkidle" });
  if (await mobile.evaluate(() => document.documentElement.scrollWidth > innerWidth)) throw new Error("Mobile layout overflows horizontally");
  await mobile.getByRole("button", { name: "Open menu" }).click();
  if (await mobile.locator(".mobile-nav a").count() !== 5) throw new Error("Mobile navigation should expose five links");
  if (errors.length) throw new Error("Browser runtime errors: " + errors.join("; "));
  console.log("Smoke checks passed: " + routes.length + " routes, gallery modes, filtering, mobile navigation and responsive width.");
} finally {
  await browser.close();
}
