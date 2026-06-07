from playwright.sync_api import sync_playwright

def run_cuj(page):
    page.goto("http://localhost:5173")
    page.wait_for_timeout(2000)

    try:
        page.get_by_role("button", name="Toggle theme").click()
    except Exception:
        pass

    page.wait_for_timeout(1000)

    # Scroll further to ensure Feature grid is fully visible
    page.evaluate("window.scrollBy(0, 1600)")
    page.wait_for_timeout(1000)

    page.screenshot(path="/home/jules/verification/screenshots/verification_dark_features_2.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
