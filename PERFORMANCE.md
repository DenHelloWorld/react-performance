# Performance Optimization Report

## Baseline Measurements

### Interaction A: Sort countries

- **Commit duration**: [N/A](https://discord.com/channels/794806036506607647/1333748258098380820/1515111545905090610) (In short, let's just focus on the "Render duration" metric in the report for now. By the next iteration, I'll adjust it to something like: "Number of commits + duration per commit.")
- **Render duration**: 404 ms
- **Screenshot**:

  ![screenshot](baseline-a.png)

---

### Interaction B: Search countries

- **Commit duration**: [N/A](https://discord.com/channels/794806036506607647/1333748258098380820/1515111545905090610) (In short, let's just focus on the "Render duration" metric in the report for now. By the next iteration, I'll adjust it to something like: "Number of commits + duration per commit.")
- **Render duration**: 197.5 ms
- **Screenshot**:

  ![screenshot](baseline-b.png)

---

### Interaction C: Change year

- **Commit duration**: [N/A](https://discord.com/channels/794806036506607647/1333748258098380820/1515111545905090610) (In short, let's just focus on the "Render duration" metric in the report for now. By the next iteration, I'll adjust it to something like: "Number of commits + duration per commit.")
- **Render duration**: 468.8 ms
- **Screenshot**:

  ![screenshot](baseline-c.png)

---

### Interaction D: Toggle column

- **Commit duration**: [N/A](https://discord.com/channels/794806036506607647/1333748258098380820/1515111545905090610) (In short, let's just focus on the "Render duration" metric in the report for now. By the next iteration, I'll adjust it to something like: "Number of commits + duration per commit.")
- **Render duration**: 377.3 ms
- **Screenshot**:

  ![screenshot](baseline-d.png)

---

## Optimized Measurements

### Interaction A: Sort countries

- **Commit duration**: [N/A](https://discord.com/channels/794806036506607647/1333748258098380820/1515111545905090610) (In short, let's just focus on the "Render duration" metric in the report for now. By the next iteration, I'll adjust it to something like: "Number of commits + duration per commit.")
- **Render duration**: 75.7 ms
- **Screenshot**:
  - ***Virtualization and proper keys***
  
  ![screenshot](optimized-a-1-virtualization.png)

  - ***Computed values (useMemo)***

  ![screenshot](optimized-a-2-usememo.png)

  - ***Event handlers (useCallback) + React.memo***

  ![screenshot](optimized-a-3-usecallback.png)
---

### Interaction B: Search countries

- **Commit duration**: [N/A](https://discord.com/channels/794806036506607647/1333748258098380820/1515111545905090610) (In short, let's just focus on the "Render duration" metric in the report for now. By the next iteration, I'll adjust it to something like: "Number of commits + duration per commit.")
- **Render duration**: 50.6 ms
- **Screenshot**:
  - ***Virtualization and proper keys***

  ![screenshot](optimized-b-1-virtualization.png)

  - ***Computed values (useMemo)***
  
  ![screenshot](optimized-b-2-usememo.png)

  - ***Event handlers (useCallback) + React.memo***

  ![screenshot](optimized-b-3-usecallback.png)
---

### Interaction C: Change year

- **Commit duration**: [N/A](https://discord.com/channels/794806036506607647/1333748258098380820/1515111545905090610) (In short, let's just focus on the "Render duration" metric in the report for now. By the next iteration, I'll adjust it to something like: "Number of commits + duration per commit.")
- **Render duration**: 80.5 ms
- **Screenshot**:
  - ***Virtualization and proper keys***

  ![screenshot](optimized-c-1-virtualization.png)

  - ***Computed values (useMemo)***

  ![screenshot](optimized-c-2-usememo.png)
---

### Interaction D: Toggle column

- **Commit duration**: [N/A](https://discord.com/channels/794806036506607647/1333748258098380820/1515111545905090610) (In short, let's just focus on the "Render duration" metric in the report for now. By the next iteration, I'll adjust it to something like: "Number of commits + duration per commit.")
- **Render duration**: 23.4 ms
- **Screenshot**:
  - ***Virtualization and proper keys***

  ![screenshot](optimized-d-1-virtualization.png)

  - ***Computed values (useMemo)***

  ![screenshot](optimized-d-2-usememo.png)

  - ***Event handlers (useCallback) + React.memo***

  ![screenshot](optimized-d-3-usecallback.png)
---

## Comparison

| Interaction    | Before (ms) | After (ms) | Improvement |
|----------------|-------------|------------|-------------|
| Sort countries | 404         | 75.7       | −81%        |
| Search         | 197.5       | 50.6       | −74%        |
| Change year    | 468.8       | 80.5       | −83%        |
| Toggle column  | 377.3       | 23.4       | −94%        |
