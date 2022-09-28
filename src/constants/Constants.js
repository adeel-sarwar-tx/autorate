export const Constants = {};

(function () {
  //this.host = "http://localhost:1337";
  //this.host = "https://www.main-bvxea6i-nuqsscay4nadw.us-4.platformsh.site";
  //this.host = "https://www.autostrapi.ratenavigators.com";
  this.host = "https://www.main-bvxea6i-nuqsscay4nadw.us-4.platformsh.site";
  // this.host = "https://autostrapi.herokuapp.com/";
  //this.host = "https://www.dev-54ta5gq-ij3lpddj3djbo.us-3.platformsh.site";
  //this.host = "http://51.81.243.191:1337";
  this.settings = this.host + "/settings";
  this.vehicle_makes = this.host + "/vehicle-makes";
  this.vehicles = this.host + "/vehicles";
  this.leads = this.host + "/leads";
  this.leadProsperPostLink = "https://api.leadprosper.io/ingest";
}.call(Constants));

export const Paths = {};

(function () {
  this.folder = "/form";
  this.vehicle1Year = this.folder + "/vehicle-1-year";
  this.vehicle1Make = this.folder + "/vehicle-1-make";
  this.vehicle1Model = this.folder + "/vehicle-1-model";
  this.addSecondVehicle = this.folder + "/add-second-vehicle";
  this.addThirdVehicle = this.folder + "/add-third-vehicle";
  this.vehicle2Year = this.folder + "/vehicle-2-year";
  this.vehicle2Make = this.folder + "/vehicle-2-make";
  this.vehicle2Model = this.folder + "/vehicle-2-model";
  this.vehicle3Year = this.folder + "/vehicle-3-year";
  this.vehicle3Make = this.folder + "/vehicle-3-make";
  this.vehicle3Model = this.folder + "/vehicle-3-model";
  this.autoInsurance = this.folder + "/auto-insurance";
  this.currentInsurer = this.folder + "/current-insurer";
  this.driversCount = this.folder + "/drivers-count";
  this.driver1Gender = this.folder + "/driver-1-gender";
  this.driver1Married = this.folder + "/driver-1-married";
  this.creditScore = this.folder + "/credit-score";
  this.driver1Accidents = this.folder + "/driver-1-accidents";
  this.driver1Tickets = this.folder + "/driver-1-tickets";
  this.driver1DUI = this.folder + "/driver-1-dui";

  this.driver2Gender = this.folder + "/driver-2-gender";
  this.driver2Married = this.folder + "/driver-2-married";
  this.driver2Accidents = this.folder + "/driver-2-accidents";
  this.driver2Tickets = this.folder + "/driver-2-tickets";
  this.driver2DUI = this.folder + "/driver-2-dui";
  this.driver2BirthDate = this.folder + "/driver-2-birth-date";

  this.driver3Gender = this.folder + "/driver-3-gender";
  this.driver3Married = this.folder + "/driver-3-married";
  this.driver3Accidents = this.folder + "/driver-3-accidents";
  this.driver3Tickets = this.folder + "/driver-3-tickets";
  this.driver3DUI = this.folder + "/driver-3-dui";
  this.driver3BirthDate = this.folder + "/driver-3-birth-date";

  this.ownOrRentHome = this.folder + "/own-or-rent-home";

  this.homeInsuranceQuote = this.folder + "/home-insurance-quote";
  this.renterInsuranceQuote = this.folder + "/renter-insurance-quote";

  this.servedInMilitary = this.folder + "/served-in-military";

  this.driver1BirthDate = this.folder + "/driver-1-birth-date";

  this.driverName = this.folder + "/driver-name";
  this.driver2Name = this.folder + "/driver-2-name";
  this.driver3Name = this.folder + "/driver-3-name";

  this.address = this.folder + "/address";

  this.email = this.folder + "/email";

  this.phoneNumber = this.folder + "/phone-number";
}.call(Paths));
