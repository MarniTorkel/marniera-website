/** @typedef {{id:string, slug:string, title:string, summary:string, question?:string, domain:string, categories:string[], methods:string[], technologies:string[], status:'Planned'|'In development'|'Completed', featured?:boolean, dataSource?:string, demoUrl?:string, githubUrl?:string, whyItMatters?:string, exploratoryAnalysis?:string, method?:string, validation?:string, results?:string, interactiveVisualisation?:string, interpretation?:string, limitations?:string, reproducibility?:string, demonstrates?:string[], visual?:string}} DataScienceProject */
/** @type {DataScienceProject[]} */
export const dataScienceProjects = [
  {
    "id": "australian-health-equity-atlas",
    "status": "Planned",
    "question": "Explore geographic variation in Australian health and demographic indicators.",
    "demonstrates": [
      "EDA",
      "Demographic standardisation",
      "Clustering",
      "Statistical comparisons",
      "Uncertainty",
      "Model validation",
      "Visualisation"
    ],
    "reproducibility": "Planned: version the data acquisition steps, record source licences, pin dependencies and seeds, and provide executable analysis with a documented environment.",
    "slug": "australian-health-equity-atlas",
    "title": "Australian Health Equity Atlas",
    "summary": "Explore geographic variation in Australian health and demographic indicators.",
    "domain": "Population health",
    "categories": [
      "Spatial",
      "Statistical Modelling",
      "Machine Learning",
      "Visualisation"
    ],
    "methods": [
      "EDA",
      "Demographic standardisation",
      "Clustering",
      "Statistical comparisons",
      "Uncertainty"
    ],
    "technologies": [
      "Python",
      "pandas / Polars",
      "GeoPandas",
      "scikit-learn",
      "Plotly",
      "DuckDB",
      "React"
    ],
    "dataSource": "Potential sources: ABS, AIHW and appropriate Australian open datasets. Dataset selection and licensing review are planned.",
    "whyItMatters": "Geographic summaries can reveal uneven access and outcomes while making population differences visible.",
    "exploratoryAnalysis": "Plan to compare missingness, geographic coverage, denominators and demographic distributions before mapping indicators.",
    "method": "Compare crude and standardised indicators; explore clusters and display uncertainty alongside geographic estimates.",
    "validation": "Check boundary alignment, population denominators and sensitivity to standardisation choices. Account for spatial dependence.",
    "limitations": "Area-level associations do not establish individual risk or causation. Small counts and reporting differences may limit comparisons.",
    "visual": "spatial"
  },
  {
    "id": "wearable-activity-intelligence",
    "status": "Planned",
    "question": "Build a reproducible pipeline for analysing wearable sensor data and classifying activity patterns.",
    "demonstrates": [
      "EDA",
      "Time-series preprocessing",
      "Feature engineering",
      "Classification",
      "Model comparison",
      "Explainability",
      "Error analysis",
      "Model validation",
      "Visualisation"
    ],
    "reproducibility": "Planned: version the data acquisition steps, record source licences, pin dependencies and seeds, and provide executable analysis with a documented environment.",
    "slug": "wearable-activity-intelligence",
    "title": "Wearable Activity Intelligence",
    "summary": "Build a reproducible pipeline for analysing wearable sensor data and classifying activity patterns.",
    "domain": "Wearable sensors",
    "categories": [
      "Time Series",
      "Machine Learning"
    ],
    "methods": [
      "Time-series preprocessing",
      "Feature engineering",
      "Classification",
      "Model comparison",
      "Explainability",
      "Error analysis"
    ],
    "technologies": [
      "Python",
      "pandas",
      "scikit-learn",
      "Plotly"
    ],
    "dataSource": "Candidate public datasets: WISDM, PAMAP2 or MHEALTH. Select one after reviewing participants, sensors and activity labels.",
    "whyItMatters": "Activity recognition needs to generalise to new people, rather than memorising participant-specific signals.",
    "exploratoryAnalysis": "Inspect sampling rates, sensor gaps, class balance and differences between participants.",
    "method": "Compare a simple baseline, a tree-based model and a boosting model using a reproducible feature pipeline.",
    "validation": "Split by participant before windowing; keep overlapping windows and preprocessing fit within training folds. Use subject-aware validation and a held-out participant test set.",
    "limitations": "Sensor placement, participant diversity and laboratory conditions can limit generalisation.",
    "visual": "signal"
  },
  {
    "id": "survival-risk-modelling",
    "status": "Planned",
    "question": "Compare statistical and machine-learning approaches to time-to-event prediction.",
    "demonstrates": [
      "EDA",
      "Kaplan-Meier",
      "Cox proportional hazards",
      "Survival prediction",
      "Calibration",
      "Discrimination",
      "Risk visualisation",
      "Model validation",
      "Visualisation"
    ],
    "reproducibility": "Planned: version the data acquisition steps, record source licences, pin dependencies and seeds, and provide executable analysis with a documented environment.",
    "slug": "survival-risk-modelling",
    "title": "Survival & Risk Modelling",
    "summary": "Compare statistical and machine-learning approaches to time-to-event prediction.",
    "domain": "Time-to-event analysis",
    "categories": [
      "Statistical Modelling",
      "Machine Learning",
      "Visualisation"
    ],
    "methods": [
      "Kaplan-Meier",
      "Cox proportional hazards",
      "Survival prediction",
      "Calibration",
      "Discrimination",
      "Risk visualisation"
    ],
    "technologies": [
      "Python",
      "lifelines",
      "scikit-survival",
      "Plotly"
    ],
    "dataSource": "A public time-to-event dataset will be selected with documented event definitions, censoring and reuse permissions.",
    "whyItMatters": "Time-to-event methods account for incomplete follow-up rather than treating censored observations as known outcomes.",
    "exploratoryAnalysis": "Inspect event frequencies, follow-up times, censoring and covariate distributions.",
    "method": "Compare Kaplan-Meier summaries, Cox regression and a machine-learning survival method. Check proportional hazards assumptions.",
    "validation": "Use held-out evaluation with censoring-aware discrimination and calibration at pre-specified horizons; fit preprocessing within training folds.",
    "limitations": "Censoring assumptions and dataset selection constrain interpretation. Demonstration results will not be presented as clinical evidence.",
    "visual": "survival"
  },
  {
    "id": "forecasting-under-uncertainty",
    "status": "Planned",
    "question": "Forecast a real public time series using proper temporal evaluation.",
    "demonstrates": [
      "EDA",
      "Seasonality",
      "Lag features",
      "Rolling backtesting",
      "Baseline comparison",
      "Prediction intervals",
      "Model validation",
      "Visualisation"
    ],
    "reproducibility": "Planned: version the data acquisition steps, record source licences, pin dependencies and seeds, and provide executable analysis with a documented environment.",
    "slug": "forecasting-under-uncertainty",
    "title": "Forecasting Under Uncertainty",
    "summary": "Forecast a real public time series using proper temporal evaluation.",
    "domain": "Energy and public time series",
    "categories": [
      "Time Series",
      "Statistical Modelling",
      "Machine Learning",
      "Visualisation"
    ],
    "methods": [
      "Seasonality",
      "Lag features",
      "Rolling backtesting",
      "Baseline comparison",
      "Prediction intervals"
    ],
    "technologies": [
      "Python",
      "pandas",
      "statsmodels",
      "scikit-learn",
      "Plotly"
    ],
    "dataSource": "Potential source: AEMO electricity demand or price data, subject to availability and reuse terms.",
    "whyItMatters": "Forecasts are useful when their uncertainty and performance at realistic future horizons are understood.",
    "exploratoryAnalysis": "Inspect trends, seasonality, missing intervals and structural changes.",
    "method": "Compare a seasonal naive baseline, statistical forecasting and gradient boosting with features available at prediction time.",
    "validation": "Use rolling-origin backtesting with horizon-specific errors and interval coverage. Never use random train/test splits for this series.",
    "limitations": "Regime changes, extreme events and unavailable future covariates may reduce forecast reliability.",
    "visual": "forecast"
  },
  {
    "id": "data-quality-anomaly-detection",
    "status": "Planned",
    "question": "Create a reusable pipeline for identifying data-quality problems.",
    "demonstrates": [
      "EDA",
      "Schema validation",
      "Missingness analysis",
      "Duplicate detection",
      "Outliers",
      "Anomaly detection",
      "Drift",
      "Automated reporting",
      "Model validation",
      "Visualisation"
    ],
    "reproducibility": "Planned: version the data acquisition steps, record source licences, pin dependencies and seeds, and provide executable analysis with a documented environment.",
    "slug": "data-quality-anomaly-detection",
    "title": "Data Quality & Anomaly Detection",
    "summary": "Create a reusable pipeline for identifying data-quality problems.",
    "domain": "Data operations",
    "categories": [
      "Data Quality",
      "Machine Learning",
      "Visualisation"
    ],
    "methods": [
      "Schema validation",
      "Missingness analysis",
      "Duplicate detection",
      "Outliers",
      "Anomaly detection",
      "Drift",
      "Automated reporting"
    ],
    "technologies": [
      "Python",
      "SQL",
      "DuckDB",
      "pandas",
      "scikit-learn",
      "React"
    ],
    "dataSource": "Select a public tabular dataset with documented schema; use separately labelled injected defects only to test detection.",
    "whyItMatters": "Quality checks make unreliable inputs visible before they affect analysis or decisions.",
    "exploratoryAnalysis": "Profile types, ranges, missingness, uniqueness and distribution shifts.",
    "method": "Combine deterministic schema checks with statistical anomaly detection and an interactive quality dashboard. The dashboard is planned.",
    "validation": "Measure precision and recall on labelled defects; inspect false positives and compare against simple rules. Keep injected anomalies separate from real observations.",
    "limitations": "Unusual records are not necessarily wrong. Detection thresholds require domain review.",
    "visual": "quality"
  },
  {
    "id": "causal-inference-lab",
    "status": "Planned",
    "question": "Demonstrate causal analysis using an appropriate public dataset.",
    "demonstrates": [
      "EDA",
      "Propensity scores",
      "Matching / weighting",
      "Difference-in-differences",
      "Covariate balance",
      "Sensitivity analysis",
      "Model validation",
      "Visualisation"
    ],
    "reproducibility": "Planned: version the data acquisition steps, record source licences, pin dependencies and seeds, and provide executable analysis with a documented environment.",
    "slug": "causal-inference-lab",
    "title": "Causal Inference Lab",
    "summary": "Demonstrate causal analysis using an appropriate public dataset.",
    "domain": "Policy and observational analysis",
    "categories": [
      "Causal Analysis",
      "Statistical Modelling",
      "Visualisation"
    ],
    "methods": [
      "Propensity scores",
      "Matching / weighting",
      "Difference-in-differences",
      "Covariate balance",
      "Sensitivity analysis"
    ],
    "technologies": [
      "Python",
      "SQL",
      "pandas",
      "statsmodels",
      "Plotly"
    ],
    "dataSource": "Select a public dataset with a defensible intervention, comparison group and temporal ordering.",
    "whyItMatters": "An association alone does not show what would change under an intervention.",
    "exploratoryAnalysis": "Define the estimand, inspect treatment assignment and compare covariate distributions.",
    "method": "Choose matching or weighting when overlap and measured-confounding assumptions are defensible; consider difference-in-differences only with suitable longitudinal data.",
    "validation": "Check covariate balance, overlap and sensitivity to unmeasured confounding. For difference-in-differences, examine pre-trends and the parallel-trends assumption.",
    "limitations": "Causal interpretation depends on explicit identification assumptions; diagnostics cannot prove that all confounding is removed.",
    "visual": "causal"
  }
]
export const dataScienceCategories = ['All','Statistical Modelling','Machine Learning','Time Series','Spatial','Data Quality','Causal Analysis','Visualisation']
export const dataScienceProjectBySlug = slug => dataScienceProjects.find(project => project.slug === slug)
export const filterDataScienceProjects = category => dataScienceProjects.filter(project => category === 'All' || project.categories.includes(category))
