import React from 'react'
import VehicialeYearFormSection from './VehicleYearFormSection';
import ZipcodeFormSection from './ZipcodeFormSection';
import VehicleMakeFS from './VehicleMakeFS';
import VehicleModelFS from './VehicleModelFS';
import AddSecondVehicleFS from './AddSecondVehicleFS';
import SecondVehicleYearFS from './SecondVehicleYearFS';
import SecondVehicleMakeFS from './SecondVehicleMakeFS';
import SecondVehicleModelFS from './SecondVehicleModelFS';
import AddThirdVehicleFS from './AddThirdVehicleFS';
import ThirdVehicleYearFS from './ThirdVehicleYearFS';
import ThirdVehicleMakeFS from './ThirdVehicleMakeFS';
import ThirdVehicleModelFS from './ThirdVehicleModelFS';
import AutoInsurancePast30daysFS from './AutoInsurancePast30daysFS';
import CurrentInsurerFS from './CurrentInsurerFS';
import HowManyDriversFS from './HowManyDriversFS';
import GenderFS from './GenderFS';
import MarriedFS from './MarriedFS';
import CreditScoreFS from './CreditScoreFS';
import AtFaultAccidentsPast3yearsFS from './AtFaultAccidentsPast3yearsFS';
import TicketsPast3yearsFS from './TicketsPast3yearsFS';
import DUIpast3yearsFS from './DUIpast3yearsFS';
import SecondDriverGenderFS from './SecondDriverGenderFS';
import SecondDriverMarriedFS from './SecondDriverMarriedFS';
import SecondDriverAccidents3yearsFS from './SecondDriverAccidents3yearsFS';
import SecondDriverTickets3yearsFS from './SecondDriverTickets3yearsFS';
import SecondDriverDUI3yearsFS from './SecondDriverDUI3yearsFS';
import SecondDriverBirthdateFS from './SecondDriverBirthdateFS';
import ThirdDriverGenderFS from './ThirdDriverGenderFS';
import ThirdDriverMarriedFS from './ThirdDriverMarriedFS';
import ThirdDriverAccidents3yearsFS from './ThirdDriverAccidents3yearsFS';
import ThirdDriverTickets3yearsFS from './ThirdDriverTickets3yearsFS';
import ThirdDriverDUI3yearsFS from './ThirdDriverDUI3yearsFS';
import ThirdDriverBirthdateFS from './ThirdDriverBirthdateFS';
import OwnOrRentHomeFS from './OwnOrRentHomeFS';
import ReceiveHomeInsuranceQuotesFS from './ReceiveHomeInsuranceQuotesFS';
import ReceiveRenterInsuranceQuotesFS from './ReceiveRenterInsuranceQuotesFS';
import ServedInMilitaryFS from './ServedInMilitaryFS';
import BirthDateFS from './BirthDateFS';
import NameFS from './NameFS';
import SecondDriverNameFS from './SecondDriverNameFS';
import ThirdDriverNameFS from './ThirdDriverNameFS';
import AddressFS from './AddressFS';
import EmailFS from './EmailFS';
import PhoneNumberFS from './PhoneNumberFS';


export default function PageRoute({ page, setPage, data, setData, percentage, setPercentage, contactUsNumber, savingsAmount, cityName }) {
    switch (page) {
        case 1:
            return <ZipcodeFormSection setPage={setPage} data={data} setData={setData} cityName={cityName} contactUsNumber={contactUsNumber} />
        case 2:
            return <VehicialeYearFormSection data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 3:
            return <VehicleMakeFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 4:
            return <VehicleModelFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 5:
            return <AddSecondVehicleFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 6:
            return <SecondVehicleYearFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 7:
            return <SecondVehicleMakeFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 8:
            return <SecondVehicleModelFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 9:
            return <AddThirdVehicleFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 10:
            return <ThirdVehicleYearFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 11:
            return <ThirdVehicleMakeFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 12:
            return <ThirdVehicleModelFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 13:
            return <AutoInsurancePast30daysFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 14:
            return <CurrentInsurerFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 15:
            return <HowManyDriversFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 16:
            return <GenderFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 17:
            return <MarriedFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 18:
            return <CreditScoreFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 19:
            return <AtFaultAccidentsPast3yearsFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 20:
            return <TicketsPast3yearsFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 21:
            return <DUIpast3yearsFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 22:
            return <SecondDriverGenderFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 23:
            return <SecondDriverMarriedFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 24:
            return <SecondDriverAccidents3yearsFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 25:
            return <SecondDriverTickets3yearsFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 26:
            return <SecondDriverDUI3yearsFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 27:
            return <SecondDriverBirthdateFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 28:
            return <ThirdDriverGenderFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 29:
            return <ThirdDriverMarriedFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 30:
            return <ThirdDriverAccidents3yearsFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 31:
            return <ThirdDriverTickets3yearsFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 32:
            return <ThirdDriverDUI3yearsFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 33:
            return <ThirdDriverBirthdateFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 34:
            return <OwnOrRentHomeFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 35:
            return <ReceiveHomeInsuranceQuotesFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 36:
            return <ReceiveRenterInsuranceQuotesFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 37:
            return <ServedInMilitaryFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 38:
            return <BirthDateFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 39:
            return <NameFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 40:
            return <SecondDriverNameFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 41:
            return <ThirdDriverNameFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 42:
            return <AddressFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 43:
            return <EmailFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        case 44:
            return <PhoneNumberFS data={data} setData={setData} setPage={setPage} percentage={percentage} setPercentage={setPercentage} contactUsNumber={contactUsNumber} cityName={cityName} savingsAmount={savingsAmount} />

        default:
            return (<div>404</div>);
    }
}
