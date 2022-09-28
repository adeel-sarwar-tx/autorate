import React from "react";
import VehicialeYearFormSection from "./VehicleYearFormSection";
import ZipcodeFormSection from "./ZipcodeFormSection";
import VehicleMakeFS from "./VehicleMakeFS";
import VehicleModelFS from "./VehicleModelFS";
import AddSecondVehicleFS from "./AddSecondVehicleFS";
import SecondVehicleYearFS from "./SecondVehicleYearFS";
import SecondVehicleMakeFS from "./SecondVehicleMakeFS";
import SecondVehicleModelFS from "./SecondVehicleModelFS";
import AddThirdVehicleFS from "./AddThirdVehicleFS";
import ThirdVehicleYearFS from "./ThirdVehicleYearFS";
import ThirdVehicleMakeFS from "./ThirdVehicleMakeFS";
import ThirdVehicleModelFS from "./ThirdVehicleModelFS";
import AutoInsurancePast30daysFS from "./AutoInsurancePast30daysFS";
import CurrentInsurerFS from "./CurrentInsurerFS";
import HowManyDriversFS from "./HowManyDriversFS";
import GenderFS from "./GenderFS";
import MarriedFS from "./MarriedFS";
import CreditScoreFS from "./CreditScoreFS";
import AtFaultAccidentsPast3yearsFS from "./AtFaultAccidentsPast3yearsFS";
import TicketsPast3yearsFS from "./TicketsPast3yearsFS";
import DUIpast3yearsFS from "./DUIpast3yearsFS";
import SecondDriverGenderFS from "./SecondDriverGenderFS";
import SecondDriverMarriedFS from "./SecondDriverMarriedFS";
import SecondDriverAccidents3yearsFS from "./SecondDriverAccidents3yearsFS";
import SecondDriverTickets3yearsFS from "./SecondDriverTickets3yearsFS";
import SecondDriverDUI3yearsFS from "./SecondDriverDUI3yearsFS";
import SecondDriverBirthdateFS from "./SecondDriverBirthdateFS";
import ThirdDriverGenderFS from "./ThirdDriverGenderFS";
import ThirdDriverMarriedFS from "./ThirdDriverMarriedFS";
import ThirdDriverAccidents3yearsFS from "./ThirdDriverAccidents3yearsFS";
import ThirdDriverTickets3yearsFS from "./ThirdDriverTickets3yearsFS";
import ThirdDriverDUI3yearsFS from "./ThirdDriverDUI3yearsFS";
import ThirdDriverBirthdateFS from "./ThirdDriverBirthdateFS";
import OwnOrRentHomeFS from "./OwnOrRentHomeFS";
import ReceiveHomeInsuranceQuotesFS from "./ReceiveHomeInsuranceQuotesFS";
import ReceiveRenterInsuranceQuotesFS from "./ReceiveRenterInsuranceQuotesFS";
import ServedInMilitaryFS from "./ServedInMilitaryFS";
import BirthDateFS from "./BirthDateFS";
import NameFS from "./NameFS";
import SecondDriverNameFS from "./SecondDriverNameFS";
import ThirdDriverNameFS from "./ThirdDriverNameFS";
import AddressFS from "./AddressFS";
import EmailFS from "./EmailFS";
import PhoneNumberFS from "./PhoneNumberFS";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Paths as routePaths } from "../constants/Constants";

