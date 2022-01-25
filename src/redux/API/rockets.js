const fetchrocketsAsync = async () => {
  const res = await fetch('https://api.spacexdata.com/v3/rockets').then(
    (data) => data.json(),
  );
  return res;
};

export default { fetchrocketsAsync };
