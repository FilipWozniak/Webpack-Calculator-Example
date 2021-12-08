const milesToKilometers = (distanceMiles) => {
    return (1.60934 * distanceMiles).toFixed(2);
};
  
const kilometersToMiles = (distanceKilometers) => {
    return (0.621371 * distanceKilometers).toFixed(2); 
};

export {milesToKilometers, kilometersToMiles};