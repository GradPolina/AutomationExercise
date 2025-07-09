<div align="center">
  <h1>E2E AutomationExercise</h1>
</div>

<br>

## Preconditions

Node installed

## Setup

Navigate to desired folder in terminal and clone repo

```bash
git clone https://github.com/GradPolina/AutomationExercise.git
```

## Intall all dependencies

```bash
npm install
```

## ✅ Use Tags and Scripts

To make test execution more flexible and targeted, we use **tags** in combination with **scripts**.

### 🏷️ Adding Tags to Tests

Tags are added to test titles to group or identify them. This is especially useful for running specific tests via command line.

### Examples of using:

```bash
npm run smoke
```

```bash
npm run e2e
```

```bash
npx cypress run --env grepTags=“@e2e @smoke“
```

```bash
npx cypress run --env grep="TC_25"
```

and more, you can check this link =>> [cypress/grep](https://www.npmjs.com/package/@cypress/grep)
