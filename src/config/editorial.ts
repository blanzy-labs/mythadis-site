export const editorialStandardsHref = "/editorial-standards/";
export const bsMeterDisclaimer = "The BS Meter is a Mythadis editorial opinion based on the evidence available at publication. It is not a legal or regulatory finding and does not, by itself, allege fraud, criminal conduct or intentional deception.";
export const experimentDisclaimer = "Mythadis experiments are independent demonstrations conducted under the conditions described. Unless expressly stated otherwise, they are not accredited laboratory testing, peer-reviewed research, clinical trials or regulatory determinations.";
// Explicit metadata only: a planned methodology or mock fixture is not performed testing.
export const hasPerformedExperiment = (entry: { data: { experiment_performed?: boolean } }) => entry.data.experiment_performed === true;
