import { MEDICAL_TERMS_PART_1, type RawExpandedMedicalTerm } from './part1';
import { MEDICAL_TERMS_PART_2 } from './part2';
import { MEDICAL_TERMS_PART_3 } from './part3';
import { MEDICAL_TERMS_PART_4 } from './part4';
import { MEDICAL_TERMS_PART_5 } from './part5';
import { MEDICAL_TERMS_PART_6 } from './part6';
import { MEDICAL_TERMS_PART_7 } from './part7';

export type { RawExpandedMedicalTerm };

export const EXPANDED_MEDICAL_TERMS: RawExpandedMedicalTerm[] = [
  ...MEDICAL_TERMS_PART_1,
  ...MEDICAL_TERMS_PART_2,
  ...MEDICAL_TERMS_PART_3,
  ...MEDICAL_TERMS_PART_4,
  ...MEDICAL_TERMS_PART_5,
  ...MEDICAL_TERMS_PART_6,
  ...MEDICAL_TERMS_PART_7,
];
