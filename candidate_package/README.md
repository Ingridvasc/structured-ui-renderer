# Structured UI Renderer – Refactoring Challenge

## Assumptions & priorities

- **Priority order:**
  1. Typing and eliminating `any`
  2. Extensible registry system (no if/else)
  3. Componentization by section type
  4. New `metric` section
  5. Basic error handling

- **Explicit out-of-scope:**
  - Styling/CSS (not requested)
  - Automated tests (described in write-up)
  - Full edge case coverage

- **With more time:**
  1. Zod validation for payload
  2. Unit/integration tests
  3. Nested section support

## Reflective questions

### What did you change and why?
Removed centralized if/else, replaced with registry pattern. Each section has dedicated component. Full TypeScript typing.

### What would you improve next?
Add Zod validation and tests.

### How would you scale this with ~10× more section types?
Registry scales naturally — just add new components to the map without modifying existing code (Open/Closed Principle).

### How did you handle unknown/invalid data?
UnknownSection fallback. Basic validation (Array.isArray, content existence checks).

### How would you test this?
Unit tests for each component, integration test for ResultView, registry tests.

### Which decision would you revisit first for production?
Add Zod validation to ensure payload shape before rendering.

### Did you use AI tools?
Yes — used for structure and code generation, manually reviewed and adapted.