export interface Medicine {
  id: number;
  name: string;
  activeIngredient: string;
  activeIngredientDescription?: string;
  packaging?: string;
  manufacturer?: string;
  country?: string;
  imageUrl?: string;
  wholesaleInfo?: string;
  nppInfo?: string;
  requiresPrescription?: boolean;
  isInNPP?: boolean;
}