export default function Paths({
  page,
  setPage,
  data,
  setData,
  percentage,
  setPercentage,
  contactUsNumber,
  savingsAmount,
  cityName,
}) {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ZipcodeFormSection
              setPage={setPage}
              data={data}
              setData={setData}
              cityName={cityName}
              contactUsNumber={contactUsNumber}
            />
          }
        />

        <Route
          exact
          path={routePaths.vehicle1Year}
          element={
            <VehicialeYearFormSection
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />

        <Route
          exact
          path={routePaths.vehicle1Make}
          element={
            <VehicleMakeFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />

        <Route
          exact
          path={routePaths.vehicle1Model}
          element={
            <VehicleModelFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
        <Route
          exact
          path={routePaths.addSecondVehicle}
          element={
            <AddSecondVehicleFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
        <Route
          exact
          path={routePaths.vehicle2Year}
          element={
            <SecondVehicleYearFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
        <Route
          exact
          path={routePaths.vehicle2Make}
          element={
            <SecondVehicleMakeFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
        <Route
          exact
          path={routePaths.vehicle2Model}
          element={
            <SecondVehicleModelFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
        <Route
          exact
          path={routePaths.addThirdVehicle}
          element={
            <AddThirdVehicleFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
        <Route
          exact
          path={routePaths.vehicle3Year}
          element={
            <ThirdVehicleYearFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
        <Route
          exact
          path={routePaths.vehicle3Make}
          element={
            <ThirdVehicleMakeFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
        <Route
          exact
          path={routePaths.vehicle3Model}
          element={
            <ThirdVehicleModelFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
        <Route
          exact
          path={routePaths.autoInsurance}
          element={
            <AutoInsurancePast30daysFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
        <Route
          exact
          path={routePaths.currentInsurer}
          element={
            <CurrentInsurerFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
        <Route
          exact
          path={routePaths.driversCount}
          element={
            <HowManyDriversFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
        <Route
          exact
          path={routePaths.driver1Gender}
          element={
            <GenderFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
        <Route
          exact
          path={routePaths.driver1Married}
          element={
            <MarriedFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
        <Route
          exact
          path={routePaths.creditScore}
          element={
            <CreditScoreFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
        <Route
          exact
          path={routePaths.driver1Accidents}
          element={
            <AtFaultAccidentsPast3yearsFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
        <Route
          exact
          path={routePaths.driver1Tickets}
          element={
            <TicketsPast3yearsFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
        <Route
          exact
          path={routePaths.driver1DUI}
          element={
            <DUIpast3yearsFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
        <Route
          exact
          path={routePaths.driver2Gender}
          element={
            <SecondDriverGenderFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
        <Route
          exact
          path={routePaths.driver2Married}
          element={
            <SecondDriverMarriedFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
        <Route
          exact
          path={routePaths.driver2Accidents}
          element={
            <SecondDriverAccidents3yearsFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
        <Route
          exact
          path={routePaths.driver2Tickets}
          element={
            <SecondDriverTickets3yearsFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
        <Route
          exact
          path={routePaths.driver2DUI}
          element={
            <SecondDriverDUI3yearsFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
        <Route
          exact
          path={routePaths.driver2BirthDate}
          element={
            <SecondDriverBirthdateFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
        <Route
          exact
          path={routePaths.driver3Gender}
          element={
            <ThirdDriverGenderFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
        <Route
          exact
          path={routePaths.driver3Married}
          element={
            <ThirdDriverMarriedFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
        <Route
          exact
          path={routePaths.driver3Accidents}
          element={
            <ThirdDriverAccidents3yearsFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
        <Route
          exact
          path={routePaths.driver3Tickets}
          element={
            <ThirdDriverTickets3yearsFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
        <Route
          exact
          path={routePaths.driver3DUI}
          element={
            <ThirdDriverDUI3yearsFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
        <Route
          exact
          path={routePaths.driver3BirthDate}
          element={
            <ThirdDriverBirthdateFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
        <Route
          exact
          path={routePaths.ownOrRentHome}
          element={
            <OwnOrRentHomeFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
        <Route
          exact
          path={routePaths.homeInsuranceQuote}
          element={
            <ReceiveHomeInsuranceQuotesFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
        <Route
          exact
          path={routePaths.renterInsuranceQuote}
          element={
            <ReceiveRenterInsuranceQuotesFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
        <Route
          exact
          path={routePaths.servedInMilitary}
          element={
            <ServedInMilitaryFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
        <Route
          exact
          path={routePaths.driver1BirthDate}
          element={
            <BirthDateFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
        <Route
          exact
          path={routePaths.driverName}
          element={
            <NameFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
        <Route
          exact
          path={routePaths.driver2Name}
          element={
            <SecondDriverNameFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
        <Route
          exact
          path={routePaths.driver3Name}
          element={
            <ThirdDriverNameFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
        <Route
          exact
          path={routePaths.address}
          element={
            <AddressFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
        <Route
          exact
          path={routePaths.email}
          element={
            <EmailFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
        <Route
          exact
          path={routePaths.phoneNumber}
          element={
            <PhoneNumberFS
              data={data}
              setData={setData}
              setPage={setPage}
              percentage={percentage}
              setPercentage={setPercentage}
              contactUsNumber={contactUsNumber}
              cityName={cityName}
              savingsAmount={savingsAmount}
            />
          }
        />
      </Routes>
    </Router>
  );
}