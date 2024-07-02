import { useState } from "react";
import Payment from "components/buying/payment";
import PhoneRecording from "components/buying/phone-recording";
import SuccessPhone from "components/buying/success-phone";
import ContactModal from "components/buying/contact-modal/contact-modal";
import OnBoarding from "components/buying/on-boarding/on-boarding";
import { phoneRegister } from "api/phone-register";
import { Screens } from "types/Screens";
import ChooseCurrencyScreen from "screens/ChooseCurrency/ChooseCurrencyScreen";
import { useAppDispatch, useAppSelector } from "store/store";
import { setCurrentScreen } from "store/navigationSlice";
import ChooseAmountScreen from "screens/ChooseAmountScreen/ChooseAmountScreen";
import PaymentScreen from "screens/PaymentScreen/PaymentScreen";
import PaymentSuccessScreen from "screens/PaymentSuccessScreen/PaymentSuccessScreen";
import OrderSummaryScreen from "screens/OrderSummaryScreen/OrderSummaryScreen";

export default function Buying({
  setShow,
  show,
}: {
  setShow: (val: boolean) => void;
  show: boolean;
}) {
  const dispatch = useAppDispatch();
  const currentScreen = useAppSelector(
    (state) => state.navigation.currentScreen
  );
  const [isShowOnBoarding, setIsShowOnBoarding] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  switch (currentScreen) {
    case Screens.PHONE_RECORDING:
      return (
        <PhoneRecording
          onNext={(phoneNumber: string) => {
            dispatch(setCurrentScreen(Screens.PHONE_SUCCESS));
            setPhoneNumber(phoneNumber);
            phoneRegister(phoneNumber);
          }}
          onBack={() => {
            dispatch(setCurrentScreen(Screens.ON_BOARDING));
            setIsShowOnBoarding(false);
            setShow(false);
          }}
        />
      );
    case Screens.PHONE_SUCCESS:
      return (
        <SuccessPhone
          onBack={() => {
            dispatch(setCurrentScreen(Screens.ON_BOARDING));
            setShow(false);
          }}
        />
      );
    case Screens.CHOOSE_CURRENCY:
      return <ChooseCurrencyScreen />;
    case Screens.CHOOSE_AMOUNT:
      return <ChooseAmountScreen />;
    case Screens.PAYMENT:
      return <PaymentScreen />;
    case Screens.PAYMENT_SUCCESS:
      return <PaymentSuccessScreen />;
    case Screens.ORDER_SUMMARY:
      return <OrderSummaryScreen />;
    default:
      return (
        <>
          <Payment
            setStep={(step: Screens) => dispatch(setCurrentScreen(step))}
            setIsShowOnBoarding={setIsShowOnBoarding}
          />
          <ContactModal
            show={show}
            setShow={setShow}
            phoneNumber={phoneNumber}
          />
          <OnBoarding
            show={isShowOnBoarding}
            setShow={(v) => setIsShowOnBoarding(v)}
          />
        </>
      );
  }
}
