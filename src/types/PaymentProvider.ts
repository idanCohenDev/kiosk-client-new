import { PossibleCurrencies } from "./Currencies";

export interface MakePaymentRequest {
  numberOfPayments: number;
  currency: PossibleCurrencies;
  amount: number;
}