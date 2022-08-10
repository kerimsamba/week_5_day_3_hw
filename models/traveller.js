const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const result = [];

  this.journeys.forEach((journey) => {
    const location = journey.startLocation
    result.push(location);
  });
  return result;
};


Traveller.prototype.getJourneyEndLocations = function () {
  const result = [];

  this.journeys.forEach((journey) => {
    const location = journey.endLocation;
    result.push(location);
  });
  return result;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result = this.journeys.filter((journey) => {
    return journey.transport == transport;
  });
  return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  });
  return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance;
  },0);
};
  


Traveller.prototype.getUniqueModesOfTransport = function () {
  const all_modes = [];
  let unique_modes = [];

  this.journeys.forEach((journey) => {
    const transport_method = journey.transport;
    all_modes.push(transport_method);
  });
  unique_modes = [...new Set(all_modes)];
  return unique_modes;
};


module.exports = Traveller;
